import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { TankMySuffix } from './tank-my-suffix.model';
import { TankMySuffixService } from './tank-my-suffix.service';

@Component({
    selector: 'jhi-tank-my-suffix-detail',
    templateUrl: './tank-my-suffix-detail.component.html'
})
export class TankMySuffixDetailComponent implements OnInit, OnDestroy {

    tank: TankMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private tankService: TankMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInTanks();
    }

    load(id) {
        this.tankService.find(id)
            .subscribe((tankResponse: HttpResponse<TankMySuffix>) => {
                this.tank = tankResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInTanks() {
        this.eventSubscriber = this.eventManager.subscribe(
            'tankListModification',
            (response) => this.load(this.tank.id)
        );
    }
}
