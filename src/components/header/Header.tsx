type HeaderProps = {
    text?: string;
};
function Header({ text }: HeaderProps) {
    return (
        <header className="">
            <p>
                {text}
            </p>
        </header>
    );
}

export default Header;