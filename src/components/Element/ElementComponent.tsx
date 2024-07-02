import React from 'react';
import './ElementComponent.css';
import Element from '../../models/Element';
import { useState, useEffect } from 'react';
import ChangeElement from '../../models/ChangeElement';
import { useGame } from '../../hooks/useGame';

const ElementComponent: React.FC<{
    element: Element;
}> = ({ element }) => {
    const colorClassName = element.getColor().border?.toString().split(' ')[2];
    const gameContext = useGame();
    const [changeElement, setChangeElement] = useState<Element>(element);

    useEffect(() => {
        if (!(element instanceof ChangeElement)) {
            return;
        }
        const intervalId = setInterval(() => {
            setChangeElement(element.alternate());
        }, 2000);

        return () => clearInterval(intervalId);
    }, [changeElement]);

    return (
        <div
            className={colorClassName}
            onClick={() =>
                element.onClick(
                    gameContext.setElements,
                    gameContext.checkWinner,
                    gameContext.endGame,
                    element
                )
            }
            style={{
                ...element.getStyle(),
                top: element.position.y,
                left: element.position.x,
                position: 'absolute',
                cursor: 'pointer',
            }}
        ></div>
    );
};

export default ElementComponent;
