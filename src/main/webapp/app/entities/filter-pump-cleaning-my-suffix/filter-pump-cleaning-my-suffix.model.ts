import { BaseEntity } from './../../shared';

export class FilterPumpCleaningMySuffix implements BaseEntity {
    constructor(
        public id?: string,
        public cleaningDate?: any,
        public description?: string,
        public tempVal?: number,
        public timestamp?: number,
    ) {
    }
}
