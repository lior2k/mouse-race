export default class RandomPositionGenerator {
    private top: number;
    private bottom: number;
    private left: number;
    private right: number;
    private containerHeight = window.innerHeight - 107 - 25;
    private containerWidth = window.innerWidth - 32 - 143;
    constructor() {
        const maxHeight = 75;
        const elementMaxMovementUp = 100;
        this.top = maxHeight + elementMaxMovementUp + 10;
        this.bottom = maxHeight + 10;

        const maxWidth = 150;
        const elementMaxMovementLeft = 150;
        this.left = maxWidth + elementMaxMovementLeft + 10;
        this.right = maxWidth + 10;
    }

    public getNewRandomPosition = () => {
        const y =
            this.top / 2 +
            Math.round(
                Math.random() * (this.containerHeight - this.top - this.bottom)
            );
        const x =
            this.left / 2 +
            Math.round(
                Math.random() * (this.containerWidth - this.left - this.right)
            );

        return { x, y };
    };
}
