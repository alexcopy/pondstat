import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { TankMySuffix } from './tank-my-suffix.model';
import { TankMySuffixPopupService } from './tank-my-suffix-popup.service';
import { TankMySuffixService } from './tank-my-suffix.service';

@Component({
    selector: 'jhi-tank-my-suffix-dialog',
    templateUrl: './tank-my-suffix-dialog.component.html'
})
export class TankMySuffixDialogComponent implements OnInit {

    tank: TankMySuffix;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private tankService: TankMySuffixService,
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
        if (this.tank.id !== undefined) {
            this.subscribeToSaveResponse(
                this.tankService.update(this.tank));
        } else {
            this.subscribeToSaveResponse(
                this.tankService.create(this.tank));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<TankMySuffix>>) {
        result.subscribe((res: HttpResponse<TankMySuffix>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: TankMySuffix) {
        this.eventManager.broadcast({ name: 'tankListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-tank-my-suffix-popup',
    template: ''
})
export class TankMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private tankPopupService: TankMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.tankPopupService
                    .open(TankMySuffixDialogComponent as Component, params['id']);
            } else {
                this.tankPopupService
                    .open(TankMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
