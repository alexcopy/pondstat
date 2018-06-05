import { BaseEntity } from './../../shared';

export class ChemicalsMySuffix implements BaseEntity {
    constructor(
        public id?: string,
        public date?: any,
        public qty?: number,
        public reason?: string,
        public tempVal?: number,
        public timestamp?: number,
    ) {
    }
}
