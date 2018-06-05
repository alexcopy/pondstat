import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PondgateSharedModule } from '../../shared';
import {
    TempMeterMySuffixService,
    TempMeterMySuffixPopupService,
    TempMeterMySuffixComponent,
    TempMeterMySuffixDetailComponent,
    TempMeterMySuffixDialogComponent,
    TempMeterMySuffixPopupComponent,
    TempMeterMySuffixDeletePopupComponent,
    TempMeterMySuffixDeleteDialogComponent,
    tempMeterRoute,
    tempMeterPopupRoute,
} from './';

const ENTITY_STATES = [
    ...tempMeterRoute,
    ...tempMeterPopupRoute,
];

@NgModule({
    imports: [
        PondgateSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        TempMeterMySuffixComponent,
        TempMeterMySuffixDetailComponent,
        TempMeterMySuffixDialogComponent,
        TempMeterMySuffixDeleteDialogComponent,
        TempMeterMySuffixPopupComponent,
        TempMeterMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        TempMeterMySuffixComponent,
        TempMeterMySuffixDialogComponent,
        TempMeterMySuffixPopupComponent,
        TempMeterMySuffixDeleteDialogComponent,
        TempMeterMySuffixDeletePopupComponent,
    ],
    providers: [
        TempMeterMySuffixService,
        TempMeterMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PondgateTempMeterMySuffixModule {}
