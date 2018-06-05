import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { FilterPumpCleaningMySuffix } from './filter-pump-cleaning-my-suffix.model';
import { FilterPumpCleaningMySuffixPopupService } from './filter-pump-cleaning-my-suffix-popup.service';
import { FilterPumpCleaningMySuffixService } from './filter-pump-cleaning-my-suffix.service';

@Component({
    selector: 'jhi-filter-pump-cleaning-my-suffix-dialog',
    templateUrl: './filter-pump-cleaning-my-suffix-dialog.component.html'
})
export class FilterPumpCleaningMySuffixDialogComponent implements OnInit {

    filterPumpCleaning: FilterPumpCleaningMySuffix;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private filterPumpCleaningService: FilterPumpCleaningMySuffixService,
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
        if (this.filterPumpCleaning.id !== undefined) {
            this.subscribeToSaveResponse(
                this.filterPumpCleaningService.update(this.filterPumpCleaning));
        } else {
            this.subscribeToSaveResponse(
                this.filterPumpCleaningService.create(this.filterPumpCleaning));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<FilterPumpCleaningMySuffix>>) {
        result.subscribe((res: HttpResponse<FilterPumpCleaningMySuffix>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: FilterPumpCleaningMySuffix) {
        this.eventManager.broadcast({ name: 'filterPumpCleaningListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-filter-pump-cleaning-my-suffix-popup',
    template: ''
})
export class FilterPumpCleaningMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private filterPumpCleaningPopupService: FilterPumpCleaningMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.filterPumpCleaningPopupService
                    .open(FilterPumpCleaningMySuffixDialogComponent as Component, params['id']);
            } else {
                this.filterPumpCleaningPopupService
                    .open(FilterPumpCleaningMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
