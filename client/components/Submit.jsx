import React from 'react';


class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentNames: {},
      studentURLs: {},
      url: ''
    };

    this.addStudent = this.addStudent.bind(this);
    this.addURL = this.addURL.bind(this);
    this.submitClass = this.submitClass.bind(this);
  }

   addStudent(e) {
    let names = this.state.studentNames;
    names[e.currentTarget.className] = e.currentTarget.value;

    this.setState({ studentNames: names });
   }

   addURL(e) {
    let urls = this.state.studentURLs;
    urls[e.currentTarget.className] = e.currentTarget.value;

    this.setState({ studentURLs: urls });
   }

  submitClass(e) {
    let data = [];
    for (let key in this.state.studentNames) {
      data.push({
        fullname: this.state.studentNames[key],
        photo: this.state.studentURLs[key]
      })
    }

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
      <input type="text" className="1" placeholder="Student Name"onChange={this.addStudent}/>
      <input type="text" className="1" placeholder="URL" onChange={this.addURL}/><br/>
       <input type="text" className="2"  placeholder="Student Name" onChange={this.addStudent}/>
      <input type="text" className="2" placeholder="URL" onChange={this.addURL}/><br/>
       <input type="text" className="3" placeholder="Student Name" onChange={this.addStudent}/>
      <input type="text" className="3" placeholder="URL" onChange={this.addURL}/><br/>
      <input type="submit" value="Submit" />
    </form>
  )

 }
}

export default Submit;