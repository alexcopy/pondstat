import { BaseEntity } from './../../shared';

export class MeterReadingMySuffix implements BaseEntity {
    constructor(
        public id?: string,
        public readingDate?: any,
        public description?: string,
        public reading?: number,
        public tempVal?: number,
    ) {
    }
}
