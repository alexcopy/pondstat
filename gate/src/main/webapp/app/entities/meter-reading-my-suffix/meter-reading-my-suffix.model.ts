import { BaseEntity } from './../../shared';

export class MeterReadingMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public readingDate?: any,
        public description?: string,
        public reading?: number,
        public tempVal?: number,
    ) {
    }
}
