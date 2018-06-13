/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { GateTestModule } from '../../../test.module';
import { ChemicalAnalysisMySuffixDialogComponent } from '../../../../../../main/webapp/app/entities/chemical-analysis-my-suffix/chemical-analysis-my-suffix-dialog.component';
import { ChemicalAnalysisMySuffixService } from '../../../../../../main/webapp/app/entities/chemical-analysis-my-suffix/chemical-analysis-my-suffix.service';
import { ChemicalAnalysisMySuffix } from '../../../../../../main/webapp/app/entities/chemical-analysis-my-suffix/chemical-analysis-my-suffix.model';

describe('Component Tests', () => {

    describe('ChemicalAnalysisMySuffix Management Dialog Component', () => {
        let comp: ChemicalAnalysisMySuffixDialogComponent;
        let fixture: ComponentFixture<ChemicalAnalysisMySuffixDialogComponent>;
        let service: ChemicalAnalysisMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [ChemicalAnalysisMySuffixDialogComponent],
                providers: [
                    ChemicalAnalysisMySuffixService
                ]
            })
            .overrideTemplate(ChemicalAnalysisMySuffixDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ChemicalAnalysisMySuffixDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ChemicalAnalysisMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new ChemicalAnalysisMySuffix(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(new HttpResponse({body: entity})));
                        comp.chemicalAnalysis = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'chemicalAnalysisListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new ChemicalAnalysisMySuffix();
                        spyOn(service, 'create').and.returnValue(Observable.of(new HttpResponse({body: entity})));
                        comp.chemicalAnalysis = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'chemicalAnalysisListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
