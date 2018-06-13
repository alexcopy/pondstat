import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { OtherWorksMySuffix } from './other-works-my-suffix.model';
import { OtherWorksMySuffixPopupService } from './other-works-my-suffix-popup.service';
import { OtherWorksMySuffixService } from './other-works-my-suffix.service';

@Component({
    selector: 'jhi-other-works-my-suffix-dialog',
    templateUrl: './other-works-my-suffix-dialog.component.html'
})
export class OtherWorksMySuffixDialogComponent implements OnInit {

    otherWorks: OtherWorksMySuffix;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private otherWorksService: OtherWorksMySuffixService,
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
        if (this.otherWorks.id !== undefined) {
            this.subscribeToSaveResponse(
                this.otherWorksService.update(this.otherWorks));
        } else {
            this.subscribeToSaveResponse(
                this.otherWorksService.create(this.otherWorks));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<OtherWorksMySuffix>>) {
        result.subscribe((res: HttpResponse<OtherWorksMySuffix>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: OtherWorksMySuffix) {
        this.eventManager.broadcast({ name: 'otherWorksListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-other-works-my-suffix-popup',
    template: ''
})
export class OtherWorksMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private otherWorksPopupService: OtherWorksMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.otherWorksPopupService
                    .open(OtherWorksMySuffixDialogComponent as Component, params['id']);
            } else {
                this.otherWorksPopupService
                    .open(OtherWorksMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
