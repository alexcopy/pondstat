import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { TankMySuffix } from './tank-my-suffix.model';
import { TankMySuffixPopupService } from './tank-my-suffix-popup.service';
import { TankMySuffixService } from './tank-my-suffix.service';

@Component({
    selector: 'jhi-tank-my-suffix-delete-dialog',
    templateUrl: './tank-my-suffix-delete-dialog.component.html'
})
export class TankMySuffixDeleteDialogComponent {

    tank: TankMySuffix;

    constructor(
        private tankService: TankMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.tankService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'tankListModification',
                content: 'Deleted an tank'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tank-my-suffix-delete-popup',
    template: ''
})
export class TankMySuffixDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private tankPopupService: TankMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.tankPopupService
                .open(TankMySuffixDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
