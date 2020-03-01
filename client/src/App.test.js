import React from 'react';
import '@testing-library/react'
import { render } from "@testing-library/jest-dom"
import App from './App'


describe('App module', () => {
  it('renders without crashing', () => {
    const appRender = render(<App />);
    const WWW = appRender.getByText(/Women's World Cup/i);

  });
})
