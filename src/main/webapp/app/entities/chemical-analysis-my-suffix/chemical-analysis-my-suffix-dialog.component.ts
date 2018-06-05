import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ChemicalAnalysisMySuffix } from './chemical-analysis-my-suffix.model';
import { ChemicalAnalysisMySuffixPopupService } from './chemical-analysis-my-suffix-popup.service';
import { ChemicalAnalysisMySuffixService } from './chemical-analysis-my-suffix.service';

@Component({
    selector: 'jhi-chemical-analysis-my-suffix-dialog',
    templateUrl: './chemical-analysis-my-suffix-dialog.component.html'
})
export class ChemicalAnalysisMySuffixDialogComponent implements OnInit {

    chemicalAnalysis: ChemicalAnalysisMySuffix;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private chemicalAnalysisService: ChemicalAnalysisMySuffixService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.chemicalAnalysis.id !== undefined) {
            this.subscribeToSaveResponse(
                this.chemicalAnalysisService.update(this.chemicalAnalysis));
        } else {
            this.subscribeToSaveResponse(
                this.chemicalAnalysisService.create(this.chemicalAnalysis));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ChemicalAnalysisMySuffix>>) {
        result.subscribe((res: HttpResponse<ChemicalAnalysisMySuffix>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: ChemicalAnalysisMySuffix) {
        this.eventManager.broadcast({ name: 'chemicalAnalysisListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-chemical-analysis-my-suffix-popup',
    template: ''
})
export class ChemicalAnalysisMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private chemicalAnalysisPopupService: ChemicalAnalysisMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.chemicalAnalysisPopupService
                    .open(ChemicalAnalysisMySuffixDialogComponent as Component, params['id']);
            } else {
                this.chemicalAnalysisPopupService
                    .open(ChemicalAnalysisMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
