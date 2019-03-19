import React from 'react';

const Submit = ({addStudent, submitClass}) => (
  <div>
    <input type="text" placeholder="Student Name" onChange={addStudent}/><br/>
    <input type="submit" value="Submit Class" onSubmit={submitClass}/>
  </div>
);

export default Submit;