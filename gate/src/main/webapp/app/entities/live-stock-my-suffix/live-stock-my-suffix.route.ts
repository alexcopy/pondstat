import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from '../../shared';
import { LiveStockMySuffixComponent } from './live-stock-my-suffix.component';
import { LiveStockMySuffixDetailComponent } from './live-stock-my-suffix-detail.component';
import { LiveStockMySuffixPopupComponent } from './live-stock-my-suffix-dialog.component';
import { LiveStockMySuffixDeletePopupComponent } from './live-stock-my-suffix-delete-dialog.component';

@Injectable()
export class LiveStockMySuffixResolvePagingParams implements Resolve<any> {

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

export const liveStockRoute: Routes = [
    {
        path: 'live-stock-my-suffix',
        component: LiveStockMySuffixComponent,
        resolve: {
            'pagingParams': LiveStockMySuffixResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.liveStock.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'live-stock-my-suffix/:id',
        component: LiveStockMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.liveStock.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const liveStockPopupRoute: Routes = [
    {
        path: 'live-stock-my-suffix-new',
        component: LiveStockMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.liveStock.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'live-stock-my-suffix/:id/edit',
        component: LiveStockMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.liveStock.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'live-stock-my-suffix/:id/delete',
        component: LiveStockMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.liveStock.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
