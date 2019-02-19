import React from 'react';

import StudentCard from './StudentCard.jsx';
import AllStudents from './AllStudents.jsx';
import Spinner from './Spinner.jsx';
import Navigation from './Navigation.jsx';
import replacementPic from '../data.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
      picked: null,
      view: 'home',
      isLoading: true,
      error: null,
    };
    this.pickRandomStudent = this.pickRandomStudent.bind(this);
    this.leastPickedStudent = this.leastPickedStudent.bind(this);
    this.viewHome = this.viewHome.bind(this);
    this.viewAll = this.viewAll.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  };

  componentDidMount() {
    //fetch from (DB) list of students, sort data, then add to state
    //TO DO -- Add stock image as profilePic if pic is undefined
    fetch('/students')
    .then(response => response.json())
    .then(data => {
      data.forEach((student) => {
        student.name = student.name[0] + " " + student.name[1];
        if (!student["profilePic"]) {
          student["profilePic"] = replacementPic();
      }})
      this.setState({
        students: data,
        isLoading: false
      })
    })
    .catch(error => this.setState({ error, isLoading: false })
    );
  }

  pickRandomStudent() {
    // Figure we can give John the option of just picking a random student along with picking the least called on students
    // Using this picRandomStudent could trigger the Wheel of Death animation maybe?
    const max = this.state.students.length;
    const index = Math.floor(Math.random() * (max - 1) + 1);
    // Set picked to the random Index, and update the # of 
    this.setState({
      picked: this.state.students[index],
      view: 'card'
    });
  }

  leastPickedStudent() {
    // Fetch request, returns single student and update entry in DB?
    // Placeholder function for dev purposes, not the most robust but it's all gonna be scrapped anyways

    // Since data has been sorted in fetch request, index 0 should be a student with the fewest timesCalled
    this.setState({
      picked: this.state.students[0],
      view: 'card'
    })
  }

  // viewHome resets everything
  viewHome() {
    this.setState({ 
      view: 'home',
      picked: null,
      studentsToShow: 0,
      filteredStudents: this.state.students
    });
  }

  // Renders AllStudents component
  viewAll() {
    this.setState({ view: 'all' });
  }

  uploadFile(files) {
    var reader = new FileReader();
    reader.onload = function(e) {
      // Use reader.result
      alert(reader.result)
    }
    reader.readAsText(files[0]);
}

  render() {
    if (this.state.isLoading) {
      return ( <Spinner /> ) 
    }
    if (this.state.view === 'home') {
      return ( <Navigation pickRandom={this.pickRandomStudent} pickLeast={this.leastPickedStudent} viewAll={this.viewAll} handleFiles={this.uploadFile}/> );
    }
    if (this.state.view === 'card') { 
      return ( 
      <div>
        <button onClick={this.viewHome}>Back</button>
        <StudentCard data={this.state.picked}/>
      </div> 
      ) 
    }
    if (this.state.view === 'all') {
      return ( <AllStudents onClose={this.viewHome} items={this.state.students}/> )
    }
  }
};

export default App;



/*
Notes: http://wheelnavjs.softwaretailoring.net/index.html

*/