import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import LanguageProficiency from '../../../components/Languages/LanguageProficiency';

describe('LanguageProficiency Component', () => {
    test('renders the Language Proficiency title', () => {
        render(<LanguageProficiency />);
        
        const titleElement = screen.getByText(/language proficiency/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders the correct number of languages', () => {
        render(<LanguageProficiency />);
        
        const languageItems = screen.getAllByRole('listitem');
        expect(languageItems).toHaveLength(4); 
    });

    test('renders each language with its corresponding level', () => {
        render(<LanguageProficiency />);
        
        const languagesWithLevels = [
            { language: 'English', level: 'Professional' },
            { language: 'Japanese', level: 'Elementary' },
            { language: 'Hindi', level: 'professional' },
            { language: 'Marathi', level: 'Native' },
        ];

        languagesWithLevels.forEach(({ language, level }) => {
            expect(screen.getByText(`${language}:`)).toBeInTheDocument();
            expect(screen.getByText(level)).toBeInTheDocument();
        });
    });
});