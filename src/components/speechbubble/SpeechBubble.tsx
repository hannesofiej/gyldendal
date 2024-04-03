type SpeechBubbleProps = {
    description?: string;
};
function SpeechBubble({ description = "missing text" }: SpeechBubbleProps) {
    return (
        <div className='speechbubble'>
            <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    );
}

export default SpeechBubble;