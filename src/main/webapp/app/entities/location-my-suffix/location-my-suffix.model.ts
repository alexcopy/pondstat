import { BaseEntity } from './../../shared';

export class LocationMySuffix implements BaseEntity {
    constructor(
        public id?: string,
        public streetAddress?: string,
        public postalCode?: string,
        public city?: string,
        public county?: string,
    ) {
    }
}
