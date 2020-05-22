import { Match } from './match';
import { Card } from './card';

export class User {

    constructor(
        public id?: number,
        public name?: string,
        public username?: string, 
        public password?: string,
        public currentRole?: string,
        public currentMatch?: Match,
        public hand?: Array<Card>
        ) {}

}