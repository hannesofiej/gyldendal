import './SpeechBubble.css'

type SpeechBubbleProps = {
    description?: string;
};
const SpeechBubble: React.FC<SpeechBubbleProps> = ({ description = "missing text" }) => {
    return (
        <div className='speechbubble'>
            <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    );
}

export default SpeechBubble;