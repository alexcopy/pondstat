import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ChemicalsMySuffix } from './chemicals-my-suffix.model';
import { ChemicalsMySuffixPopupService } from './chemicals-my-suffix-popup.service';
import { ChemicalsMySuffixService } from './chemicals-my-suffix.service';

@Component({
    selector: 'jhi-chemicals-my-suffix-dialog',
    templateUrl: './chemicals-my-suffix-dialog.component.html'
})
export class ChemicalsMySuffixDialogComponent implements OnInit {

    chemicals: ChemicalsMySuffix;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private chemicalsService: ChemicalsMySuffixService,
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
        if (this.chemicals.id !== undefined) {
            this.subscribeToSaveResponse(
                this.chemicalsService.update(this.chemicals));
        } else {
            this.subscribeToSaveResponse(
                this.chemicalsService.create(this.chemicals));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ChemicalsMySuffix>>) {
        result.subscribe((res: HttpResponse<ChemicalsMySuffix>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: ChemicalsMySuffix) {
        this.eventManager.broadcast({ name: 'chemicalsListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-chemicals-my-suffix-popup',
    template: ''
})
export class ChemicalsMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private chemicalsPopupService: ChemicalsMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.chemicalsPopupService
                    .open(ChemicalsMySuffixDialogComponent as Component, params['id']);
            } else {
                this.chemicalsPopupService
                    .open(ChemicalsMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
