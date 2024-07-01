import { Element, IElement } from './Element';
import { useGame } from '../../hooks/useGame';
import { Position } from '../../utils/CreateRandomElements';

const withAvoidElement = (BaseElement: React.FC<IElement>) => {
    const AvoidElement: React.FC<{ position: Position }> = (props) => {
        const game = useGame();

        const onClick = () => {
            game.endGame(false);
        };

        const color = { border: '2px solid green' };
        const behaviour = { animation: 'left_right 4s linear infinite' };
        const shape = { height: 25, width: 50 };

        return (
            <BaseElement
                {...props}
                position={props.position}
                onClick={onClick}
                color={color}
                behaviour={behaviour}
                shape={shape}
            />
        );
    };
    return AvoidElement;
};

const AvoidElement = withAvoidElement(Element);
export default AvoidElement;
