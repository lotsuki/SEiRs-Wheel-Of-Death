import { render } from 'enzyme';
import * as React from 'react';
import AllStudents from '../AllStudents.jsx';

import dummyData from '../../../DB/dummyData.json';

describe('All Students Component', () => {
  it('should render a floating back button', () => {
    const wrapper = render(<AllStudents items={dummyData}/>)
    expect(wrapper.find('.btn-fixed').length).toEqual(1);
  });
});