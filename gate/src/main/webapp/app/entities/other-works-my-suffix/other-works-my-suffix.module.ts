import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GateSharedModule } from '../../shared';
import {
    OtherWorksMySuffixService,
    OtherWorksMySuffixPopupService,
    OtherWorksMySuffixComponent,
    OtherWorksMySuffixDetailComponent,
    OtherWorksMySuffixDialogComponent,
    OtherWorksMySuffixPopupComponent,
    OtherWorksMySuffixDeletePopupComponent,
    OtherWorksMySuffixDeleteDialogComponent,
    otherWorksRoute,
    otherWorksPopupRoute,
} from './';

const ENTITY_STATES = [
    ...otherWorksRoute,
    ...otherWorksPopupRoute,
];

@NgModule({
    imports: [
        GateSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        OtherWorksMySuffixComponent,
        OtherWorksMySuffixDetailComponent,
        OtherWorksMySuffixDialogComponent,
        OtherWorksMySuffixDeleteDialogComponent,
        OtherWorksMySuffixPopupComponent,
        OtherWorksMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        OtherWorksMySuffixComponent,
        OtherWorksMySuffixDialogComponent,
        OtherWorksMySuffixPopupComponent,
        OtherWorksMySuffixDeleteDialogComponent,
        OtherWorksMySuffixDeletePopupComponent,
    ],
    providers: [
        OtherWorksMySuffixService,
        OtherWorksMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GateOtherWorksMySuffixModule {}
