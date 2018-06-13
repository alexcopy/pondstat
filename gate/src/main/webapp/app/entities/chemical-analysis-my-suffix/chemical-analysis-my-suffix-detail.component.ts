import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { ChemicalAnalysisMySuffix } from './chemical-analysis-my-suffix.model';
import { ChemicalAnalysisMySuffixService } from './chemical-analysis-my-suffix.service';

@Component({
    selector: 'jhi-chemical-analysis-my-suffix-detail',
    templateUrl: './chemical-analysis-my-suffix-detail.component.html'
})
export class ChemicalAnalysisMySuffixDetailComponent implements OnInit, OnDestroy {

    chemicalAnalysis: ChemicalAnalysisMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private chemicalAnalysisService: ChemicalAnalysisMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInChemicalAnalyses();
    }

    load(id) {
        this.chemicalAnalysisService.find(id)
            .subscribe((chemicalAnalysisResponse: HttpResponse<ChemicalAnalysisMySuffix>) => {
                this.chemicalAnalysis = chemicalAnalysisResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInChemicalAnalyses() {
        this.eventSubscriber = this.eventManager.subscribe(
            'chemicalAnalysisListModification',
            (response) => this.load(this.chemicalAnalysis.id)
        );
    }
}
