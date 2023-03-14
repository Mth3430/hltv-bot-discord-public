interface IEvent {
    name: string;
    logo: string;
}
interface ITeam {
    name: string;
    logo: string;
    result: number;
}
interface IResult {
    event: IEvent;
    maps: string;
    time: string;
    teams: ITeam[];
    matchId: number;
}
export declare function getResults(): Promise<IResult[]>;
export {};
