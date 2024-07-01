import './App.css';
import Timer from './components/Timer/Timer';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Board from './components/Board/Board';
import { GameProvider } from './context/GameContext';

function App() {
    return (
        <GameProvider>
            <Timer />
            <div className='main-content'>
                <Leaderboard />
                <Board />
            </div>
        </GameProvider>
    );
}

export default App;
