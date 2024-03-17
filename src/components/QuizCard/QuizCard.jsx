import React from 'react';
import { Link } from 'react-router-dom';

const QuizCard = ({ quiz }) => {

    const { name, logo, total, id } = quiz;

    return (
        <div className='border border-gray-500 rounded-2xl flex flex-col gap-4 items-center justify-center p-12 hover:shadow-lg hover:shadow-[#ffffff0a]'>
            <img src={logo} alt="" className='w-32 rounded-2xl' />
            <h1 className='font-bold'>{name}</h1>
            <p>{total} Questions</p>
            <Link to={`/${id}`}><button className=' text-[#fde047] font-bold ' >Start Quiz</button></Link>


        </div>
    );
};

export default QuizCard;