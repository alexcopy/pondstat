/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GateTestModule } from '../../../test.module';
import { FilterPumpCleaningMySuffixComponent } from '../../../../../../main/webapp/app/entities/filter-pump-cleaning-my-suffix/filter-pump-cleaning-my-suffix.component';
import { FilterPumpCleaningMySuffixService } from '../../../../../../main/webapp/app/entities/filter-pump-cleaning-my-suffix/filter-pump-cleaning-my-suffix.service';
import { FilterPumpCleaningMySuffix } from '../../../../../../main/webapp/app/entities/filter-pump-cleaning-my-suffix/filter-pump-cleaning-my-suffix.model';

describe('Component Tests', () => {

    describe('FilterPumpCleaningMySuffix Management Component', () => {
        let comp: FilterPumpCleaningMySuffixComponent;
        let fixture: ComponentFixture<FilterPumpCleaningMySuffixComponent>;
        let service: FilterPumpCleaningMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [FilterPumpCleaningMySuffixComponent],
                providers: [
                    FilterPumpCleaningMySuffixService
                ]
            })
            .overrideTemplate(FilterPumpCleaningMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(FilterPumpCleaningMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FilterPumpCleaningMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new FilterPumpCleaningMySuffix(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.filterPumpCleanings[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
