import './Board.css';
import { useGame } from '../../hooks/useGame';
import Element from '../../models/Element';
import ElementComponent from '../Element/ElementComponent';
import SubmitScoreForm from '../SubmitScoreForm/SubmitScoreForm';

const Board = () => {
    const gameContext = useGame();
    const elements = gameContext.elements;
    return (
        <div className='flex flex-center board-wrapper'>
            {gameContext.isPlaying ? (
                // wrapper with position absolute so that absolutely positioned elements
                // will refer to this container as parent.
                <div className='game-wrapper'>
                    {elements.map((element: Element) => (
                        <ElementComponent element={element} key={element.id} />
                    ))}
                </div>
            ) : gameContext.isGameOver && gameContext.hasWon ? (
                <SubmitScoreForm />
            ) : (
                <button onClick={() => gameContext.startGame()}>Start</button>
            )}
        </div>
    );
};

export default Board;
