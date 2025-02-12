import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import ProjectCard from '../../../../components/Projects/ProjectCard/ProjectCard';
import { ProjectList } from '../../../../data/ProjectData';

jest.mock('../../../../data/ProjectData', () => ({
    ProjectList: [
        {
            title: 'Project A',
            img: 'image-a.png',
            description: ['Detail A1', 'Detail A2'],
            tech_stack: ['React', 'Node.js'],
        },
        {
            title: 'Project B',
            img: 'image-b.png',
            description: ['Detail B1', 'Detail B2'],
            tech_stack: ['Vue', 'Express'],
        },
    ],
}));

describe('ProjectCard Component', () => {
    test('renders the correct number of project cards', () => {
        render(<ProjectCard />);
    });

    test('renders project details correctly', () => {
        render(<ProjectCard />);
        
        expect(screen.getByText('Project A')).toBeInTheDocument();
        expect(screen.getByText('Project B')).toBeInTheDocument();
        
        expect(screen.getByText('Detail A1')).toBeInTheDocument();
        expect(screen.getByText('Detail A2')).toBeInTheDocument();
        expect(screen.getByText('Detail B1')).toBeInTheDocument();
        expect(screen.getByText('Detail B2')).toBeInTheDocument();
        
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('Node.js')).toBeInTheDocument();
        expect(screen.getByText('Vue')).toBeInTheDocument();
        expect(screen.getByText('Express')).toBeInTheDocument();
    });

    test('renders project images with correct alt text', () => {
        render(<ProjectCard />);
        
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(2);
        
        expect(images[0]).toHaveAttribute('src', 'image-a.png');
        expect(images[0]).toHaveAttribute('alt', 'Project A');
        expect(images[1]).toHaveAttribute('src', 'image-b.png');
        expect(images[1]).toHaveAttribute('alt', 'Project B');
    });
});