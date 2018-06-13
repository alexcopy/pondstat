import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { TempMeterMySuffixComponent } from './temp-meter-my-suffix.component';
import { TempMeterMySuffixDetailComponent } from './temp-meter-my-suffix-detail.component';
import { TempMeterMySuffixPopupComponent } from './temp-meter-my-suffix-dialog.component';
import { TempMeterMySuffixDeletePopupComponent } from './temp-meter-my-suffix-delete-dialog.component';

export const tempMeterRoute: Routes = [
    {
        path: 'temp-meter-my-suffix',
        component: TempMeterMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.tempMeter.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'temp-meter-my-suffix/:id',
        component: TempMeterMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.tempMeter.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const tempMeterPopupRoute: Routes = [
    {
        path: 'temp-meter-my-suffix-new',
        component: TempMeterMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.tempMeter.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'temp-meter-my-suffix/:id/edit',
        component: TempMeterMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.tempMeter.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'temp-meter-my-suffix/:id/delete',
        component: TempMeterMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateApp.tempMeter.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
