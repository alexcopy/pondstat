/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { GateTestModule } from '../../../test.module';
import { FilterPumpCleaningMySuffixDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/filter-pump-cleaning-my-suffix/filter-pump-cleaning-my-suffix-delete-dialog.component';
import { FilterPumpCleaningMySuffixService } from '../../../../../../main/webapp/app/entities/filter-pump-cleaning-my-suffix/filter-pump-cleaning-my-suffix.service';

describe('Component Tests', () => {

    describe('FilterPumpCleaningMySuffix Management Delete Component', () => {
        let comp: FilterPumpCleaningMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<FilterPumpCleaningMySuffixDeleteDialogComponent>;
        let service: FilterPumpCleaningMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [FilterPumpCleaningMySuffixDeleteDialogComponent],
                providers: [
                    FilterPumpCleaningMySuffixService
                ]
            })
            .overrideTemplate(FilterPumpCleaningMySuffixDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(FilterPumpCleaningMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FilterPumpCleaningMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
