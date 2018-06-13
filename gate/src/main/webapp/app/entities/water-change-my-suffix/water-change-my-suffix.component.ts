import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { WaterChangeMySuffix } from './water-change-my-suffix.model';
import { WaterChangeMySuffixService } from './water-change-my-suffix.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-water-change-my-suffix',
    templateUrl: './water-change-my-suffix.component.html'
})
export class WaterChangeMySuffixComponent implements OnInit, OnDestroy {
waterChanges: WaterChangeMySuffix[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private waterChangeService: WaterChangeMySuffixService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.waterChangeService.query().subscribe(
            (res: HttpResponse<WaterChangeMySuffix[]>) => {
                this.waterChanges = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInWaterChanges();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: WaterChangeMySuffix) {
        return item.id;
    }
    registerChangeInWaterChanges() {
        this.eventSubscriber = this.eventManager.subscribe('waterChangeListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
