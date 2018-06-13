import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { LiveStockMySuffix } from './live-stock-my-suffix.model';
import { LiveStockMySuffixPopupService } from './live-stock-my-suffix-popup.service';
import { LiveStockMySuffixService } from './live-stock-my-suffix.service';

@Component({
    selector: 'jhi-live-stock-my-suffix-dialog',
    templateUrl: './live-stock-my-suffix-dialog.component.html'
})
export class LiveStockMySuffixDialogComponent implements OnInit {

    liveStock: LiveStockMySuffix;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private liveStockService: LiveStockMySuffixService,
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
        if (this.liveStock.id !== undefined) {
            this.subscribeToSaveResponse(
                this.liveStockService.update(this.liveStock));
        } else {
            this.subscribeToSaveResponse(
                this.liveStockService.create(this.liveStock));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<LiveStockMySuffix>>) {
        result.subscribe((res: HttpResponse<LiveStockMySuffix>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: LiveStockMySuffix) {
        this.eventManager.broadcast({ name: 'liveStockListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-live-stock-my-suffix-popup',
    template: ''
})
export class LiveStockMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private liveStockPopupService: LiveStockMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.liveStockPopupService
                    .open(LiveStockMySuffixDialogComponent as Component, params['id']);
            } else {
                this.liveStockPopupService
                    .open(LiveStockMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
