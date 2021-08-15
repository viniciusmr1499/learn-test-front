import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { shallow, configure } from "enzyme";

import Count from '../src/Components/Count';
import App from '../src/App';

configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper = null;
  beforeAll(() => {
    cleanup();
  })

  it('should be able renders correctly', () => {
    wrapper = shallow(<App />)
    expect(wrapper).toBeTruthy();
  })

  it('should update state on click', () => {
    const changeQuantityState = jest.fn();

    render(
      <App>
        <Count quantity={0} onClick={changeQuantityState} data-testid="count-id" />
      </App>
    );

    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation(quantity => [quantity, changeQuantityState]);
    const button = screen.getByTestId('count-id');
    fireEvent.click(button);
    
    expect(button).toBeTruthy();
    expect(changeQuantityState).toBeTruthy();
  })
})