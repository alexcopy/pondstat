import { BaseEntity } from './../../shared';

export const enum DeviceType {
    'PUMP',
    'FILTER',
    'UVLAMP',
    'UVCLARIFIER',
    'AIRPUMP',
    'OTHER'
}

export class DeviceMySuffix implements BaseEntity {
    constructor(
        public id?: string,
        public deviceName?: string,
        public deviceType?: DeviceType,
        public description?: string,
        public timestamp?: number,
    ) {
    }
}
