/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { GateTestModule } from '../../../test.module';
import { ChemicalsMySuffixDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/chemicals-my-suffix/chemicals-my-suffix-delete-dialog.component';
import { ChemicalsMySuffixService } from '../../../../../../main/webapp/app/entities/chemicals-my-suffix/chemicals-my-suffix.service';

describe('Component Tests', () => {

    describe('ChemicalsMySuffix Management Delete Component', () => {
        let comp: ChemicalsMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<ChemicalsMySuffixDeleteDialogComponent>;
        let service: ChemicalsMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [ChemicalsMySuffixDeleteDialogComponent],
                providers: [
                    ChemicalsMySuffixService
                ]
            })
            .overrideTemplate(ChemicalsMySuffixDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ChemicalsMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ChemicalsMySuffixService);
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
