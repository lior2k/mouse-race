abstract class Element {
    protected size: number;
    protected color: React.CSSProperties;
    protected behaviour: React.CSSProperties;
    protected shape: React.CSSProperties;

    public position: { x: number; y: number };
    public id: string;

    constructor(
        color: React.CSSProperties,
        behaviour: React.CSSProperties,
        shape: React.CSSProperties,
        position: { x: number; y: number },
        id: string
    ) {
        this.size = Math.ceil(Math.random() * 3);
        this.color = color;
        this.behaviour = behaviour;
        const { height, width } = shape;
        this.shape = {
            height: (height as number) * this.size,
            width: (width as number) * this.size,
        };
        this.position = position;
        this.id = id;
    }

    public getColor = (): React.CSSProperties => {
        return this.color;
    };

    public getBehaviour = (): React.CSSProperties => {
        return this.behaviour;
    };

    public getShape = (): React.CSSProperties => {
        return this.shape;
    };

    public getSize = (): number => {
        return this.size;
    };

    public getStyle = (): React.CSSProperties => {
        return {
            ...this.getShape(),
            ...this.getColor(),
            ...this.getBehaviour(),
            cursor: 'pointer',
        };
    };

    /* 
        self should always reference 'this', used in CollectElement and ChangeElement
        to avoid having to duplicate the same onClick function for both elements.
    */
    public abstract onClick(
        setElement: React.Dispatch<React.SetStateAction<Element[]>>,
        endGame: (won: boolean) => void,
        self: Element
    ): void;
}

export default Element;
