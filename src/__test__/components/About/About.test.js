import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../../../components/About/About';
import { stackList } from '../../../data/ProjectData';

jest.mock('../../../components/Languages/LanguageProficiency', () => () => <div>Language Proficiency Component</div>);

describe('About Component', () => {
  test('renders AboutMe section', () => {
    render(<About />);
    
    const sectionTitle = screen.getByText(/about me/i);
    expect(sectionTitle).toBeInTheDocument();
    
    const bioText = /Hello! My name is Sumit Pimpare/i;

    const locationInfo = /Maharashtra, India/i;
    expect(screen.getByText(locationInfo)).toBeInTheDocument();

    const experienceInfo = /Working as a Software Engineering \(React Developer\) for 3\+/i;
    expect(screen.getByText(experienceInfo)).toBeInTheDocument();
  });

  test('renders technology stack correctly', () => {
    render(<About />);
    
    const techElements = screen.getAllByRole('img'); 
    expect(techElements.length).toBe(16); 

    stackList.forEach((stack) => {
        expect(screen.getByText(stack.name)).toBeInTheDocument();
        expect(screen.getByAltText(stack.name)).toBeInTheDocument();
    });
});
  test('renders Language Proficiency component', () => {
    render(<About />);
  
    expect(screen.getByText(/Language Proficiency Component/i)).toBeInTheDocument();
  });

  test('renders the image correctly', () => {
    render(<About />);

    const image = screen.getByAltText('man-svgrepo');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/sumittPPr//man-svgrepo-com.svg');
  });
});