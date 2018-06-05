import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { WaterChangeMySuffix } from './water-change-my-suffix.model';
import { WaterChangeMySuffixService } from './water-change-my-suffix.service';

@Injectable()
export class WaterChangeMySuffixPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private waterChangeService: WaterChangeMySuffixService

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
                this.waterChangeService.find(id)
                    .subscribe((waterChangeResponse: HttpResponse<WaterChangeMySuffix>) => {
                        const waterChange: WaterChangeMySuffix = waterChangeResponse.body;
                        waterChange.changeDate = this.datePipe
                            .transform(waterChange.changeDate, 'yyyy-MM-ddTHH:mm:ss');
                        this.ngbModalRef = this.waterChangeModalRef(component, waterChange);
                        resolve(this.ngbModalRef);
                    });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.waterChangeModalRef(component, new WaterChangeMySuffix());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    waterChangeModalRef(component: Component, waterChange: WaterChangeMySuffix): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.waterChange = waterChange;
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
