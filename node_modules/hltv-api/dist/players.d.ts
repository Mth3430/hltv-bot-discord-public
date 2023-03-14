interface IPlayer {
    id: number;
    team: string;
    nickname: string;
    slug: string;
    mapsPlayed: number;
    kd: number;
    rating: number;
}
export declare function getTopPlayers(): Promise<IPlayer[]>;
export {};
