import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { ChemicalsMySuffix } from './chemicals-my-suffix.model';
import { ChemicalsMySuffixService } from './chemicals-my-suffix.service';

@Component({
    selector: 'jhi-chemicals-my-suffix-detail',
    templateUrl: './chemicals-my-suffix-detail.component.html'
})
export class ChemicalsMySuffixDetailComponent implements OnInit, OnDestroy {

    chemicals: ChemicalsMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private chemicalsService: ChemicalsMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInChemicals();
    }

    load(id) {
        this.chemicalsService.find(id)
            .subscribe((chemicalsResponse: HttpResponse<ChemicalsMySuffix>) => {
                this.chemicals = chemicalsResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInChemicals() {
        this.eventSubscriber = this.eventManager.subscribe(
            'chemicalsListModification',
            (response) => this.load(this.chemicals.id)
        );
    }
}
