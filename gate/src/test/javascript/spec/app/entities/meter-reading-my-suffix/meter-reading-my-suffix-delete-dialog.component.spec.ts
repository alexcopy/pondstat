/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { GateTestModule } from '../../../test.module';
import { MeterReadingMySuffixDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/meter-reading-my-suffix/meter-reading-my-suffix-delete-dialog.component';
import { MeterReadingMySuffixService } from '../../../../../../main/webapp/app/entities/meter-reading-my-suffix/meter-reading-my-suffix.service';

describe('Component Tests', () => {

    describe('MeterReadingMySuffix Management Delete Component', () => {
        let comp: MeterReadingMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<MeterReadingMySuffixDeleteDialogComponent>;
        let service: MeterReadingMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [MeterReadingMySuffixDeleteDialogComponent],
                providers: [
                    MeterReadingMySuffixService
                ]
            })
            .overrideTemplate(MeterReadingMySuffixDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MeterReadingMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MeterReadingMySuffixService);
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
