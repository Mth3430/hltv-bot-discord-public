interface IPlayer {
    fullname: string;
    image: string;
    nickname: string;
    country?: {
        name: string;
        flag: string;
    };
}
interface ITeam {
    id: number;
    name: string;
    logo: string;
    players: IPlayer[];
    coach: string;
    ranking: number;
    averagePlayerAge: number;
}
export declare function getTeamById(id: number): Promise<ITeam>;
export {};
