import React from 'react';


class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: []
    };

    this.addStudent = this.addStudent.bind(this);
    this.submitClass = this.submitClass.bind(this);
  }

  addStudent(e) {
    this.setState({
      student: [e.currentTarget.value]
    });
  }

  submitClass() {
    console.log('submit!')
    var data = this.state.student;
      fetch('students/submit', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
             "Content-Type": "application/json",
              // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      })
      .then(response => response.json());
  }
 render() {
  return(
    <form onSubmit={this.submitClass}>
      <input type="text" placeholder="Student Name" onChange={this.addStudent}/><br/>
      <input type="submit" value="Submit" />
    </form>
  )

 }
}

export default Submit;