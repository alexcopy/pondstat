import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { WaterChangeMySuffix } from './water-change-my-suffix.model';
import { WaterChangeMySuffixPopupService } from './water-change-my-suffix-popup.service';
import { WaterChangeMySuffixService } from './water-change-my-suffix.service';

@Component({
    selector: 'jhi-water-change-my-suffix-dialog',
    templateUrl: './water-change-my-suffix-dialog.component.html'
})
export class WaterChangeMySuffixDialogComponent implements OnInit {

    waterChange: WaterChangeMySuffix;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private waterChangeService: WaterChangeMySuffixService,
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
        if (this.waterChange.id !== undefined) {
            this.subscribeToSaveResponse(
                this.waterChangeService.update(this.waterChange));
        } else {
            this.subscribeToSaveResponse(
                this.waterChangeService.create(this.waterChange));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<WaterChangeMySuffix>>) {
        result.subscribe((res: HttpResponse<WaterChangeMySuffix>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: WaterChangeMySuffix) {
        this.eventManager.broadcast({ name: 'waterChangeListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-water-change-my-suffix-popup',
    template: ''
})
export class WaterChangeMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private waterChangePopupService: WaterChangeMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.waterChangePopupService
                    .open(WaterChangeMySuffixDialogComponent as Component, params['id']);
            } else {
                this.waterChangePopupService
                    .open(WaterChangeMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
