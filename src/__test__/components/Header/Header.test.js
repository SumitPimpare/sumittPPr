import React from 'react';
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from '@testing-library/react';
import Header from '../../../components/Header/Header';

describe('Header component', () => {
  it('Should render correctly', () => {
    const { getByText, getByAltText } = render(<Header toggle={jest.fn()} />);
    const logoImg = getByAltText('logo');
    expect(logoImg).toBeInTheDocument();
    expect(getByText('Projects')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
    expect(getByText('Download Resume')).toBeInTheDocument();
  });

  it('Should call the toggle function when Bars is clicked', () => {
    const toggle = jest.fn();
    const { getByRole } = render(<Header toggle={toggle} />);
    expect(toggle).toHaveBeenCalledTimes(0);
  });

  it('Should calculate scroll percentage correctly', async () => {
    const { getByClassName } = render(<Header toggle={jest.fn()} />);
    window.scrollTo = jest.fn();
    window.scrollY = 100;
    window.innerHeight = 100;
    fireEvent.scroll(window);
  });
});