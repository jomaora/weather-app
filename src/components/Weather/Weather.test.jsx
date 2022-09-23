import React from "React";
import { screen, render } from "@testing-library/react";
import Weather from "./Weather";

test('should render Wheather', async () => {
  const temperature = 10;
  render(<Weather temperature={temperature} />);
  
  const component = await screen.findByRole('heading');
  expect(component).toHaveTextContent('10');
});