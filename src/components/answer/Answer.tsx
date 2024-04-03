import React from 'react';

interface TextInputProps {
  problemtext: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Answer: React.FC<TextInputProps> = ({ problemtext, value, onChange }) => {
  return (
    <div>
      {problemtext}

      <input
        className='answer'
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Answer;