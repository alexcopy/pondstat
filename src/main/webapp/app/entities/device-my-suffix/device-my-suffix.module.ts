import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PondgateSharedModule } from '../../shared';
import {
    DeviceMySuffixService,
    DeviceMySuffixPopupService,
    DeviceMySuffixComponent,
    DeviceMySuffixDetailComponent,
    DeviceMySuffixDialogComponent,
    DeviceMySuffixPopupComponent,
    DeviceMySuffixDeletePopupComponent,
    DeviceMySuffixDeleteDialogComponent,
    deviceRoute,
    devicePopupRoute,
} from './';

const ENTITY_STATES = [
    ...deviceRoute,
    ...devicePopupRoute,
];

@NgModule({
    imports: [
        PondgateSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        DeviceMySuffixComponent,
        DeviceMySuffixDetailComponent,
        DeviceMySuffixDialogComponent,
        DeviceMySuffixDeleteDialogComponent,
        DeviceMySuffixPopupComponent,
        DeviceMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        DeviceMySuffixComponent,
        DeviceMySuffixDialogComponent,
        DeviceMySuffixPopupComponent,
        DeviceMySuffixDeleteDialogComponent,
        DeviceMySuffixDeletePopupComponent,
    ],
    providers: [
        DeviceMySuffixService,
        DeviceMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PondgateDeviceMySuffixModule {}
