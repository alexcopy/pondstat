import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { FilterPumpCleaningMySuffix } from './filter-pump-cleaning-my-suffix.model';
import { FilterPumpCleaningMySuffixPopupService } from './filter-pump-cleaning-my-suffix-popup.service';
import { FilterPumpCleaningMySuffixService } from './filter-pump-cleaning-my-suffix.service';

@Component({
    selector: 'jhi-filter-pump-cleaning-my-suffix-delete-dialog',
    templateUrl: './filter-pump-cleaning-my-suffix-delete-dialog.component.html'
})
export class FilterPumpCleaningMySuffixDeleteDialogComponent {

    filterPumpCleaning: FilterPumpCleaningMySuffix;

    constructor(
        private filterPumpCleaningService: FilterPumpCleaningMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.filterPumpCleaningService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'filterPumpCleaningListModification',
                content: 'Deleted an filterPumpCleaning'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-filter-pump-cleaning-my-suffix-delete-popup',
    template: ''
})
export class FilterPumpCleaningMySuffixDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private filterPumpCleaningPopupService: FilterPumpCleaningMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.filterPumpCleaningPopupService
                .open(FilterPumpCleaningMySuffixDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
