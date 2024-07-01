import RandomPositionGenerator from './RandomPositionGenerator';

export interface Position {
    x: number;
    y: number;
}

export const createElementsArray = (): Position[] => {
    console.log('creating...');
    const randomPositionGenerator = new RandomPositionGenerator();
    const randomPositions: Position[] = [];
    for (let i = 0; i < 6; i++) {
        randomPositions.push(randomPositionGenerator.getNewRandomPosition());
    }
    return randomPositions;
};

export default createElementsArray;
