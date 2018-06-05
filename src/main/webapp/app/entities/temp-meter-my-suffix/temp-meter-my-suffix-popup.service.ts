import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { TempMeterMySuffix } from './temp-meter-my-suffix.model';
import { TempMeterMySuffixService } from './temp-meter-my-suffix.service';

@Injectable()
export class TempMeterMySuffixPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private tempMeterService: TempMeterMySuffixService

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
                this.tempMeterService.find(id)
                    .subscribe((tempMeterResponse: HttpResponse<TempMeterMySuffix>) => {
                        const tempMeter: TempMeterMySuffix = tempMeterResponse.body;
                        tempMeter.readingDate = this.datePipe
                            .transform(tempMeter.readingDate, 'yyyy-MM-ddTHH:mm:ss');
                        this.ngbModalRef = this.tempMeterModalRef(component, tempMeter);
                        resolve(this.ngbModalRef);
                    });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.tempMeterModalRef(component, new TempMeterMySuffix());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    tempMeterModalRef(component: Component, tempMeter: TempMeterMySuffix): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tempMeter = tempMeter;
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
