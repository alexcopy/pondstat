import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { OtherWorksMySuffix } from './other-works-my-suffix.model';
import { OtherWorksMySuffixService } from './other-works-my-suffix.service';

@Component({
    selector: 'jhi-other-works-my-suffix-detail',
    templateUrl: './other-works-my-suffix-detail.component.html'
})
export class OtherWorksMySuffixDetailComponent implements OnInit, OnDestroy {

    otherWorks: OtherWorksMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private otherWorksService: OtherWorksMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInOtherWorks();
    }

    load(id) {
        this.otherWorksService.find(id)
            .subscribe((otherWorksResponse: HttpResponse<OtherWorksMySuffix>) => {
                this.otherWorks = otherWorksResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInOtherWorks() {
        this.eventSubscriber = this.eventManager.subscribe(
            'otherWorksListModification',
            (response) => this.load(this.otherWorks.id)
        );
    }
}
