import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { MeterReadingMySuffix } from './meter-reading-my-suffix.model';
import { MeterReadingMySuffixService } from './meter-reading-my-suffix.service';

@Component({
    selector: 'jhi-meter-reading-my-suffix-detail',
    templateUrl: './meter-reading-my-suffix-detail.component.html'
})
export class MeterReadingMySuffixDetailComponent implements OnInit, OnDestroy {

    meterReading: MeterReadingMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private meterReadingService: MeterReadingMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInMeterReadings();
    }

    load(id) {
        this.meterReadingService.find(id)
            .subscribe((meterReadingResponse: HttpResponse<MeterReadingMySuffix>) => {
                this.meterReading = meterReadingResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInMeterReadings() {
        this.eventSubscriber = this.eventManager.subscribe(
            'meterReadingListModification',
            (response) => this.load(this.meterReading.id)
        );
    }
}
