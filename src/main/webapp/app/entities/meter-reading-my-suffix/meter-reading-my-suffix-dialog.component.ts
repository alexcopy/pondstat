import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { MeterReadingMySuffix } from './meter-reading-my-suffix.model';
import { MeterReadingMySuffixPopupService } from './meter-reading-my-suffix-popup.service';
import { MeterReadingMySuffixService } from './meter-reading-my-suffix.service';

@Component({
    selector: 'jhi-meter-reading-my-suffix-dialog',
    templateUrl: './meter-reading-my-suffix-dialog.component.html'
})
export class MeterReadingMySuffixDialogComponent implements OnInit {

    meterReading: MeterReadingMySuffix;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private meterReadingService: MeterReadingMySuffixService,
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
        if (this.meterReading.id !== undefined) {
            this.subscribeToSaveResponse(
                this.meterReadingService.update(this.meterReading));
        } else {
            this.subscribeToSaveResponse(
                this.meterReadingService.create(this.meterReading));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<MeterReadingMySuffix>>) {
        result.subscribe((res: HttpResponse<MeterReadingMySuffix>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: MeterReadingMySuffix) {
        this.eventManager.broadcast({ name: 'meterReadingListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-meter-reading-my-suffix-popup',
    template: ''
})
export class MeterReadingMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private meterReadingPopupService: MeterReadingMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.meterReadingPopupService
                    .open(MeterReadingMySuffixDialogComponent as Component, params['id']);
            } else {
                this.meterReadingPopupService
                    .open(MeterReadingMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
