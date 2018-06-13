/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { GateTestModule } from '../../../test.module';
import { FilterPumpCleaningMySuffixDialogComponent } from '../../../../../../main/webapp/app/entities/filter-pump-cleaning-my-suffix/filter-pump-cleaning-my-suffix-dialog.component';
import { FilterPumpCleaningMySuffixService } from '../../../../../../main/webapp/app/entities/filter-pump-cleaning-my-suffix/filter-pump-cleaning-my-suffix.service';
import { FilterPumpCleaningMySuffix } from '../../../../../../main/webapp/app/entities/filter-pump-cleaning-my-suffix/filter-pump-cleaning-my-suffix.model';

describe('Component Tests', () => {

    describe('FilterPumpCleaningMySuffix Management Dialog Component', () => {
        let comp: FilterPumpCleaningMySuffixDialogComponent;
        let fixture: ComponentFixture<FilterPumpCleaningMySuffixDialogComponent>;
        let service: FilterPumpCleaningMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [FilterPumpCleaningMySuffixDialogComponent],
                providers: [
                    FilterPumpCleaningMySuffixService
                ]
            })
            .overrideTemplate(FilterPumpCleaningMySuffixDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(FilterPumpCleaningMySuffixDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FilterPumpCleaningMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new FilterPumpCleaningMySuffix(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(new HttpResponse({body: entity})));
                        comp.filterPumpCleaning = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'filterPumpCleaningListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new FilterPumpCleaningMySuffix();
                        spyOn(service, 'create').and.returnValue(Observable.of(new HttpResponse({body: entity})));
                        comp.filterPumpCleaning = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'filterPumpCleaningListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
