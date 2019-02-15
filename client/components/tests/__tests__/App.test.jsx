import { render } from 'enzyme';
import React from 'react';
import App from '../../App.jsx';


describe('App Component', () => {
  it('Should render three buttons', () => {
    const wrapper = render(<App />)
    expect(wrapper.find('button').length).toEqual(3)
  })
});