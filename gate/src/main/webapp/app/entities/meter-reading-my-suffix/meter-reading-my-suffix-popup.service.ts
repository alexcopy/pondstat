import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MeterReadingMySuffix } from './meter-reading-my-suffix.model';
import { MeterReadingMySuffixService } from './meter-reading-my-suffix.service';

@Injectable()
export class MeterReadingMySuffixPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private meterReadingService: MeterReadingMySuffixService

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
                this.meterReadingService.find(id)
                    .subscribe((meterReadingResponse: HttpResponse<MeterReadingMySuffix>) => {
                        const meterReading: MeterReadingMySuffix = meterReadingResponse.body;
                        meterReading.readingDate = this.datePipe
                            .transform(meterReading.readingDate, 'yyyy-MM-ddTHH:mm:ss');
                        this.ngbModalRef = this.meterReadingModalRef(component, meterReading);
                        resolve(this.ngbModalRef);
                    });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.meterReadingModalRef(component, new MeterReadingMySuffix());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    meterReadingModalRef(component: Component, meterReading: MeterReadingMySuffix): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.meterReading = meterReading;
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
