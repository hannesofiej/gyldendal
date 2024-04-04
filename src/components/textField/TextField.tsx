import './TextField.css';

interface TextInputProps {
  inputId?: string;
  value: string;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextInputProps> = ({ disabled, inputId, value, onChange, onFocus }) => {
  const isEmpty = value === '';

  return (
    <input className={`text-field ${isEmpty ? 'icon' : ''}`}
      type="text"
      disabled={disabled}
      id={inputId}
      value={value}
      onFocus={onFocus}
      onChange={onChange} />
  );
};

export default TextField;