import React, { useEffect, useState } from 'react';
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
    incorrect: number;
    inputId?: string;
    onStatusChange: (status: boolean) => void;
}

const Form: React.FC<FormProps> = ({ problemtext, description, incorrect, inputId, onStatusChange }) => {
    const [inputValue, setInputValue] = useState('');
    const [checkValue, setCheckValue] = useState(false);
    const textArray = problemtext?.split(/({{.+?}})/g);

    useEffect(() => {
        const postAnswer = async () => {
            try {
                const body = { inputId: inputValue }
                const data = await postData(
                    'https://glkltp5rvo76hkmz4fraevhshu0yluco.lambda-url.eu-central-1.on.aws/check',
                    body
                );
                console.log(data)
                onStatusChange(data.isCorrect)
                setCheckValue(false)
            } catch (err) {
                console.log(err)
            } finally {
                console.log("done")
            }
        };
        if (checkValue) {
            postAnswer();
        }

    }, [checkValue, inputValue]);

    const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setCheckValue(true)
    }
    const changeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        console.log(event.target.id)
    }
    return (
        <form className={`form ${incorrect > 0 ? 'failed-' + incorrect : ''}`}>
            <div className="flex">

                <Dog incorrect={incorrect} />

                <div>
                    <SpeechBubble description={description} />
                    <div>
                        {textArray?.map((item) => {
                            const isInput = item.includes("{{");
                            if (isInput) {
                                return <TextField
                                    value={inputValue}
                                    inputId={inputId}
                                    onChange={changeAnswer} />
                            } else {
                                return <Text text={item} />
                            }
                        })}
                    </div>
                </div>
            </div>
            <Button incorrect={incorrect} text="Tjek mit svar"
                onClick={checkAnswer} />
        </form>
    );
};

export default Form;