import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GateSharedModule } from '../../shared';
import {
    TankMySuffixService,
    TankMySuffixPopupService,
    TankMySuffixComponent,
    TankMySuffixDetailComponent,
    TankMySuffixDialogComponent,
    TankMySuffixPopupComponent,
    TankMySuffixDeletePopupComponent,
    TankMySuffixDeleteDialogComponent,
    tankRoute,
    tankPopupRoute,
} from './';

const ENTITY_STATES = [
    ...tankRoute,
    ...tankPopupRoute,
];

@NgModule({
    imports: [
        GateSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        TankMySuffixComponent,
        TankMySuffixDetailComponent,
        TankMySuffixDialogComponent,
        TankMySuffixDeleteDialogComponent,
        TankMySuffixPopupComponent,
        TankMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        TankMySuffixComponent,
        TankMySuffixDialogComponent,
        TankMySuffixPopupComponent,
        TankMySuffixDeleteDialogComponent,
        TankMySuffixDeletePopupComponent,
    ],
    providers: [
        TankMySuffixService,
        TankMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GateTankMySuffixModule {}
