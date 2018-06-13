import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GateSharedModule } from '../../shared';
import {
    FilterPumpCleaningMySuffixService,
    FilterPumpCleaningMySuffixPopupService,
    FilterPumpCleaningMySuffixComponent,
    FilterPumpCleaningMySuffixDetailComponent,
    FilterPumpCleaningMySuffixDialogComponent,
    FilterPumpCleaningMySuffixPopupComponent,
    FilterPumpCleaningMySuffixDeletePopupComponent,
    FilterPumpCleaningMySuffixDeleteDialogComponent,
    filterPumpCleaningRoute,
    filterPumpCleaningPopupRoute,
    FilterPumpCleaningMySuffixResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...filterPumpCleaningRoute,
    ...filterPumpCleaningPopupRoute,
];

@NgModule({
    imports: [
        GateSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        FilterPumpCleaningMySuffixComponent,
        FilterPumpCleaningMySuffixDetailComponent,
        FilterPumpCleaningMySuffixDialogComponent,
        FilterPumpCleaningMySuffixDeleteDialogComponent,
        FilterPumpCleaningMySuffixPopupComponent,
        FilterPumpCleaningMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        FilterPumpCleaningMySuffixComponent,
        FilterPumpCleaningMySuffixDialogComponent,
        FilterPumpCleaningMySuffixPopupComponent,
        FilterPumpCleaningMySuffixDeleteDialogComponent,
        FilterPumpCleaningMySuffixDeletePopupComponent,
    ],
    providers: [
        FilterPumpCleaningMySuffixService,
        FilterPumpCleaningMySuffixPopupService,
        FilterPumpCleaningMySuffixResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GateFilterPumpCleaningMySuffixModule {}
