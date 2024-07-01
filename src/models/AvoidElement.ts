import Element from './Element';

class AvoidElement extends Element {
    constructor(position: { x: number; y: number }, id: string) {
        super(
            { border: '2px solid red' },
            { animation: 'up_down 6s linear infinite' },
            { height: 25, width: 25, borderRadius: '50%' },
            position,
            id
        );
    }

    onClick = (
        setElement: React.Dispatch<React.SetStateAction<Element[]>>,
        endGame: (won: boolean) => void,
        self: Element
    ) => {
        endGame(false);
    };
}

export default AvoidElement;
