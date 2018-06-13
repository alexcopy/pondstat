import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { WaterChangeMySuffix } from './water-change-my-suffix.model';
import { WaterChangeMySuffixPopupService } from './water-change-my-suffix-popup.service';
import { WaterChangeMySuffixService } from './water-change-my-suffix.service';

@Component({
    selector: 'jhi-water-change-my-suffix-delete-dialog',
    templateUrl: './water-change-my-suffix-delete-dialog.component.html'
})
export class WaterChangeMySuffixDeleteDialogComponent {

    waterChange: WaterChangeMySuffix;

    constructor(
        private waterChangeService: WaterChangeMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.waterChangeService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'waterChangeListModification',
                content: 'Deleted an waterChange'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-water-change-my-suffix-delete-popup',
    template: ''
})
export class WaterChangeMySuffixDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private waterChangePopupService: WaterChangeMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.waterChangePopupService
                .open(WaterChangeMySuffixDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
