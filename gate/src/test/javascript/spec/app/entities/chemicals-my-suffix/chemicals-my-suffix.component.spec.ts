/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GateTestModule } from '../../../test.module';
import { ChemicalsMySuffixComponent } from '../../../../../../main/webapp/app/entities/chemicals-my-suffix/chemicals-my-suffix.component';
import { ChemicalsMySuffixService } from '../../../../../../main/webapp/app/entities/chemicals-my-suffix/chemicals-my-suffix.service';
import { ChemicalsMySuffix } from '../../../../../../main/webapp/app/entities/chemicals-my-suffix/chemicals-my-suffix.model';

describe('Component Tests', () => {

    describe('ChemicalsMySuffix Management Component', () => {
        let comp: ChemicalsMySuffixComponent;
        let fixture: ComponentFixture<ChemicalsMySuffixComponent>;
        let service: ChemicalsMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [ChemicalsMySuffixComponent],
                providers: [
                    ChemicalsMySuffixService
                ]
            })
            .overrideTemplate(ChemicalsMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ChemicalsMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ChemicalsMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new ChemicalsMySuffix(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.chemicals[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
