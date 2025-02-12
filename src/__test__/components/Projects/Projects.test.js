import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import Projects from '../../../components/Projects/Projects';
import ProjectCard from '../../../components/Projects/ProjectCard/ProjectCard';

jest.mock('../../../components/Projects/ProjectCard/ProjectCard', () => () => (
  <div data-testid="mock-project-card">Mocked Project Card</div>
));

describe('Projects Component', () => {
  test('renders the SVG element correctly', () => {
    render(<Projects />);
    
  });

  test('renders the section title', () => {
    render(<Projects />);
    
    const titleElement = screen.getByText(/projects/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the ProjectCard component', () => {
    render(<Projects />);
    
    const projectCard = screen.getByTestId('mock-project-card');
    expect(projectCard).toBeInTheDocument();
  });
});