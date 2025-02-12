import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import FixSocialIcon from '../../../components/SocialIcon/FixSocialIcon';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

jest.mock('react-icons/fa', () => ({
    FaLinkedin: () => <span data-testid="linkedin-icon">LinkedIn</span>,
    FaGithub: () => <span data-testid="github-icon">GitHub</span>,
    FaInstagram: () => <span data-testid="instagram-icon">Instagram</span>,
}));

describe('FixSocialIcon Component', () => {
    beforeEach(() => {
        render(<FixSocialIcon />);
    });

    test('renders the LinkedIn icon with correct link', () => {
        const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
        expect(linkedinLink).toBeInTheDocument();
        expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/sumit-pimpare-66797b1a6?utm');
        expect(linkedinLink).toContainElement(screen.getByTestId('linkedin-icon'));
    });

    test('renders the GitHub icon with correct link', () => {
        const githubLink = screen.getByRole('link', { name: /github/i });
        expect(githubLink).toBeInTheDocument();
        expect(githubLink).toHaveAttribute('href', 'https://github.com/SumitPimpare');
        expect(githubLink).toContainElement(screen.getByTestId('github-icon'));
    });

    test('renders the Instagram icon with correct link', () => {
        const instagramLink = screen.getByRole('link', { name: /instagram/i });
        expect(instagramLink).toBeInTheDocument();
        expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/mr.summitppr/');
        expect(instagramLink).toContainElement(screen.getByTestId('instagram-icon'));
    });
});