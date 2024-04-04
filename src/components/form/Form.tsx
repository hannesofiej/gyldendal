import { useEffect, useState } from 'react';
import TextField from '../textField/TextField';
import Text from '../text/Text';
import Button from '../button/Button';
import { postData } from '../../lib/fetch';
import Dog from '../dog/Dog';
import SpeechBubble from '../speechbubble/SpeechBubble';
import './Form.css';


interface FormProps {
    problemtext?: string;
    description?: string;
    state: number;
    next: boolean;
    onStatusChange: (status: boolean) => void;
    onReset: () => void;
}

const Form: React.FC<FormProps> = ({ next, problemtext, description, state, onStatusChange, onReset }) => {
    const [inputValue, setInputValue] = useState('');
    const [checkValue, setCheckValue] = useState(false);
    const [correcting, setCorrecting] = useState(false);

    let inputId: string = ''

    const textArray = problemtext?.split(/({{.+?}})/g);
    textArray?.forEach((item) => {
        if (item.includes("{{") && item.includes("}}")) {
            const id = item.replace("{{", '').replace("}}", '')
            inputId = id

        }
    })

    useEffect(() => {
        const postAnswer = async () => {
            try {
                const body = { [inputId]: inputValue }
                const data = await postData(
                    'https://glkltp5rvo76hkmz4fraevhshu0yluco.lambda-url.eu-central-1.on.aws/check',
                    body
                );
                onStatusChange(data.isCorrect)
                setCheckValue(false)
            } catch (err) {
                console.log(err)
            }
        };
        if (checkValue) {
            postAnswer();
        }

    }, [checkValue, inputValue]);

    const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setCorrecting(false)
        if (next) {
            setInputValue('')
            onReset()
        } else {
            setCheckValue(true)
        }

    }
    const changeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCorrecting(true);
        setInputValue(event.target.value);
    }
    const checkFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setCorrecting(true);
    }

    const classNames = () => {
        let classes = ''
        if (correcting) {
            classes += "correcting "
        } else {
            classes += state < 0 ? 'failed' + state : (state > 0 ? 'success' : '')

        }
        return classes
    }

    return (
        <form className={`form ${classNames()}`}>
            <div className="flex">
                <Dog state={correcting ? 2 : state} />
                <div>
                    <SpeechBubble description={description} />
                    <div>
                        {textArray?.map((item, index) => {
                            const isInput = item.includes("{{");
                            if (isInput) {
                                return <TextField
                                    key={index}
                                    value={inputValue}
                                    inputId={inputId}
                                    onFocus={checkFocus}
                                    onChange={changeAnswer} />
                            } else {
                                return <Text text={item} key={index} />
                            }
                        })}
                    </div>
                </div>
            </div>
            <div className='button-container'>
                <Button
                    text={next ? 'Næste opgave' : 'Tjek mit svar'}
                    onClick={checkAnswer} />
            </div>
        </form>
    );
};

export default Form;