import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PondgateSharedModule } from '../../shared';
import {
    MeterReadingMySuffixService,
    MeterReadingMySuffixPopupService,
    MeterReadingMySuffixComponent,
    MeterReadingMySuffixDetailComponent,
    MeterReadingMySuffixDialogComponent,
    MeterReadingMySuffixPopupComponent,
    MeterReadingMySuffixDeletePopupComponent,
    MeterReadingMySuffixDeleteDialogComponent,
    meterReadingRoute,
    meterReadingPopupRoute,
    MeterReadingMySuffixResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...meterReadingRoute,
    ...meterReadingPopupRoute,
];

@NgModule({
    imports: [
        PondgateSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        MeterReadingMySuffixComponent,
        MeterReadingMySuffixDetailComponent,
        MeterReadingMySuffixDialogComponent,
        MeterReadingMySuffixDeleteDialogComponent,
        MeterReadingMySuffixPopupComponent,
        MeterReadingMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        MeterReadingMySuffixComponent,
        MeterReadingMySuffixDialogComponent,
        MeterReadingMySuffixPopupComponent,
        MeterReadingMySuffixDeleteDialogComponent,
        MeterReadingMySuffixDeletePopupComponent,
    ],
    providers: [
        MeterReadingMySuffixService,
        MeterReadingMySuffixPopupService,
        MeterReadingMySuffixResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PondgateMeterReadingMySuffixModule {}
