import { BaseEntity } from './../../shared';

export const enum TankType {
    'POND',
    'AQUARIUM'
}

export class TankMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public tankName?: string,
        public tankType?: TankType,
        public description?: string,
        public timestamp?: number,
    ) {
    }
}
