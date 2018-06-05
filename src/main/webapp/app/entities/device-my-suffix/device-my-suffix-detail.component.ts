import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { DeviceMySuffix } from './device-my-suffix.model';
import { DeviceMySuffixService } from './device-my-suffix.service';

@Component({
    selector: 'jhi-device-my-suffix-detail',
    templateUrl: './device-my-suffix-detail.component.html'
})
export class DeviceMySuffixDetailComponent implements OnInit, OnDestroy {

    device: DeviceMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private deviceService: DeviceMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInDevices();
    }

    load(id) {
        this.deviceService.find(id)
            .subscribe((deviceResponse: HttpResponse<DeviceMySuffix>) => {
                this.device = deviceResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInDevices() {
        this.eventSubscriber = this.eventManager.subscribe(
            'deviceListModification',
            (response) => this.load(this.device.id)
        );
    }
}
