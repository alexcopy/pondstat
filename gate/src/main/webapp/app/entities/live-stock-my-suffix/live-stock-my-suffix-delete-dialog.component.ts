import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { LiveStockMySuffix } from './live-stock-my-suffix.model';
import { LiveStockMySuffixPopupService } from './live-stock-my-suffix-popup.service';
import { LiveStockMySuffixService } from './live-stock-my-suffix.service';

@Component({
    selector: 'jhi-live-stock-my-suffix-delete-dialog',
    templateUrl: './live-stock-my-suffix-delete-dialog.component.html'
})
export class LiveStockMySuffixDeleteDialogComponent {

    liveStock: LiveStockMySuffix;

    constructor(
        private liveStockService: LiveStockMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.liveStockService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'liveStockListModification',
                content: 'Deleted an liveStock'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-live-stock-my-suffix-delete-popup',
    template: ''
})
export class LiveStockMySuffixDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private liveStockPopupService: LiveStockMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.liveStockPopupService
                .open(LiveStockMySuffixDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
