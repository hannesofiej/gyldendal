import React from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  incorrect?: number;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button className='' onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;