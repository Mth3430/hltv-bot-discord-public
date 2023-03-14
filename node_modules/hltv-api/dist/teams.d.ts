interface IPlayer {
    fullname: string;
    image: string;
    nickname: string;
    country: {
        name: string;
        flag: string;
    };
}
interface ITeam {
    id: number;
    ranking: number;
    name: string;
    logo: string;
    players: IPlayer[];
}
export declare function getTopTeams(): Promise<ITeam[]>;
export {};
