import { Card } from './card';
import { User } from './user';

export class Match {

    constructor(
        public id: number, 
        public name: string, 
        public size: number, 
        state?: string, 
        winner?: string, 
        owner?: User, 
        current?: User, 
        players?: Array<User>, 
        deck?: Array<Card> ) 
    {
    }

}
