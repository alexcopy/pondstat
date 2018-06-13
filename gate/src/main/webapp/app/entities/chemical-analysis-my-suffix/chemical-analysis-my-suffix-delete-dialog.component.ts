import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ChemicalAnalysisMySuffix } from './chemical-analysis-my-suffix.model';
import { ChemicalAnalysisMySuffixPopupService } from './chemical-analysis-my-suffix-popup.service';
import { ChemicalAnalysisMySuffixService } from './chemical-analysis-my-suffix.service';

@Component({
    selector: 'jhi-chemical-analysis-my-suffix-delete-dialog',
    templateUrl: './chemical-analysis-my-suffix-delete-dialog.component.html'
})
export class ChemicalAnalysisMySuffixDeleteDialogComponent {

    chemicalAnalysis: ChemicalAnalysisMySuffix;

    constructor(
        private chemicalAnalysisService: ChemicalAnalysisMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.chemicalAnalysisService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'chemicalAnalysisListModification',
                content: 'Deleted an chemicalAnalysis'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-chemical-analysis-my-suffix-delete-popup',
    template: ''
})
export class ChemicalAnalysisMySuffixDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private chemicalAnalysisPopupService: ChemicalAnalysisMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.chemicalAnalysisPopupService
                .open(ChemicalAnalysisMySuffixDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
