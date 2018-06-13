import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { MeterReadingMySuffix } from './meter-reading-my-suffix.model';
import { MeterReadingMySuffixPopupService } from './meter-reading-my-suffix-popup.service';
import { MeterReadingMySuffixService } from './meter-reading-my-suffix.service';

@Component({
    selector: 'jhi-meter-reading-my-suffix-delete-dialog',
    templateUrl: './meter-reading-my-suffix-delete-dialog.component.html'
})
export class MeterReadingMySuffixDeleteDialogComponent {

    meterReading: MeterReadingMySuffix;

    constructor(
        private meterReadingService: MeterReadingMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.meterReadingService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'meterReadingListModification',
                content: 'Deleted an meterReading'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-meter-reading-my-suffix-delete-popup',
    template: ''
})
export class MeterReadingMySuffixDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private meterReadingPopupService: MeterReadingMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.meterReadingPopupService
                .open(MeterReadingMySuffixDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
