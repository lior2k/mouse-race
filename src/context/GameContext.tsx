import { createContext, useState, useEffect } from 'react';
import { createElementsArray, Position } from '../utils/CreateRandomElements';
import useLeaderboard from '../hooks/useLeaderboard';
import { IScore } from '../hooks/useLeaderboard';

export type GameProps = {
    isPlaying: boolean;
    isGameOver: boolean;
    hasWon: boolean;
    counter: number;
    scores: IScore[];
    positions: Position[];
    checkWinner: () => boolean;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    setPositions: React.Dispatch<React.SetStateAction<Position[]>>;
    startGame: () => void;
    endGame: (won: boolean) => void;
};

export const GameContext = createContext<GameProps>({} as GameProps);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [positions, setPositions] = useState<Position[]>([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [hasWon, setHasWon] = useState(false);
    const [counter, setCounter] = useState<number>(0);
    const [scores, addScore] = useLeaderboard();

    useEffect(() => {
        if (!isPlaying) {
            return;
        }
        const timeoutId = setTimeout(() => {
            setCounter((previousCounter) => previousCounter + 1);
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [counter]);

    // initialize elements and reset counter to 0 on start
    const startGame = () => {
        setPositions(createElementsArray());
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

    const checkWinner = (): boolean => {
        // for (const element of elements) {
        //     if (!(element instanceof AvoidElement)) {
        //         return false;
        //     }
        // }
        // return true;
        return false;
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
                positions,
                checkWinner,
                onSubmit: onSubmitScore,
                setPositions,
                startGame,
                endGame,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
