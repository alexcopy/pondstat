import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GateSharedModule } from '../../shared';
import {
    WaterChangeMySuffixService,
    WaterChangeMySuffixPopupService,
    WaterChangeMySuffixComponent,
    WaterChangeMySuffixDetailComponent,
    WaterChangeMySuffixDialogComponent,
    WaterChangeMySuffixPopupComponent,
    WaterChangeMySuffixDeletePopupComponent,
    WaterChangeMySuffixDeleteDialogComponent,
    waterChangeRoute,
    waterChangePopupRoute,
} from './';

const ENTITY_STATES = [
    ...waterChangeRoute,
    ...waterChangePopupRoute,
];

@NgModule({
    imports: [
        GateSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        WaterChangeMySuffixComponent,
        WaterChangeMySuffixDetailComponent,
        WaterChangeMySuffixDialogComponent,
        WaterChangeMySuffixDeleteDialogComponent,
        WaterChangeMySuffixPopupComponent,
        WaterChangeMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        WaterChangeMySuffixComponent,
        WaterChangeMySuffixDialogComponent,
        WaterChangeMySuffixPopupComponent,
        WaterChangeMySuffixDeleteDialogComponent,
        WaterChangeMySuffixDeletePopupComponent,
    ],
    providers: [
        WaterChangeMySuffixService,
        WaterChangeMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GateWaterChangeMySuffixModule {}
