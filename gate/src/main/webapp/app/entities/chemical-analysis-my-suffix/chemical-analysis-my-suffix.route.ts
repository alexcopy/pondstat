import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from '../../shared';
import { ChemicalAnalysisMySuffixComponent } from './chemical-analysis-my-suffix.component';
import { ChemicalAnalysisMySuffixDetailComponent } from './chemical-analysis-my-suffix-detail.component';
import { ChemicalAnalysisMySuffixPopupComponent } from './chemical-analysis-my-suffix-dialog.component';
import { ChemicalAnalysisMySuffixDeletePopupComponent } from './chemical-analysis-my-suffix-delete-dialog.component';

@Injectable()
export class ChemicalAnalysisMySuffixResolvePagingParams implements Resolve<any> {

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

export const chemicalAnalysisRoute: Routes = [
    {
        path: 'chemical-analysis-my-suffix',
        component: ChemicalAnalysisMySuffixComponent,
        resolve: {
            'pagingParams': ChemicalAnalysisMySuffixResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.chemicalAnalysis.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'chemical-analysis-my-suffix/:id',
        component: ChemicalAnalysisMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.chemicalAnalysis.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const chemicalAnalysisPopupRoute: Routes = [
    {
        path: 'chemical-analysis-my-suffix-new',
        component: ChemicalAnalysisMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.chemicalAnalysis.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'chemical-analysis-my-suffix/:id/edit',
        component: ChemicalAnalysisMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.chemicalAnalysis.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'chemical-analysis-my-suffix/:id/delete',
        component: ChemicalAnalysisMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.chemicalAnalysis.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
