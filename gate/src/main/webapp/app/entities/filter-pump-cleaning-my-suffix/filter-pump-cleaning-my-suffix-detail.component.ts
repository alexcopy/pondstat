import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { FilterPumpCleaningMySuffix } from './filter-pump-cleaning-my-suffix.model';
import { FilterPumpCleaningMySuffixService } from './filter-pump-cleaning-my-suffix.service';

@Component({
    selector: 'jhi-filter-pump-cleaning-my-suffix-detail',
    templateUrl: './filter-pump-cleaning-my-suffix-detail.component.html'
})
export class FilterPumpCleaningMySuffixDetailComponent implements OnInit, OnDestroy {

    filterPumpCleaning: FilterPumpCleaningMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private filterPumpCleaningService: FilterPumpCleaningMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInFilterPumpCleanings();
    }

    load(id) {
        this.filterPumpCleaningService.find(id)
            .subscribe((filterPumpCleaningResponse: HttpResponse<FilterPumpCleaningMySuffix>) => {
                this.filterPumpCleaning = filterPumpCleaningResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInFilterPumpCleanings() {
        this.eventSubscriber = this.eventManager.subscribe(
            'filterPumpCleaningListModification',
            (response) => this.load(this.filterPumpCleaning.id)
        );
    }
}
