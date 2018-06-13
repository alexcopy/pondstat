import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { LiveStockMySuffix } from './live-stock-my-suffix.model';
import { LiveStockMySuffixService } from './live-stock-my-suffix.service';

@Component({
    selector: 'jhi-live-stock-my-suffix-detail',
    templateUrl: './live-stock-my-suffix-detail.component.html'
})
export class LiveStockMySuffixDetailComponent implements OnInit, OnDestroy {

    liveStock: LiveStockMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private liveStockService: LiveStockMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInLiveStocks();
    }

    load(id) {
        this.liveStockService.find(id)
            .subscribe((liveStockResponse: HttpResponse<LiveStockMySuffix>) => {
                this.liveStock = liveStockResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInLiveStocks() {
        this.eventSubscriber = this.eventManager.subscribe(
            'liveStockListModification',
            (response) => this.load(this.liveStock.id)
        );
    }
}
