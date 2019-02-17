import React from 'react';

import StudentCard from './StudentCard.jsx';
import AllStudents from './AllStudents.jsx';
import Spinner from './Spinner.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
      picked: null,
      studentsToShow: 0,
      filteredStudents: [],
      view: 'home',
      isLoading: true,
      error: null,
    };
    this.pickRandomStudent = this.pickRandomStudent.bind(this);
    this.leastPickedStudent = this.leastPickedStudent.bind(this);
    this.viewHome = this.viewHome.bind(this);
    this.viewAll = this.viewAll.bind(this);
  };

  componentDidMount() {
    //fetch from (DB) list of students, sort data, then add to state
    //TO DO -- Add stock image as profilePic if pic is undefined
    fetch('/students')
    .then(response => response.json())
    .then(data => {
      data.sort((a, b) => {
        return a.timesCalled - b.timesCalled;
      })
      data.forEach((student) => {
        return student.name = student.name[0] + " " + student.name[1];
      })
      this.setState({
        students: data,
        filteredStudents: data,
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

  // Could move the buttons into their own component for more modularity?
  // Replace or CSS buttons to make this part of the app more visually pleasing
  render() {
    if (this.state.isLoading) {
      return ( <Spinner /> ) 
    }
    if (this.state.view === 'home') {
      return (
        <div>
          <button className="btn-random" onClick={this.pickRandomStudent}>Test Random Student</button>
          <button className="btn-least" onClick={this.leastPickedStudent}>Test Least Picked Student</button>
          <button className="btn-all" onClick={this.viewAll}>Test See All Students</button>
        </div>
      );
    }
    if (this.state.view === 'card') { 
      return ( <StudentCard onClose={this.viewHome} data={this.state.picked}/> ) 
    }
    if (this.state.view === 'all') {
      return ( <AllStudents onClose={this.viewHome} items={this.state.filteredStudents}/> )
    }
  }
};

export default App;



/*
Notes: http://wheelnavjs.softwaretailoring.net/index.html

*/