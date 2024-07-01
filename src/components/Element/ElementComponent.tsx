import React from 'react';
import './ElementComponent.css';
import Element from '../../models/Element';
import { useState, useEffect } from 'react';
import ChangeElement from '../../models/ChangeElement';
import { useGame } from '../../hooks/useGame';

const ElementComponent: React.FC<{
    element: Element;
}> = ({ element }) => {
    const color = element.getColor().border?.toString().split(' ')[2];

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
            className={color}
            onClick={() =>
                element.onClick(
                    gameContext.setElements,
                    gameContext.endGame,
                    element
                )
            }
            style={{
                ...element.getStyle(),
                position: 'absolute',
                top: element.position.y,
                left: element.position.x,
            }}
        ></div>
    );
};

export default ElementComponent;
