type TextProps = {
    text: string;
};
const Text: React.FC<TextProps> = ({ text }) => {
    return (
        <span>
            {text}
        </span>
    );
}

export default Text;