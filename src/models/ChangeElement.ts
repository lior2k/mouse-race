import Element from './Element';
import CollectElement from './CollectElement';
import AvoidElement from './AvoidElement';
import { Position } from '../interfaces';

class ChangeElement extends Element {
    public current: CollectElement | AvoidElement;
    private collect: CollectElement;
    private avoid: AvoidElement;

    constructor(position: Position, id: string) {
        super(
            {},
            { animation: 'rotate 20s linear infinite' },
            { height: 25, width: 25 },
            position,
            id
        );
        this.collect = new CollectElement(position, id);
        this.avoid = new AvoidElement(position, id);
        this.current = this.collect;
    }

    getColor = (): React.CSSProperties => {
        return this.current.getColor();
    };

    onClick = (
        setElement: React.Dispatch<React.SetStateAction<Element[]>>,
        checkWinner: (newElements: Element[]) => boolean,
        endGame: (won: boolean) => void,
        self: Element
    ): void => {
        this.current.onClick(setElement, checkWinner, endGame, self);
    };

    alternate = (): CollectElement | AvoidElement => {
        return (this.current =
            this.current instanceof CollectElement ? this.avoid : this.collect);
    };
}

export default ChangeElement;
