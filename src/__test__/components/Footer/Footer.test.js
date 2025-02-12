import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Footer from '../../../components/Footer/Footer';

describe('Footer Component', () => {
    test('renders the footer with correct content', () => {
        render(<Footer />);
        
        const copyrightText = screen.getByText(/© 2024, copyright sumit pimpare/i);
        expect(copyrightText).toBeInTheDocument();
    });

    test('renders the footer with correct styling', () => {
        const { container } = render(<Footer />);
        
        const footerSection = container.firstChild;
        expect(footerSection).toHaveStyle('background-image: url(/sumittPPr/footer_wave.svg)');
        expect(footerSection).toHaveStyle('height: 250px');
    });
});