import { Element, IElement } from './Element';
import { useGame } from '../../hooks/useGame';
import { Position } from '../../utils/CreateRandomElements';

const withCollectBehaviour = (BaseElement: React.FC<IElement>) => {
    const CollectElement: React.FC<{ position: Position }> = (props) => {
        const game = useGame();

        const onClick = () => {
            game.setPositions((previousPositions) => {
                const newPositions = previousPositions.filter(
                    (position) => position !== props.position
                );
                if (game.checkWinner()) {
                    game.endGame(true);
                }
                return newPositions;
            });
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

    return CollectElement;
};

const CollectElement = withCollectBehaviour(Element);
export default CollectElement;
