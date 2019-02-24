import { render } from 'enzyme';
import * as React from 'react';
import StudentCard from '../StudentCard.jsx';

const pickedStudent = {"id":1,"name":["Mellie","Gibson"],"profilePic":"https://s3.amazonaws.com/uifaces/faces/twitter/matbeedotcom/128.jpg",
"lastCalled":"Wed Jan 09 2019 16:58:10 GMT-0800 (Pacific Standard Time)","timesCalled":6};

const myMock = jest.fn();

describe('Student Card Component', () => {
  it('Should render the card and home button properly', () => {
    const wrapper = render(<StudentCard data={pickedStudent} onClose={myMock}/>);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(2);
    expect(wrapper.find('hr').length).toEqual(2);
    expect(wrapper.find('span').length).toEqual(1);
  });
});
