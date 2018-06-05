import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ChemicalsMySuffix } from './chemicals-my-suffix.model';
import { ChemicalsMySuffixService } from './chemicals-my-suffix.service';

@Injectable()
export class ChemicalsMySuffixPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private chemicalsService: ChemicalsMySuffixService

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
                this.chemicalsService.find(id)
                    .subscribe((chemicalsResponse: HttpResponse<ChemicalsMySuffix>) => {
                        const chemicals: ChemicalsMySuffix = chemicalsResponse.body;
                        chemicals.date = this.datePipe
                            .transform(chemicals.date, 'yyyy-MM-ddTHH:mm:ss');
                        this.ngbModalRef = this.chemicalsModalRef(component, chemicals);
                        resolve(this.ngbModalRef);
                    });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.chemicalsModalRef(component, new ChemicalsMySuffix());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    chemicalsModalRef(component: Component, chemicals: ChemicalsMySuffix): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.chemicals = chemicals;
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
