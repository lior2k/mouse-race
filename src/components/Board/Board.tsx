import './Board.css';
import { useId } from 'react';
import { useGame } from '../../hooks/useGame';
import CollectElement from '../Element/CollectElement';
import AvoidElement from '../Element/AvoidElement';
import { Position } from '../../utils/CreateRandomElements';

const Board = () => {
    const gameContext = useGame();
    const positions = gameContext.positions;
    const id = useId();
    console.log('board');
    return (
        <div className='flex flex-center board-wrapper'>
            {gameContext.isPlaying ? (
                <div className='game-wrapper'>
                    {positions.map((position: Position, index: number) => {
                        const key = `${id}${index}`;
                        const random = Math.floor(Math.random() * 2);
                        const element =
                            random === 0 ? (
                                <CollectElement position={position} key={key} />
                            ) : random === 1 ? (
                                <AvoidElement position={position} key={key} />
                            ) : null;
                        return element;
                    })}
                </div>
            ) : gameContext.isGameOver && gameContext.hasWon ? (
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
                    <input
                        disabled
                        type='number'
                        value={gameContext.counter}
                    ></input>
                    <button className='submit ' type='submit'>
                        Enter
                    </button>
                </form>
            ) : (
                <button onClick={() => gameContext.startGame()}>Start</button>
            )}
        </div>
    );
};

export default Board;
