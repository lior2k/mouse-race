import Element from './Element';
import { Position } from '../interfaces';

class AvoidElement extends Element {
    constructor(position: Position, id: string) {
        super(
            { border: '2px solid red' },
            { animation: 'up_down 6s linear infinite' },
            { height: 25, width: 25, borderRadius: '50%' },
            position,
            id
        );
    }

    onClick = (
        setElement: React.Dispatch<
            React.SetStateAction<Element[]>
        > | null = null,
        checkWinner: null | (() => boolean),
        endGame: (won: boolean) => void,
        self: Element | null = null
    ) => {
        if (setElement && self && checkWinner) {
        }
        endGame(false);
    };
}

export default AvoidElement;
