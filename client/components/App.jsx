import React from 'react';
import update from 'immutability-helper';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
      picked: null,
      isLoading: true,
      error: null,
    };
    this.pickRandomStudent = this.pickRandomStudent.bind(this);
    this.leastPickedStudent = this.leastPickedStudent.bind(this);
  };

  componentDidMount() {
    //fetch from (DB) list of students, sort data, then add to state
    fetch('/students')
    .then(response => response.json())
    .then(data => {
      data.sort(function (a, b) {
        return a.timesCalled - b.timesCalled;
      });
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
    const max = this.state.students.length;
    const index = Math.floor(Math.random() * (max - 1) + 1);
    console.log("Index", index)
    console.log("state ", this.state.students[index])
    // Set picked to the random Index, and update the # of timesCalled
    this.setState({
      picked: this.state.students[index],
      students: update(this.state.students, {[index]: {timesCalled: {$set: this.state.students[index].timesCalled ++}}})
    });
  }

  leastPickedStudent() {
    // Fetch request, returns single student and update entry in DB?
    // Placeholder function for dev purposes

    // Since data has been sorted in fetch request, index 0 should be a student with the fewest timesCalled
    this.setState({
      picked: this.state.students[0],
      students: update(this.state.students, {0: {timesCalled: {$set: this.state.students[0].timesCalled ++}}})
    })
    // Re-sort the students
    const student = this.state.students.sort(function (a, b) {
      return a.timesCalled - b.timesCalled;
    })
    // Reset the state with our newly sorted and updated students data
    this.setState({
      students: student
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <img src='https://thumbs.gfycat.com/FaithfulDeafeningBullmastiff-small.gif'></img>
        </div>
      );
    }
    return (
      <div>Open Console/React tools for results
        <br/>
        <button onClick={this.pickRandomStudent}>Test Random Student</button>
        <br/>
        <button onClick={this.leastPickedStudent}>Test Least Picked Student</button>

      </div>
    )
  }
}

export default App;