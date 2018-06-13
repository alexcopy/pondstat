import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from '../../shared';
import { MeterReadingMySuffixComponent } from './meter-reading-my-suffix.component';
import { MeterReadingMySuffixDetailComponent } from './meter-reading-my-suffix-detail.component';
import { MeterReadingMySuffixPopupComponent } from './meter-reading-my-suffix-dialog.component';
import { MeterReadingMySuffixDeletePopupComponent } from './meter-reading-my-suffix-delete-dialog.component';

@Injectable()
export class MeterReadingMySuffixResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const meterReadingRoute: Routes = [
    {
        path: 'meter-reading-my-suffix',
        component: MeterReadingMySuffixComponent,
        resolve: {
            'pagingParams': MeterReadingMySuffixResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.meterReading.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'meter-reading-my-suffix/:id',
        component: MeterReadingMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.meterReading.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const meterReadingPopupRoute: Routes = [
    {
        path: 'meter-reading-my-suffix-new',
        component: MeterReadingMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.meterReading.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'meter-reading-my-suffix/:id/edit',
        component: MeterReadingMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.meterReading.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'meter-reading-my-suffix/:id/delete',
        component: MeterReadingMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.meterReading.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
