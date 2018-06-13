import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { OtherWorksMySuffix } from './other-works-my-suffix.model';
import { OtherWorksMySuffixPopupService } from './other-works-my-suffix-popup.service';
import { OtherWorksMySuffixService } from './other-works-my-suffix.service';

@Component({
    selector: 'jhi-other-works-my-suffix-delete-dialog',
    templateUrl: './other-works-my-suffix-delete-dialog.component.html'
})
export class OtherWorksMySuffixDeleteDialogComponent {

    otherWorks: OtherWorksMySuffix;

    constructor(
        private otherWorksService: OtherWorksMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.otherWorksService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'otherWorksListModification',
                content: 'Deleted an otherWorks'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-other-works-my-suffix-delete-popup',
    template: ''
})
export class OtherWorksMySuffixDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private otherWorksPopupService: OtherWorksMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.otherWorksPopupService
                .open(OtherWorksMySuffixDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
