import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
      isLoading: true,
      error: null,
    };
    this.pickRandomStudent = this.pickRandomStudent.bind(this);
    this.leastPickedStudent = this.leastPickedStudent.bind(this);
  };

  componentDidMount() {
    //fetch from DB list of students, add to state
    fetch('/students')
    .then(response => response.json())
    .then(data => {
      this.setState({
        students: data,
        picked: null,
        isLoading: false
      })
    })
    .catch(error => this.setState({ error, isLoading: false })
    );
  }

  pickRandomStudent() {
    //Figure we can give John the option of just picking a random student along with picking the least called on students
    const min = 1;
    const max = this.state.students.length;
    // console.log("Max ", max)
    const index = Math.floor(Math.random() * (max - min) + min);
    // console.log("Index", index);
    console.log("state ", this.state.students[index])
    this.setState({
      picked: this.state.students[index]
    })
  }

  leastPickedStudent() {
    //fetch request, returns single student?
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
      <div>
        <button onClick={this.pickRandomStudent}>Test Generator</button>
      </div>
    )
  }
}

export default App;