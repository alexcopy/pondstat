import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { OtherWorksMySuffix } from './other-works-my-suffix.model';
import { OtherWorksMySuffixService } from './other-works-my-suffix.service';

@Injectable()
export class OtherWorksMySuffixPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private otherWorksService: OtherWorksMySuffixService

    ) {
        this.ngbModalRef = null;
    }

    open(component: Component, id?: number | any): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            const isOpen = this.ngbModalRef !== null;
            if (isOpen) {
                resolve(this.ngbModalRef);
            }

            if (id) {
                this.otherWorksService.find(id)
                    .subscribe((otherWorksResponse: HttpResponse<OtherWorksMySuffix>) => {
                        const otherWorks: OtherWorksMySuffix = otherWorksResponse.body;
                        otherWorks.date = this.datePipe
                            .transform(otherWorks.date, 'yyyy-MM-ddTHH:mm:ss');
                        this.ngbModalRef = this.otherWorksModalRef(component, otherWorks);
                        resolve(this.ngbModalRef);
                    });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.otherWorksModalRef(component, new OtherWorksMySuffix());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    otherWorksModalRef(component: Component, otherWorks: OtherWorksMySuffix): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.otherWorks = otherWorks;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
        });
        return modalRef;
    }
}
