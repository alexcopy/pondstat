import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { TempMeterMySuffix } from './temp-meter-my-suffix.model';
import { TempMeterMySuffixPopupService } from './temp-meter-my-suffix-popup.service';
import { TempMeterMySuffixService } from './temp-meter-my-suffix.service';

@Component({
    selector: 'jhi-temp-meter-my-suffix-dialog',
    templateUrl: './temp-meter-my-suffix-dialog.component.html'
})
export class TempMeterMySuffixDialogComponent implements OnInit {

    tempMeter: TempMeterMySuffix;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private tempMeterService: TempMeterMySuffixService,
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
        if (this.tempMeter.id !== undefined) {
            this.subscribeToSaveResponse(
                this.tempMeterService.update(this.tempMeter));
        } else {
            this.subscribeToSaveResponse(
                this.tempMeterService.create(this.tempMeter));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<TempMeterMySuffix>>) {
        result.subscribe((res: HttpResponse<TempMeterMySuffix>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: TempMeterMySuffix) {
        this.eventManager.broadcast({ name: 'tempMeterListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-temp-meter-my-suffix-popup',
    template: ''
})
export class TempMeterMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private tempMeterPopupService: TempMeterMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.tempMeterPopupService
                    .open(TempMeterMySuffixDialogComponent as Component, params['id']);
            } else {
                this.tempMeterPopupService
                    .open(TempMeterMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
