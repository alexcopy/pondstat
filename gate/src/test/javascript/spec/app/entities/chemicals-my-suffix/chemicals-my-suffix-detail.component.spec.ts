/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GateTestModule } from '../../../test.module';
import { ChemicalsMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/chemicals-my-suffix/chemicals-my-suffix-detail.component';
import { ChemicalsMySuffixService } from '../../../../../../main/webapp/app/entities/chemicals-my-suffix/chemicals-my-suffix.service';
import { ChemicalsMySuffix } from '../../../../../../main/webapp/app/entities/chemicals-my-suffix/chemicals-my-suffix.model';

describe('Component Tests', () => {

    describe('ChemicalsMySuffix Management Detail Component', () => {
        let comp: ChemicalsMySuffixDetailComponent;
        let fixture: ComponentFixture<ChemicalsMySuffixDetailComponent>;
        let service: ChemicalsMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [ChemicalsMySuffixDetailComponent],
                providers: [
                    ChemicalsMySuffixService
                ]
            })
            .overrideTemplate(ChemicalsMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ChemicalsMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ChemicalsMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new ChemicalsMySuffix(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.chemicals).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
