interface IHalfResult {
    side: 't' | 'ct';
    rounds: number;
}
interface IResult {
    first: IHalfResult;
    second: IHalfResult;
    ext?: number;
}
interface IMapTeam {
    logo?: string;
    name: string;
    result: IResult;
}
interface IMap {
    name: string;
    pick: string;
    teams: IMapTeam[];
}
interface IStats {
    name: string;
    nickname: string;
    id: number;
    kills: number;
    deaths: number;
    adr: number;
    kast: number;
    rating: number;
}
interface IEvent {
    name: string;
    logo: string;
}
interface ITeam {
    name: string;
    logo: string;
    result: number;
    players: IStats[];
}
interface IMatch {
    id: number;
    time: string;
    event: IEvent;
    teams: ITeam[];
    maps: IMap[];
}
export declare function getMatchById(matchId: number): Promise<IMatch>;
export {};
