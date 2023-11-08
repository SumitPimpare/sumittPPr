import React from 'react';
import './LanguageProficiency.css';
const LanguageProficiency = () => {
    const languageProficiency = [
        { language: 'English', level: 'Professional' },
        { language: 'Japanese', level: 'Elementary' },
        { language: 'Hindi', level: 'professional' },
        { language: 'Marathi', level: 'Native' },
    ];
    return (
        <div className="LanguageCard">
            <h2>Language Proficiency</h2>
            <ul className="language-list">
                {languageProficiency.map((item, index) => (
                    <li key={index} className="language-item">
                        <span className="language-name">{item.language}:</span>
                        <span className="language-level">{item.level}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default LanguageProficiency;