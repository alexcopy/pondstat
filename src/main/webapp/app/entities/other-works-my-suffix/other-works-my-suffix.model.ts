import { BaseEntity } from './../../shared';

export class OtherWorksMySuffix implements BaseEntity {
    constructor(
        public id?: string,
        public date?: any,
        public reason?: string,
        public qty?: number,
        public descripton?: string,
        public tempVal?: number,
        public timestamp?: number,
    ) {
    }
}
