import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from '../../shared';
import { FilterPumpCleaningMySuffixComponent } from './filter-pump-cleaning-my-suffix.component';
import { FilterPumpCleaningMySuffixDetailComponent } from './filter-pump-cleaning-my-suffix-detail.component';
import { FilterPumpCleaningMySuffixPopupComponent } from './filter-pump-cleaning-my-suffix-dialog.component';
import { FilterPumpCleaningMySuffixDeletePopupComponent } from './filter-pump-cleaning-my-suffix-delete-dialog.component';

@Injectable()
export class FilterPumpCleaningMySuffixResolvePagingParams implements Resolve<any> {

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

export const filterPumpCleaningRoute: Routes = [
    {
        path: 'filter-pump-cleaning-my-suffix',
        component: FilterPumpCleaningMySuffixComponent,
        resolve: {
            'pagingParams': FilterPumpCleaningMySuffixResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.filterPumpCleaning.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'filter-pump-cleaning-my-suffix/:id',
        component: FilterPumpCleaningMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.filterPumpCleaning.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const filterPumpCleaningPopupRoute: Routes = [
    {
        path: 'filter-pump-cleaning-my-suffix-new',
        component: FilterPumpCleaningMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.filterPumpCleaning.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'filter-pump-cleaning-my-suffix/:id/edit',
        component: FilterPumpCleaningMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.filterPumpCleaning.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'filter-pump-cleaning-my-suffix/:id/delete',
        component: FilterPumpCleaningMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.filterPumpCleaning.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
