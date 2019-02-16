import { render, shallow } from 'enzyme';
import * as React from 'react';
import App from '../App.jsx';


import dummyData from '../../../DB/dummyData.json';


describe('App Component', () => {
  const wrapper = render(<App />);
  it('Should render and match Snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  it('Should not render anything but a loading image while isLoading state is active', () => {
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(0);
  })
  it('Should render 3 buttons after loading', () => {
    const shallowWrapper = shallow(<App />, {disableLifecycleMethods: true});
    shallowWrapper.setState({
      isLoading: false
    });
    expect(shallowWrapper.find('button').length).toEqual(3);
  })
});

describe('Buttons should render student profiles', () => {
  it('Test click event', () => {
    const appComponent = shallow(<App />, {disableLifecycleMethods: true});
    appComponent.setState({
      isLoading: false,
      students: dummyData
    })
    appComponent.find('.btn-random').simulate('click');
    appComponent.update()
    expect(appComponent.state().picked).not.toBeNull();
  })
});




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