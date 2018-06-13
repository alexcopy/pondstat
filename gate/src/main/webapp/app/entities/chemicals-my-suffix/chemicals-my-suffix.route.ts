import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from '../../shared';
import { ChemicalsMySuffixComponent } from './chemicals-my-suffix.component';
import { ChemicalsMySuffixDetailComponent } from './chemicals-my-suffix-detail.component';
import { ChemicalsMySuffixPopupComponent } from './chemicals-my-suffix-dialog.component';
import { ChemicalsMySuffixDeletePopupComponent } from './chemicals-my-suffix-delete-dialog.component';

@Injectable()
export class ChemicalsMySuffixResolvePagingParams implements Resolve<any> {

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

export const chemicalsRoute: Routes = [
    {
        path: 'chemicals-my-suffix',
        component: ChemicalsMySuffixComponent,
        resolve: {
            'pagingParams': ChemicalsMySuffixResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.chemicals.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'chemicals-my-suffix/:id',
        component: ChemicalsMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.chemicals.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const chemicalsPopupRoute: Routes = [
    {
        path: 'chemicals-my-suffix-new',
        component: ChemicalsMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.chemicals.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'chemicals-my-suffix/:id/edit',
        component: ChemicalsMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.chemicals.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'chemicals-my-suffix/:id/delete',
        component: ChemicalsMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.chemicals.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
