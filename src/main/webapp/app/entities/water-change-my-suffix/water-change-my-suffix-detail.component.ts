import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { WaterChangeMySuffix } from './water-change-my-suffix.model';
import { WaterChangeMySuffixService } from './water-change-my-suffix.service';

@Component({
    selector: 'jhi-water-change-my-suffix-detail',
    templateUrl: './water-change-my-suffix-detail.component.html'
})
export class WaterChangeMySuffixDetailComponent implements OnInit, OnDestroy {

    waterChange: WaterChangeMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private waterChangeService: WaterChangeMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInWaterChanges();
    }

    load(id) {
        this.waterChangeService.find(id)
            .subscribe((waterChangeResponse: HttpResponse<WaterChangeMySuffix>) => {
                this.waterChange = waterChangeResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInWaterChanges() {
        this.eventSubscriber = this.eventManager.subscribe(
            'waterChangeListModification',
            (response) => this.load(this.waterChange.id)
        );
    }
}
