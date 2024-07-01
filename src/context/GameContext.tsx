import { createContext, useState, useEffect, useId } from 'react';
import Element from '../models/Element';
import createElementsArray from '../utils/CreateRandomElements';
import useLeaderboard from '../hooks/useLeaderboard';
import { IScore } from '../hooks/useLeaderboard';

export type GameProps = {
    isPlaying: boolean;
    isGameOver: boolean;
    hasWon: boolean;
    counter: number;
    scores: IScore[];
    elements: Element[];
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    setElements: React.Dispatch<React.SetStateAction<Element[]>>;
    startGame: () => void;
    endGame: (won: boolean) => void;
};

export const GameContext = createContext<GameProps>({} as GameProps);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [elements, setElements] = useState<Element[]>([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [hasWon, setHasWon] = useState(false);
    const [counter, setCounter] = useState<number>(0);
    const [scores, addScore] = useLeaderboard();
    const id = useId();

    useEffect(() => {
        if (!isPlaying) {
            return;
        }
        const timeoutId = setTimeout(() => {
            setCounter((previousCounter) => previousCounter + 1);
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [counter, isPlaying]);

    // initialize elements and reset counter to 0 on start
    const startGame = () => {
        setElements(createElementsArray(id));
        setCounter(() => 0);
        setIsPlaying(true);
        setIsGameOver(false);
        setHasWon(false);
    };

    const endGame = (won: boolean, gameOver: boolean = true) => {
        setIsPlaying(false);
        setIsGameOver(gameOver);
        setHasWon(won);
    };

    const onSubmitScore = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get('name') as string;
        addScore(name, counter);
        endGame(false, false);
    };

    return (
        <GameContext.Provider
            value={{
                isPlaying,
                isGameOver,
                hasWon,
                counter,
                scores,
                elements,
                onSubmit: onSubmitScore,
                setElements,
                startGame,
                endGame,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
