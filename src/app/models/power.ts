export class Power {
    id: number;
    description: string;
    duration: number;
    type: PowerType;
}

export enum PowerType {
    W = 'Water',
    F = 'Fire',
    A = 'Air',
    E = 'Earth'
}