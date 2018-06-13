import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { TankMySuffix } from './tank-my-suffix.model';
import { TankMySuffixService } from './tank-my-suffix.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-tank-my-suffix',
    templateUrl: './tank-my-suffix.component.html'
})
export class TankMySuffixComponent implements OnInit, OnDestroy {
tanks: TankMySuffix[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private tankService: TankMySuffixService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.tankService.query().subscribe(
            (res: HttpResponse<TankMySuffix[]>) => {
                this.tanks = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInTanks();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: TankMySuffix) {
        return item.id;
    }
    registerChangeInTanks() {
        this.eventSubscriber = this.eventManager.subscribe('tankListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
