import React from "React";
import {screen, render} from "@testing-library/react";
import CityInfo from "./CityInfo";  // SUT = Subject under test

test('CityInfo render', async () => {
  // AAA structure of tests

  // Arrange
  const country = 'Francia';
  const city = 'Paris'

  // Act
  render(<CityInfo city={city} country={country} />);
  
  // Assert
  const components = await screen.findAllByRole("heading");
  expect(components[0]).toHaveTextContent("Paris");
  expect(components[1]).toHaveTextContent("Francia");
});