import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { TempMeterMySuffix } from './temp-meter-my-suffix.model';
import { TempMeterMySuffixService } from './temp-meter-my-suffix.service';

@Component({
    selector: 'jhi-temp-meter-my-suffix-detail',
    templateUrl: './temp-meter-my-suffix-detail.component.html'
})
export class TempMeterMySuffixDetailComponent implements OnInit, OnDestroy {

    tempMeter: TempMeterMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private tempMeterService: TempMeterMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInTempMeters();
    }

    load(id) {
        this.tempMeterService.find(id)
            .subscribe((tempMeterResponse: HttpResponse<TempMeterMySuffix>) => {
                this.tempMeter = tempMeterResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInTempMeters() {
        this.eventSubscriber = this.eventManager.subscribe(
            'tempMeterListModification',
            (response) => this.load(this.tempMeter.id)
        );
    }
}
