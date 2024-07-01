import { useContext } from 'react';
import { GameContext, GameProps } from '../context/GameContext';

export const useGame = (): GameProps => {
    return useContext(GameContext);
};
