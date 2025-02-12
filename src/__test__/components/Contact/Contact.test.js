import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Contact from '../../../components/Contact/Contact';
import { Tooltip } from "@mui/material";

describe("<Contact />", () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it("renders the contact component", () => {
    expect(screen.getByText("Get In Touch")).toBeInTheDocument();
    expect(screen.getByText("sumitpimpare105@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("+91 777941264 / 9145218348")).toBeInTheDocument();
  });

  it("renders the Send Email button", () => {
    const sendEmailButton = screen.getByText("Send Email");
    expect(sendEmailButton).toBeInTheDocument();
    expect(sendEmailButton).toHaveAttribute("href", "mailto:sumitpimpare105@gmail.com");
    expect(sendEmailButton).toHaveAttribute("target", "_blank");
    expect(sendEmailButton).toHaveAttribute("rel", "noopener noreferrer");
  });
});
