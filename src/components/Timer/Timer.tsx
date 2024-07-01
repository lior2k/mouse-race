import { useCallback } from 'react';
import './Timer.css';
import { useGame } from '../../hooks/useGame';

const Timer: React.FC = () => {
    const gameContext = useGame();

    const formatTime = useCallback((seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}`;
    }, []);

    return (
        <div className='flex flex-center width-100'>
            <div className='timer-wrapper'>
                {formatTime(gameContext.counter)}
            </div>
        </div>
    );
};

export default Timer;
