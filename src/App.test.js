import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock child components to simplify testing
jest.mock('./components/Header/Header', () => () => <div>Header Mock</div>);
jest.mock('./components/Hero/Hero', () => () => <div>Hero Mock</div>);
jest.mock('./components/Services/Services', () => () => <div>Services Mock</div>);
jest.mock('./components/ContactForm/ContactForm', () => () => <div>ContactForm Mock</div>);
jest.mock('./components/Footer/Footer', () => () => <div>Footer Mock</div>);

// Mock CSS modules
jest.mock('./components/Header/Header.module.css', () => ({}));
jest.mock('./components/Hero/Hero.module.css', () => ({}));
jest.mock('./components/Services/Services.module.css', () => ({}));
jest.mock('./components/ContactForm/ContactForm.module.css', () => ({}));
jest.mock('./components/Footer/Footer.module.css', () => ({}));

test('renders main app container', () => {
  render(<App />);
  
  // Verify main sections are rendered
  expect(screen.getByText('Header Mock')).toBeInTheDocument();
  expect(screen.getByText('Hero Mock')).toBeInTheDocument();
  expect(screen.getByText('Services Mock')).toBeInTheDocument();
  expect(screen.getByText('ContactForm Mock')).toBeInTheDocument();
  expect(screen.getByText('Footer Mock')).toBeInTheDocument();
});


// import '@testing-library/jest-dom';
// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import App from './App';
// import axios from 'axios';

// jest.mock('axios');

// test('renders learn react link', () => {
//     render(<App />);
//     const linkElement = screen.getByText(/GreenStack CRM/i);
//     expect(linkElement).toBeInTheDocument();
// });