import { useState, useEffect } from 'react';
import { IScore } from '../interfaces';

export const useLeaderboard = (): [
    scores: IScore[],
    (name: string, score: number) => void
] => {
    const [scores, setScores] = useState<IScore[]>([]);

    useEffect(() => {
        let savedScores: string | null = localStorage.getItem('scores');
        if (!savedScores) return;
        setScores(() => JSON.parse(savedScores));
    }, []);

    const addScore = (name: string, score: number): void => {
        setScores(() => {
            const newScores = [...scores];
            newScores.push({ name, score });
            localStorage.setItem('scores', JSON.stringify(newScores));
            return newScores;
        });
    };

    return [scores, addScore];
};

export default useLeaderboard;
