export interface Person {
    name: string;
    gender: string;
    age: number;
    mail: string;
    wealth?: string;
    state?: WorkLifeBalance
}

export enum WorkLifeBalance {
    Happy = 0,
    Unsatisfied = 1,
    ReadyForRevolution = 2
}