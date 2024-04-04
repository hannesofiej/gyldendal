import './Button.css';

interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button className='button' onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;