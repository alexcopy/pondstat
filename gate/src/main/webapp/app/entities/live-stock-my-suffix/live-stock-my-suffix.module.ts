import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GateSharedModule } from '../../shared';
import {
    LiveStockMySuffixService,
    LiveStockMySuffixPopupService,
    LiveStockMySuffixComponent,
    LiveStockMySuffixDetailComponent,
    LiveStockMySuffixDialogComponent,
    LiveStockMySuffixPopupComponent,
    LiveStockMySuffixDeletePopupComponent,
    LiveStockMySuffixDeleteDialogComponent,
    liveStockRoute,
    liveStockPopupRoute,
    LiveStockMySuffixResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...liveStockRoute,
    ...liveStockPopupRoute,
];

@NgModule({
    imports: [
        GateSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        LiveStockMySuffixComponent,
        LiveStockMySuffixDetailComponent,
        LiveStockMySuffixDialogComponent,
        LiveStockMySuffixDeleteDialogComponent,
        LiveStockMySuffixPopupComponent,
        LiveStockMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        LiveStockMySuffixComponent,
        LiveStockMySuffixDialogComponent,
        LiveStockMySuffixPopupComponent,
        LiveStockMySuffixDeleteDialogComponent,
        LiveStockMySuffixDeletePopupComponent,
    ],
    providers: [
        LiveStockMySuffixService,
        LiveStockMySuffixPopupService,
        LiveStockMySuffixResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GateLiveStockMySuffixModule {}
