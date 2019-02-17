import { render, mount } from 'enzyme';
import * as React from 'react';
import AllStudents from '../AllStudents.jsx';
import App from '../App.jsx';

import dummyData from '../../../DB/dummyData.json';

describe('All Students Component', () => {
  it('Should render a floating back button', () => {
    const wrapper = render(<AllStudents items={dummyData}/>)
    expect(wrapper.find('.btn-fixed').length).toEqual(1);
  });
});

// Not sure if this is the best way to test this
// Should I be testing the render of AllStudents here or in the parent component (App)?
// Mount seems to be a better option than using shallow on App and AllStudents
describe('Back Button', () => {
  it('Should update state and render the home page', () => {
    const appComponent = mount(<App />, {disableLifecycleMethods: true});
    appComponent.setState({
      isLoading: false,
      view: 'all'
    })
    expect(appComponent.find('.btn-fixed').length).toEqual(1);
    appComponent.find('.btn-fixed').simulate('click');
    appComponent.update();

    expect(appComponent.state().view).toEqual('home');
    expect(appComponent.find('.btn-fixed').length).toEqual(0);
  })
})

describe('Next Button', () => {
  it('Should update state and render the next 10 students', () => {
    const appComponent = mount(<App />, {disableLifecycleMethods: true});
    appComponent.setState({
      isLoading: false,
      students: dummyData,
      studentsToShow: 10,
      view: 'all'
    })
    appComponent.find('.btn-next').simulate('click');
    appComponent.update();

    expect(appComponent.state().studentsToShow).toEqual(20)
  })
})