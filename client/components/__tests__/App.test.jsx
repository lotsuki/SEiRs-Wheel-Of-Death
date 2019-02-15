import { render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import App from '../App.jsx';


configure({ adapter: new Adapter() });



describe('App Component', () => {
  it('Should render three buttons', () => {
    const wrapper = render(<App />)
    expect(wrapper.find('button').length).toEqual(3)
  })
});