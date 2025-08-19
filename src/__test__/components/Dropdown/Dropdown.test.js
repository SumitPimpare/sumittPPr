import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from '../../../components/Dropdown/Dropdown';

describe('Dropdown Component', () => {
    const toggleMock = jest.fn();

    test('renders correctly when isOpen is true', () => {
        render(<Dropdown isOpen={true} toggle={toggleMock} />);
        
        const closeIcon = screen.getByRole('img', { name: /Group Icon Logo/i });
        expect(closeIcon).toBeInTheDocument();

        const projectsLink = screen.getByText(/projects/i);
        const aboutLink = screen.getByText(/about/i);
        const contactLink = screen.getByText(/contact/i);
        expect(projectsLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
        expect(contactLink).toBeInTheDocument();
    });

    test('does not render when isOpen is false', () => {
        const { container } = render(<Dropdown isOpen={false} toggle={toggleMock} />);
        
        const dropdownContainer = container.firstChild;
        expect(dropdownContainer).toHaveStyle('opacity: 0');
        expect(dropdownContainer).toHaveStyle('top: -100%');
    });

    test('calls toggle function when close icon is clicked', () => {
        render(<Dropdown isOpen={true} toggle={toggleMock} />);
        
        const closeIcon = screen.getByRole('img', { name: /Group Icon Logo/i });
        fireEvent.click(closeIcon);
        expect(toggleMock).toHaveBeenCalledTimes(2);
    });

    test('calls toggle function when nav links are clicked', () => {
        render(<Dropdown isOpen={true} toggle={toggleMock} />);
        
        const projectsLink = screen.getByText(/projects/i);
        const aboutLink = screen.getByText(/about/i);
        const contactLink = screen.getByText(/contact/i);
        
        fireEvent.click(projectsLink);
        expect(toggleMock).toHaveBeenCalledTimes(3);
        
        fireEvent.click(aboutLink);
        expect(toggleMock).toHaveBeenCalledTimes(4);
        
        fireEvent.click(contactLink);
        expect(toggleMock).toHaveBeenCalledTimes(5);
    });

    test('renders the download resume link', () => {
        render(<Dropdown isOpen={true} toggle={toggleMock} />);
        
        const downloadLink = screen.getByText(/download resume/i);
        expect(downloadLink).toBeInTheDocument();
        expect(downloadLink).toHaveAttribute('href', 'https://drive.google.com/file/d/145tg0gjQ1AxgYvh1361x1nyrULbgVLQF/view?usp=sharing');
    });
});