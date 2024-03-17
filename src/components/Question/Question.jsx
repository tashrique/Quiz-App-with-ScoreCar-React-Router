import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';


const Question = ({ question, score, setScore, setSubmitted }) => {

    const { options, correctAnswer } = question;

    const [selectedOption, setSelectedOption] = useState("");
    const [answerSubmitted, setAnswerSubmitted] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);



    const handleSubmit = () => {
        if (selectedOption === correctAnswer) {
            setScore(score + 1);
        }

        setAnswerSubmitted(true);
        setSubmitted(true);
    }

    const handleShowAnswer = () => {
        setShowAnswer(true);
    }

    const q = question.question.replace("<p>", "").replace("</p>", "");
    return (
        <div className='border py-8 px-12 rounded-xl flex gap-10 flex-col justify-center items-center w-[80%] mx-auto'>

            <div className="flex justify-between items-center gap-4 w-full">

                <h2 className='font-bold text-2xl text-[#fde047]'>{q}</h2>
                <button className='bg-transparent' title='See Answer. No points will be added' onClick={handleShowAnswer}>
                    <EyeIcon className="h-6 w-6 text-white" />
                </button>

            </div>

            <div className='grid grid-cols-2 gap-10'>
                {

                    options.map((option, index) => {

                        let bgColor = 'bg-[#ffffff10]';
                        if (answerSubmitted) {
                            if (option === selectedOption) {
                                bgColor = option === correctAnswer ? 'bg-green-700' : 'bg-red-700';


                            } else if (option === correctAnswer) {
                                bgColor = 'bg-green-700';
                            }
                        }

                        if (showAnswer) {
                            bgColor = option === correctAnswer ? 'bg-green-700' : 'bg-red-700';
                        }



                        return (
                            <div key={index} className={`grid grid-cols-10 ${bgColor} p-4 rounded-xl items-center`}>

                                <input type="radio"
                                    name="option"
                                    id={option}
                                    onChange={() => setSelectedOption(option)}
                                    className='w-5 h-5 text-blue-600 focus:ring-[#fde047] dark:focus:ring-blue-600 dark:ring-offset-gray-800 mr-4 col-span-1' />

                                <label
                                    htmlFor={option}
                                    className='text-lg col-span-9'
                                > {option}</label>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={handleSubmit}>Submit</button>

        </div>
    );
};

export default Question;