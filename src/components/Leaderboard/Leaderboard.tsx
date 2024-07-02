import './Leaderboard.css';
import { useGame } from '../../hooks/useGame';
import { useId } from 'react';
import { IScore } from '../../interfaces';

const Leaderboard = () => {
    const { scores } = useGame();
    const id = useId();
    return (
        <div>
            <h2>Leaderboard</h2>
            {scores.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>

                    <tbody>
                        {scores
                            .sort((a: IScore, b: IScore) => a.score - b.score)
                            .slice(0, 3)
                            .map((value: IScore, index: number) => {
                                return (
                                    <tr key={`${id}${index}`}>
                                        <td>{value.name}</td>
                                        <td>{value.score}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            ) : (
                <p>Such empty...</p>
            )}
        </div>
    );
};

export default Leaderboard;
