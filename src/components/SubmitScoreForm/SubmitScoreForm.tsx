import React from 'react';
import { useGame } from '../../hooks/useGame';
import './SubmitScoreForm.css';

const SubmitScoreForm: React.FC = () => {
    const gameContext = useGame();
    return (
        <form
            className='flex flex-center'
            onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                gameContext.onSubmit(e)
            }
        >
            <h2>You Won!</h2>
            <label htmlFor='name'>Name</label>
            <input
                id='name'
                name='name'
                required
                type='text'
                maxLength={24}
                placeholder='Name, up to 24 chars'
            ></input>
            <label>Score</label>
            <input disabled type='number' value={gameContext.counter}></input>
            <button className='submit ' type='submit'>
                Enter
            </button>
        </form>
    );
};

export default SubmitScoreForm;
