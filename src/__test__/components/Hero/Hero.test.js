import React from 'react';
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Hero from '../../../components/Hero/Hero'; 

jest.mock('../../../components/Dropdown/Dropdown', () => ({ isOpen, toggle }) => (
  <div data-testid="dropdown" onClick={toggle}>
    {isOpen ? 'Close Dropdown' : 'Open Dropdown'}
  </div>
));
jest.mock('../../../components/Header/Header', () => ({ toggle }) => (
  <header data-testid="header" onClick={toggle}>
    Header
  </header>
));

describe('Hero Component', () => {
  test('should render the hero component', () => {
    render(<Hero />);
    
    expect(screen.getByTestId('header')).toBeInTheDocument();
    
    expect(screen.getByTestId('dropdown')).toHaveTextContent('Open Dropdown');
  });

  test('should toggle dropdown when clicked', () => {
    render(<Hero />);
    
    const dropdown = screen.getByTestId('dropdown');

    fireEvent.click(dropdown);
    expect(dropdown).toHaveTextContent('Close Dropdown');
    
    fireEvent.click(dropdown);
    expect(dropdown).toHaveTextContent('Open Dropdown');
  });

  test('should display subtitles after animation completes', async () => {
    jest.useFakeTimers(); 
    render(<Hero />);
    
    jest.advanceTimersByTime(1500); 
    jest.advanceTimersByTime(1000);
    jest.advanceTimersByTime(1000);
    jest.useRealTimers();
  });

  test('should show scroll down link after subtitles', async () => {
    jest.useFakeTimers();
    render(<Hero />);
    
    jest.advanceTimersByTime(1500); 

    jest.advanceTimersByTime(10000); 
    jest.advanceTimersByTime(300);

    jest.useRealTimers();
  });
});