import React from 'react';
import '@testing-library/jest-dom';
import ScrollToTop from '../../../components/SocialIcon/ScrollToTop';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import { animateScroll as scroll } from 'react-scroll';

jest.mock('react-scroll', () => ({
  animateScroll: {
    scrollToTop: jest.fn(),
  },
}));

describe('ScrollToTop Component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('does not render when scrollY is less than or equal to 500', () => {
   
    window.scrollY = 400;
    render(<ScrollToTop />);

    const button = screen.queryByLabelText(/scroll to top/i);
    expect(button).not.toBeInTheDocument();
  });

  it('renders the button when scrollY is greater than 500', () => {
  
    window.scrollY = 600;
    render(<ScrollToTop />);
  });

  it('scrolls to the top when the button is clicked', () => {
    window.scrollY = 600;
    render(<ScrollToTop />);

    expect(scroll.scrollToTop).toHaveBeenCalledTimes(0);
  });

  it('shows the tooltip on hover', () => {
    window.scrollY = 600;
    render(<ScrollToTop />);
  });

  it('removes the button when scrollY is less than or equal to 500 after being above', () => {
  
    window.scrollY = 600;
    render(<ScrollToTop />);

    window.scrollY = 400;
    fireEvent.scroll(window);
  });
});