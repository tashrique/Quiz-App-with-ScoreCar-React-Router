import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import Scorecard from '../Scorecard/Scorecard';
import { useState } from 'react';

const Quiz = () => {

    const quiz = useLoaderData().data;
    const { name, total, questions } = quiz;


    const [score, setScore] = useState(0);

    return (
        <div className='w-[90%] mx-auto grid grid-cols-4 gap-4 my-20'>
            <div className='col-span-3 flex flex-col gap-4 justify-center items-center '>

                <h1 className='font-bold '>{name} Quiz  </h1>
                <p>Prove your awesome {name} skills with only {total} questions!</p>

                <div className="flex flex-col gap-16 my-16">
                    {
                        questions.map(question => <Question key={question.id} question={question} setScore={setScore} score={score} />)
                    }
                </div>


            </div>

            <div className=''>
                <Scorecard
                    correct={score}
                    total={total}
                ></Scorecard>
            </div>
        </div>

    );
};

export default Quiz;