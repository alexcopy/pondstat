/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { GateTestModule } from '../../../test.module';
import { WaterChangeMySuffixDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/water-change-my-suffix/water-change-my-suffix-delete-dialog.component';
import { WaterChangeMySuffixService } from '../../../../../../main/webapp/app/entities/water-change-my-suffix/water-change-my-suffix.service';

describe('Component Tests', () => {

    describe('WaterChangeMySuffix Management Delete Component', () => {
        let comp: WaterChangeMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<WaterChangeMySuffixDeleteDialogComponent>;
        let service: WaterChangeMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [WaterChangeMySuffixDeleteDialogComponent],
                providers: [
                    WaterChangeMySuffixService
                ]
            })
            .overrideTemplate(WaterChangeMySuffixDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(WaterChangeMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(WaterChangeMySuffixService);
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
