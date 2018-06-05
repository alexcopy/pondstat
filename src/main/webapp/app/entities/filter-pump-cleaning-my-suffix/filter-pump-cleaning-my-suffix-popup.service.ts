import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FilterPumpCleaningMySuffix } from './filter-pump-cleaning-my-suffix.model';
import { FilterPumpCleaningMySuffixService } from './filter-pump-cleaning-my-suffix.service';

@Injectable()
export class FilterPumpCleaningMySuffixPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private filterPumpCleaningService: FilterPumpCleaningMySuffixService

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
                this.filterPumpCleaningService.find(id)
                    .subscribe((filterPumpCleaningResponse: HttpResponse<FilterPumpCleaningMySuffix>) => {
                        const filterPumpCleaning: FilterPumpCleaningMySuffix = filterPumpCleaningResponse.body;
                        filterPumpCleaning.cleaningDate = this.datePipe
                            .transform(filterPumpCleaning.cleaningDate, 'yyyy-MM-ddTHH:mm:ss');
                        this.ngbModalRef = this.filterPumpCleaningModalRef(component, filterPumpCleaning);
                        resolve(this.ngbModalRef);
                    });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.filterPumpCleaningModalRef(component, new FilterPumpCleaningMySuffix());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    filterPumpCleaningModalRef(component: Component, filterPumpCleaning: FilterPumpCleaningMySuffix): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.filterPumpCleaning = filterPumpCleaning;
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
