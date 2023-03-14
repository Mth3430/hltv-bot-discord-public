import { getMatchById } from './match';
import { getMatches } from './matches';
import { getResults } from './results';
import { getTopPlayers } from './players';
import { getPlayerById } from './player';
import { getTopTeams } from './teams';
import { getTeamById } from './team';
declare const _default: {
    getNews: () => Promise<{
        title: any;
        description: any;
        link: any;
        time: string;
    }[]>;
    getResults: typeof getResults;
    getMatchById: typeof getMatchById;
    getMatches: typeof getMatches;
    getTopPlayers: typeof getTopPlayers;
    getPlayerById: typeof getPlayerById;
    getTopTeams: typeof getTopTeams;
    getTeamById: typeof getTeamById;
};
export default _default;
