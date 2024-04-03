type SpeechBubbleProps = {
    description?: string;
};
function SpeechBubble({ description="test" }: SpeechBubbleProps) {
    return (
        <div className='speechbubble'>
            {description}
        </div>
    );
}

export default SpeechBubble;