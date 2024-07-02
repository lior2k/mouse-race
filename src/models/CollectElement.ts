import Element from './Element';
import { Position, Colors } from '../interfaces';

class CollectElement extends Element {
    constructor(position: Position, id: string) {
        super(
            { border: `2px solid ${Colors.Green}` },
            { animation: 'left_right 4s linear infinite' },
            { height: 25, width: 50 },
            position,
            id
        );
    }

    onClick = (
        setElement: React.Dispatch<React.SetStateAction<Element[]>>,
        checkWinner: () => boolean,
        endGame: (won: boolean) => void,
        self: Element
    ) => {
        setElement((previousElements) => {
            const newElements = previousElements.filter(
                (element) => element !== self
            );
            if (checkWinner()) endGame(true);
            return newElements;
        });
    };
}

export default CollectElement;
