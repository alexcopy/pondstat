/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { GateTestModule } from '../../../test.module';
import { TempMeterMySuffixDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/temp-meter-my-suffix/temp-meter-my-suffix-delete-dialog.component';
import { TempMeterMySuffixService } from '../../../../../../main/webapp/app/entities/temp-meter-my-suffix/temp-meter-my-suffix.service';

describe('Component Tests', () => {

    describe('TempMeterMySuffix Management Delete Component', () => {
        let comp: TempMeterMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<TempMeterMySuffixDeleteDialogComponent>;
        let service: TempMeterMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [TempMeterMySuffixDeleteDialogComponent],
                providers: [
                    TempMeterMySuffixService
                ]
            })
            .overrideTemplate(TempMeterMySuffixDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TempMeterMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TempMeterMySuffixService);
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
