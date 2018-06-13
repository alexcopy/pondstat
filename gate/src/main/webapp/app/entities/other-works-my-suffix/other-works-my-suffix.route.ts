import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { OtherWorksMySuffixComponent } from './other-works-my-suffix.component';
import { OtherWorksMySuffixDetailComponent } from './other-works-my-suffix-detail.component';
import { OtherWorksMySuffixPopupComponent } from './other-works-my-suffix-dialog.component';
import { OtherWorksMySuffixDeletePopupComponent } from './other-works-my-suffix-delete-dialog.component';

export const otherWorksRoute: Routes = [
    {
        path: 'other-works-my-suffix',
        component: OtherWorksMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.otherWorks.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'other-works-my-suffix/:id',
        component: OtherWorksMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.otherWorks.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const otherWorksPopupRoute: Routes = [
    {
        path: 'other-works-my-suffix-new',
        component: OtherWorksMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.otherWorks.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'other-works-my-suffix/:id/edit',
        component: OtherWorksMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.otherWorks.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'other-works-my-suffix/:id/delete',
        component: OtherWorksMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.otherWorks.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
