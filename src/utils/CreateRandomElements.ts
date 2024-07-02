import RandomPositionGenerator from './RandomPositionGenerator';
import Element from '../models/Element';
import CollectElement from '../models/CollectElement';
import AvoidElement from '../models/AvoidElement';
import ChangeElement from '../models/ChangeElement';
import { Position } from '../interfaces';

const createElementsArray = (id: string): Element[] => {
    const randomPositionGenerator = new RandomPositionGenerator();
    const elements: Element[] = Array(15)
        .fill(0)
        .map((_, index: number) => {
            const position: Position =
                randomPositionGenerator.getNewRandomPosition();
            const randomNumber = Math.ceil(Math.random() * 3);
            const element =
                randomNumber === 1
                    ? new CollectElement(position, `${id}${index}`)
                    : randomNumber === 2
                    ? new AvoidElement(position, `${id}${index}`)
                    : new ChangeElement(position, `${id}${index}`);
            return element;
        });
    return elements;
};

export default createElementsArray;
