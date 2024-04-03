type SpeechBubbleProps = {
    description?: string;
};
function SpeechBubble({ description }: SpeechBubbleProps) {
    return (
        <div className='speechbubble'>
            {description}
        </div>
    );
}

export default SpeechBubble;