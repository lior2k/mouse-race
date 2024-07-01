import './Board.css';
import { useGame } from '../../hooks/useGame';
import Element from '../../models/Element';
import ElementComponent from '../Element/ElementComponent';

const Board = () => {
    const gameContext = useGame();
    const elements = gameContext.elements;

    return (
        <div className='flex flex-center board-wrapper'>
            {gameContext.isPlaying ? (
                <div className='game-wrapper'>
                    {elements.map((element: Element) => (
                        <ElementComponent element={element} key={element.id} />
                    ))}
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
