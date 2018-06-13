/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GateTestModule } from '../../../test.module';
import { ChemicalAnalysisMySuffixComponent } from '../../../../../../main/webapp/app/entities/chemical-analysis-my-suffix/chemical-analysis-my-suffix.component';
import { ChemicalAnalysisMySuffixService } from '../../../../../../main/webapp/app/entities/chemical-analysis-my-suffix/chemical-analysis-my-suffix.service';
import { ChemicalAnalysisMySuffix } from '../../../../../../main/webapp/app/entities/chemical-analysis-my-suffix/chemical-analysis-my-suffix.model';

describe('Component Tests', () => {

    describe('ChemicalAnalysisMySuffix Management Component', () => {
        let comp: ChemicalAnalysisMySuffixComponent;
        let fixture: ComponentFixture<ChemicalAnalysisMySuffixComponent>;
        let service: ChemicalAnalysisMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [ChemicalAnalysisMySuffixComponent],
                providers: [
                    ChemicalAnalysisMySuffixService
                ]
            })
            .overrideTemplate(ChemicalAnalysisMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ChemicalAnalysisMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ChemicalAnalysisMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new ChemicalAnalysisMySuffix(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.chemicalAnalyses[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
