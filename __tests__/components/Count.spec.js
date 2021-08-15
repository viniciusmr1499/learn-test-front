import React from 'react';
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { cleanup } from '@testing-library/react';

import Count from '../../src/Components/Count';

configure({ adapter: new Adapter() });

describe('Count', () => {
  let wrapper = null;
  beforeAll(() => {
    cleanup();
  })

  it('should be able renders correctly', () => {
    wrapper = shallow(<Count />)
    expect(wrapper.find('p').length).toEqual(1);
  })
})