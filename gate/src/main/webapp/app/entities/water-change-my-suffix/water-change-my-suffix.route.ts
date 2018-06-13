import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { WaterChangeMySuffixComponent } from './water-change-my-suffix.component';
import { WaterChangeMySuffixDetailComponent } from './water-change-my-suffix-detail.component';
import { WaterChangeMySuffixPopupComponent } from './water-change-my-suffix-dialog.component';
import { WaterChangeMySuffixDeletePopupComponent } from './water-change-my-suffix-delete-dialog.component';

export const waterChangeRoute: Routes = [
    {
        path: 'water-change-my-suffix',
        component: WaterChangeMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.waterChange.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'water-change-my-suffix/:id',
        component: WaterChangeMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.waterChange.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const waterChangePopupRoute: Routes = [
    {
        path: 'water-change-my-suffix-new',
        component: WaterChangeMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.waterChange.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'water-change-my-suffix/:id/edit',
        component: WaterChangeMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.waterChange.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'water-change-my-suffix/:id/delete',
        component: WaterChangeMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.waterChange.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
