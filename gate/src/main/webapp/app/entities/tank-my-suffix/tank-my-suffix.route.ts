import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { TankMySuffixComponent } from './tank-my-suffix.component';
import { TankMySuffixDetailComponent } from './tank-my-suffix-detail.component';
import { TankMySuffixPopupComponent } from './tank-my-suffix-dialog.component';
import { TankMySuffixDeletePopupComponent } from './tank-my-suffix-delete-dialog.component';

export const tankRoute: Routes = [
    {
        path: 'tank-my-suffix',
        component: TankMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.tank.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'tank-my-suffix/:id',
        component: TankMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.tank.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const tankPopupRoute: Routes = [
    {
        path: 'tank-my-suffix-new',
        component: TankMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.tank.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'tank-my-suffix/:id/edit',
        component: TankMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.tank.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'tank-my-suffix/:id/delete',
        component: TankMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.tank.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
