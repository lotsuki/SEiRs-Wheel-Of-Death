import { render, shallow } from 'enzyme';
import * as React from 'react';
import App from '../App.jsx';

// import { pickRandomStudent, leastPickedStudent, toggleView, toggleAll } from '../App.jsx';

import dummyData from '../../../DB/dummyData.json';


describe('App Component', () => {
  const wrapper = render(<App />);
  it('Should render and match Snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });

  it('Should not render anything besides the Spinner while isLoading state is active', () => {
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(0);
  });

  it('Should render 3 buttons after loading', () => {
    const shallowWrapper = shallow(<App />, {disableLifecycleMethods: true});
    shallowWrapper.setState({
      isLoading: false
    });
    expect(shallowWrapper.find('button').length).toEqual(3);
  });
});


describe('Random Student Button', () => {
  it('Should update state with an object containing the proper keys', () => {
    const appComponent = shallow(<App />, {disableLifecycleMethods: true});
    appComponent.setState({
      isLoading: false,
      students: dummyData
    })
    appComponent.find('.btn-random').simulate('click');
    appComponent.update();

    expect(appComponent.state().picked).toEqual(expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(Array),
      profilePic: expect.any(String),
      lastCalled: expect.any(String),
      timesCalled: expect.any(Number)
    }));
  });
});



/*
{"id":1,"name":["Mellie","Gibson"],"profilePic":"https://s3.amazonaws.com/uifaces/faces/twitter/matbeedotcom/128.jpg",
"lastCalled":"Wed Jan 09 2019 16:58:10 GMT-0800 (Pacific Standard Time)","timesCalled":6}
*/


// This test still runs, but it doesn't pass because ComponentDidMount isn't being fired.
// Passes without the componentDidMount line
// describe('Render page after loading', () => {  
//   it('Should render three buttons after componentDidMount fires', async () => {
//     const props = { fetchData: Promise.resolve('data') };
//     const shallowWrapper = shallow(<App {...props}/>);
//    //  shallowWrapper.instance().componentDidMount();
//     await props.fetchData;
//     expect(shallowWrapper.find('button').length).toEqual(3);
//   })
// });