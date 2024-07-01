import AvoidElement from './AvoidElement';
import Element from './Element';

class CollectElement extends Element {
    constructor(position: { x: number; y: number }, id: string) {
        super(
            { border: '2px solid green' },
            { animation: 'left_right 4s linear infinite' },
            { height: 25, width: 50 },
            position,
            id
        );
    }

    private checkWinner = (elements: Element[]): boolean => {
        for (const element of elements) {
            if (!(element instanceof AvoidElement)) {
                return false;
            }
        }
        return true;
    };

    onClick = (
        setElement: React.Dispatch<React.SetStateAction<Element[]>>,
        endGame: (won: boolean) => void,
        self: Element
    ) => {
        setElement((previousElements) => {
            const newElements = previousElements.filter(
                (element) => element !== self
            );
            if (this.checkWinner(newElements)) endGame(true);
            return newElements;
        });
    };
}

export default CollectElement;
