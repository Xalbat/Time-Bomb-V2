import { User } from './user';
import { Match } from './match';

export class Card {
    constructor(
        public int: number,
        public type: string,
        public reveal: boolean,
        public match: Match,
        public owner: User,
    )
    {}
}
