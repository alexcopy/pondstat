import { BaseEntity } from './../../shared';

export class ChemicalsMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public date?: any,
        public qty?: number,
        public reason?: string,
        public tempVal?: number,
        public timestamp?: number,
    ) {
    }
}
