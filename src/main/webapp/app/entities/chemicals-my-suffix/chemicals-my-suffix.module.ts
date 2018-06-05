import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PondgateSharedModule } from '../../shared';
import {
    ChemicalsMySuffixService,
    ChemicalsMySuffixPopupService,
    ChemicalsMySuffixComponent,
    ChemicalsMySuffixDetailComponent,
    ChemicalsMySuffixDialogComponent,
    ChemicalsMySuffixPopupComponent,
    ChemicalsMySuffixDeletePopupComponent,
    ChemicalsMySuffixDeleteDialogComponent,
    chemicalsRoute,
    chemicalsPopupRoute,
    ChemicalsMySuffixResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...chemicalsRoute,
    ...chemicalsPopupRoute,
];

@NgModule({
    imports: [
        PondgateSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        ChemicalsMySuffixComponent,
        ChemicalsMySuffixDetailComponent,
        ChemicalsMySuffixDialogComponent,
        ChemicalsMySuffixDeleteDialogComponent,
        ChemicalsMySuffixPopupComponent,
        ChemicalsMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        ChemicalsMySuffixComponent,
        ChemicalsMySuffixDialogComponent,
        ChemicalsMySuffixPopupComponent,
        ChemicalsMySuffixDeleteDialogComponent,
        ChemicalsMySuffixDeletePopupComponent,
    ],
    providers: [
        ChemicalsMySuffixService,
        ChemicalsMySuffixPopupService,
        ChemicalsMySuffixResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PondgateChemicalsMySuffixModule {}
