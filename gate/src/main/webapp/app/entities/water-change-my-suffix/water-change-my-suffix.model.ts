import { BaseEntity } from './../../shared';

export class WaterChangeMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public changeDate?: any,
        public description?: string,
        public readingBefore?: number,
        public readingAfter?: number,
        public tempVal?: number,
        public timestamp?: number,
    ) {
    }
}
