import { BaseEntity } from './../../shared';

export class TempMeterMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public readingDate?: any,
        public tempVal?: number,
        public timestamp?: number,
    ) {
    }
}
