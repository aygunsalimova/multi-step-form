import React from 'react';

interface HeaderProps {
  headerText: string;
  paragraphText: string;
}

const Header: React.FC<HeaderProps> = ({ headerText, paragraphText }) => {
  return (
    <>
      <h1 className="text-3xl text-dark-blue font-bold">{headerText}</h1>
      <p className={`text-sm text-main-grey mt-3 ${paragraphText === "Please provide your name, email address, and phone number." ? "mb-2" : "mb-10" }`}>{paragraphText}</p>
    </>
  );
}

export default Header;
