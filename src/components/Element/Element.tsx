import React from 'react';
import { Position } from '../../utils/CreateRandomElements';

export interface IElement {
    shape: React.CSSProperties;
    behaviour: React.CSSProperties;
    color: React.CSSProperties;
    onClick: () => void;
    position: Position;
}

export const Element: React.FC<IElement> = (props: IElement) => {
    return (
        <div
            onClick={() => props.onClick()}
            style={{
                ...props.shape,
                ...props.behaviour,
                ...props.color,
                position: 'absolute',
                cursor: 'pointer',
                top: props.position.y,
                left: props.position.x,
            }}
        ></div>
    );
};

export default Element;
