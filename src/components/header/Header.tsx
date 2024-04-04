import './Header.css'

type HeaderProps = {
    text?: string;
};
const Header: React.FC<HeaderProps> = ({ text }) => {
    return (
        <header className="header">
            <p>
                {text}
            </p>
        </header>
    );
}

export default Header;