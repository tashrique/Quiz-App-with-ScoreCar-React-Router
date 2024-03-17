import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../QuizCard/QuizCard';

const Home = () => {

    const quizzes = useLoaderData().data;

    return (
        <div className='w-[80%] mx-auto flex flex-col gap-8 justify-center items-center my-20'>
            <h1 className='font-bold'>Take all of the {quizzes.length} Quizzes, <span className='text-[#fde047]'>Dude!</span> </h1>

            <div className='grid gap-8 grid-cols-4 my-20'>
                {
                    quizzes.map(quiz => <QuizCard key={quiz.id} quiz={quiz} />)
                }
            </div>


        </div>
    );
};

export default Home;