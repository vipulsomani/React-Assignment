import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

//test('renders learn react link', () => {
  //const { getByText } = render(<App />);
  //const linkElement = getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
//});
describe("Counter testing", () =>{
  test("Render Hello World",() => {
    const {getByText} = render(<App></App>)
    const linkElement = getByText(/"HELLO WORLD I Am Here"/);
    expect(linkElement).toBeInTheDocument();
  });
});
