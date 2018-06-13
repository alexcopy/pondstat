/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GateTestModule } from '../../../test.module';
import { ChemicalAnalysisMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/chemical-analysis-my-suffix/chemical-analysis-my-suffix-detail.component';
import { ChemicalAnalysisMySuffixService } from '../../../../../../main/webapp/app/entities/chemical-analysis-my-suffix/chemical-analysis-my-suffix.service';
import { ChemicalAnalysisMySuffix } from '../../../../../../main/webapp/app/entities/chemical-analysis-my-suffix/chemical-analysis-my-suffix.model';

describe('Component Tests', () => {

    describe('ChemicalAnalysisMySuffix Management Detail Component', () => {
        let comp: ChemicalAnalysisMySuffixDetailComponent;
        let fixture: ComponentFixture<ChemicalAnalysisMySuffixDetailComponent>;
        let service: ChemicalAnalysisMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [ChemicalAnalysisMySuffixDetailComponent],
                providers: [
                    ChemicalAnalysisMySuffixService
                ]
            })
            .overrideTemplate(ChemicalAnalysisMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ChemicalAnalysisMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ChemicalAnalysisMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new ChemicalAnalysisMySuffix(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.chemicalAnalysis).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
