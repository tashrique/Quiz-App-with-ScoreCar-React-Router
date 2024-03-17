import React from 'react';

const Scorecard = (props) => {

    const { correct, total } = props;

    const comment = () => {


        if (correct / total > 0.7) {
            return "Great Job!"
        } else if (correct / total > 0.5) {
            return "Good Job!"
        } else {
            return ""
        }

    }



    return (
        <div className='flex flex-col justify-center items-center gap-4 bg-[#ffffff10] p-10 rounded-xl fixed'>
            <h1 className='font-bold'>Scorecard</h1>
            <div className='flex flex-col gap-1'>
                <p>Total Questions: {total}</p>
                <p className='text-green-400'>Correct Answers: {correct}</p>
                <p className='text-red-400'>Incorrect Answers: {parseInt(total) - parseInt(correct)}</p>
                <p>Percentage: {((correct / total) * 100).toFixed(2)}%</p>
                <p>{comment()}</p>

            </div>
            <button onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>
    );
};

export default Scorecard;