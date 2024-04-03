import React from 'react';


interface TextInputProps {
  problemtext?: string;
  incorrect: number;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextInputProps> = ({ problemtext, incorrect, value, onChange }) => {
  const isEmpty = value==='';
  const failed = incorrect > 0;

  return (
    <div>
      {problemtext}
      <input
        className={`text-field ${isEmpty ? 'icon' : ''} ${failed ? 'failed-'+incorrect : ''}`}
        
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;