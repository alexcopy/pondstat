import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { TempMeterMySuffix } from './temp-meter-my-suffix.model';
import { TempMeterMySuffixPopupService } from './temp-meter-my-suffix-popup.service';
import { TempMeterMySuffixService } from './temp-meter-my-suffix.service';

@Component({
    selector: 'jhi-temp-meter-my-suffix-delete-dialog',
    templateUrl: './temp-meter-my-suffix-delete-dialog.component.html'
})
export class TempMeterMySuffixDeleteDialogComponent {

    tempMeter: TempMeterMySuffix;

    constructor(
        private tempMeterService: TempMeterMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.tempMeterService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'tempMeterListModification',
                content: 'Deleted an tempMeter'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-temp-meter-my-suffix-delete-popup',
    template: ''
})
export class TempMeterMySuffixDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private tempMeterPopupService: TempMeterMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.tempMeterPopupService
                .open(TempMeterMySuffixDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
