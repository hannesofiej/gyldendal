import './TextField.css';

interface TextInputProps {
  inputId?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextInputProps> = ({ inputId, value, onChange, onFocus }) => {
  const isEmpty = value === '';

  return (
    <input className={`text-field ${isEmpty ? 'icon' : ''}`}
      type="text"
      id={inputId}
      value={value}
      onFocus={onFocus}
      onChange={onChange} />
  );
};

export default TextField;