import React from "react";
import "./LanguageProficiency.css";
const LanguageProficiency = () => {
  const languageProficiency = [
    { language: "English", level: "Professional" },
    { language: "Japanese", level: "Elementary" },
    { language: "Hindi", level: "Professional" },
    { language: "Marathi", level: "Native" },
  ];
  return (
    <div className="LanguageCard">
      <div className="lagProTitle">Language Proficiency</div>
      <ul className="language-list">
        {languageProficiency.map((item, index) => (
          <li key={index} className="language-item">
            <span className="language-name">{item.language}:</span>
            <div className="alignLevel">
              <span className="language-level">{item.level}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default LanguageProficiency;
