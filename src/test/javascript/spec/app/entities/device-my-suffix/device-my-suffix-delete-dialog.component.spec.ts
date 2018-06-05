/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { PondgateTestModule } from '../../../test.module';
import { DeviceMySuffixDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/device-my-suffix/device-my-suffix-delete-dialog.component';
import { DeviceMySuffixService } from '../../../../../../main/webapp/app/entities/device-my-suffix/device-my-suffix.service';

describe('Component Tests', () => {

    describe('DeviceMySuffix Management Delete Component', () => {
        let comp: DeviceMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<DeviceMySuffixDeleteDialogComponent>;
        let service: DeviceMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [PondgateTestModule],
                declarations: [DeviceMySuffixDeleteDialogComponent],
                providers: [
                    DeviceMySuffixService
                ]
            })
            .overrideTemplate(DeviceMySuffixDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DeviceMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DeviceMySuffixService);
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
                        comp.confirmDelete('123');
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith('123');
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
