import RandomPositionGenerator from './RandomPositionGenerator';
import Element from '../models/Element';
import CollectElement from '../models/CollectElement';
import AvoidElement from '../models/AvoidElement';
import ChangeElement from '../models/ChangeElement';

const createElementsArray = (id: string): Element[] => {
    const randomPositionGenerator = new RandomPositionGenerator();
    const elements: Element[] = Array(15)
        .fill(0)
        .map((_, index: number) => {
            const position = randomPositionGenerator.getNewRandomPosition();
            const randomSize = Math.ceil(Math.random() * 3);
            const element =
                randomSize === 1
                    ? new CollectElement(position, `${id}${index}`)
                    : randomSize === 2
                    ? new AvoidElement(position, `${id}${index}`)
                    : new ChangeElement(position, `${id}${index}`);
            return element;
        });
    return elements;
};

export default createElementsArray;
