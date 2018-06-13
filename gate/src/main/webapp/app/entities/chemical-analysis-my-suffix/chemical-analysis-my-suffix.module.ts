import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GateSharedModule } from '../../shared';
import {
    ChemicalAnalysisMySuffixService,
    ChemicalAnalysisMySuffixPopupService,
    ChemicalAnalysisMySuffixComponent,
    ChemicalAnalysisMySuffixDetailComponent,
    ChemicalAnalysisMySuffixDialogComponent,
    ChemicalAnalysisMySuffixPopupComponent,
    ChemicalAnalysisMySuffixDeletePopupComponent,
    ChemicalAnalysisMySuffixDeleteDialogComponent,
    chemicalAnalysisRoute,
    chemicalAnalysisPopupRoute,
    ChemicalAnalysisMySuffixResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...chemicalAnalysisRoute,
    ...chemicalAnalysisPopupRoute,
];

@NgModule({
    imports: [
        GateSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        ChemicalAnalysisMySuffixComponent,
        ChemicalAnalysisMySuffixDetailComponent,
        ChemicalAnalysisMySuffixDialogComponent,
        ChemicalAnalysisMySuffixDeleteDialogComponent,
        ChemicalAnalysisMySuffixPopupComponent,
        ChemicalAnalysisMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        ChemicalAnalysisMySuffixComponent,
        ChemicalAnalysisMySuffixDialogComponent,
        ChemicalAnalysisMySuffixPopupComponent,
        ChemicalAnalysisMySuffixDeleteDialogComponent,
        ChemicalAnalysisMySuffixDeletePopupComponent,
    ],
    providers: [
        ChemicalAnalysisMySuffixService,
        ChemicalAnalysisMySuffixPopupService,
        ChemicalAnalysisMySuffixResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GateChemicalAnalysisMySuffixModule {}
