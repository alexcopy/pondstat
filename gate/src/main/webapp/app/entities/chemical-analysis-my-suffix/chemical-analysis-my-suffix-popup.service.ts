import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ChemicalAnalysisMySuffix } from './chemical-analysis-my-suffix.model';
import { ChemicalAnalysisMySuffixService } from './chemical-analysis-my-suffix.service';

@Injectable()
export class ChemicalAnalysisMySuffixPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private chemicalAnalysisService: ChemicalAnalysisMySuffixService

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
                this.chemicalAnalysisService.find(id)
                    .subscribe((chemicalAnalysisResponse: HttpResponse<ChemicalAnalysisMySuffix>) => {
                        const chemicalAnalysis: ChemicalAnalysisMySuffix = chemicalAnalysisResponse.body;
                        chemicalAnalysis.date = this.datePipe
                            .transform(chemicalAnalysis.date, 'yyyy-MM-ddTHH:mm:ss');
                        this.ngbModalRef = this.chemicalAnalysisModalRef(component, chemicalAnalysis);
                        resolve(this.ngbModalRef);
                    });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.chemicalAnalysisModalRef(component, new ChemicalAnalysisMySuffix());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    chemicalAnalysisModalRef(component: Component, chemicalAnalysis: ChemicalAnalysisMySuffix): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.chemicalAnalysis = chemicalAnalysis;
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
