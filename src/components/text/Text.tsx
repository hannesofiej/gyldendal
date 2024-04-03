type TextProps = {
    text: string;
};
function Text({ text }: TextProps) {
    return (
        <span>
            {text}
        </span>
    );
}

export default Text;