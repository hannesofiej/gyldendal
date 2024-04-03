import React from 'react';

interface TextInputProps {
  inputId?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextInputProps> = ({ inputId, value, onChange }) => {
  const isEmpty = value === '';

  return (
    <input className={`text-field ${isEmpty ? 'icon' : ''}`}
      type="text"
      id={inputId}
      value={value}
      onChange={onChange} />
  );
};

export default TextField;