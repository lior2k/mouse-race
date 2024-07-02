import { Position } from '../interfaces';

export default class RandomPositionGenerator {
    private top: number;
    private left: number;
    private containerHeight = window.innerHeight - 107 - 25;
    private containerWidth = window.innerWidth - 32 - 143;
    constructor() {
        const maxHeight = 75;
        const elementMaxMovementUp = 100;
        this.top = maxHeight + elementMaxMovementUp + 20;

        const maxWidth = 150;
        const elementMaxMovementLeft = 150;
        this.left = maxWidth + elementMaxMovementLeft + 20;
    }

    public getNewRandomPosition = (): Position => {
        const y =
            this.top / 2 +
            Math.round(Math.random() * (this.containerHeight - this.top));
        const x =
            this.left / 2 +
            Math.round(Math.random() * (this.containerWidth - this.left));

        return { x, y };
    };
}
