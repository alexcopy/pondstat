import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ChemicalsMySuffix } from './chemicals-my-suffix.model';
import { ChemicalsMySuffixPopupService } from './chemicals-my-suffix-popup.service';
import { ChemicalsMySuffixService } from './chemicals-my-suffix.service';

@Component({
    selector: 'jhi-chemicals-my-suffix-delete-dialog',
    templateUrl: './chemicals-my-suffix-delete-dialog.component.html'
})
export class ChemicalsMySuffixDeleteDialogComponent {

    chemicals: ChemicalsMySuffix;

    constructor(
        private chemicalsService: ChemicalsMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.chemicalsService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'chemicalsListModification',
                content: 'Deleted an chemicals'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-chemicals-my-suffix-delete-popup',
    template: ''
})
export class ChemicalsMySuffixDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private chemicalsPopupService: ChemicalsMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.chemicalsPopupService
                .open(ChemicalsMySuffixDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
