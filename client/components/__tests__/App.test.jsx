import { render, shallow } from 'enzyme';
import * as React from 'react';
import App from '../App.jsx';

// import { pickRandomStudent, leastPickedStudent, toggleView, toggleAll } from '../App.jsx';

import dummyData from '../../../DB/dummyData.json';


describe('App Component', () => {
  const wrapper = render(<App />);
  it('Should render and match Snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

  it('Should not render anything besides the Spinner while isLoading state is active', () => {
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(0);
  });

  it('Should render 3 buttons after loading', () => {
    const shallowWrapper = shallow(<App />, {disableLifecycleMethods: true});
    shallowWrapper.setState({
      isLoading: false
    })
    expect(shallowWrapper.find('button').length).toEqual(3);
  });
});


const properKeys = {
  id: expect.any(Number),
  name: expect.any(Array),
  profilePic: expect.any(String),
  lastCalled: expect.any(String),
  timesCalled: expect.any(Number)
};

describe('Random Student Button', () => {
  const appComponent = shallow(<App />, {disableLifecycleMethods: true});
  appComponent.setState({
    isLoading: false,
    students: dummyData
  })

  it('Should update state with an object containing the proper keys', () => {
    appComponent.find('.btn-random').simulate('click');
    appComponent.update();
    expect(appComponent.state().picked).toEqual(expect.objectContaining(properKeys));
  });
});


describe('Least Picked Student Button', () => {
  const appComponent = shallow(<App />, {disableLifecycleMethods: true});
  appComponent.setState({
    isLoading: false,
    students: dummyData
  })

  it('Should update state with an object containing the proper keys', () => {
    appComponent.find('.btn-least').simulate('click');
    appComponent.update(); 
    expect(appComponent.state().picked).toEqual(expect.objectContaining(properKeys));
  });
});


describe('All Students Button', () => {
  it('Should update state', () => {
    const appComponent = shallow(<App />, {disableLifecycleMethods: true});
    appComponent.setState({
      isLoading: false
    })
    appComponent.find('.btn-all').simulate('click');
    appComponent.update()
    
    expect(appComponent.state().view).toEqual('all');
  });
});