/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GateTestModule } from '../../../test.module';
import { FilterPumpCleaningMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/filter-pump-cleaning-my-suffix/filter-pump-cleaning-my-suffix-detail.component';
import { FilterPumpCleaningMySuffixService } from '../../../../../../main/webapp/app/entities/filter-pump-cleaning-my-suffix/filter-pump-cleaning-my-suffix.service';
import { FilterPumpCleaningMySuffix } from '../../../../../../main/webapp/app/entities/filter-pump-cleaning-my-suffix/filter-pump-cleaning-my-suffix.model';

describe('Component Tests', () => {

    describe('FilterPumpCleaningMySuffix Management Detail Component', () => {
        let comp: FilterPumpCleaningMySuffixDetailComponent;
        let fixture: ComponentFixture<FilterPumpCleaningMySuffixDetailComponent>;
        let service: FilterPumpCleaningMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [FilterPumpCleaningMySuffixDetailComponent],
                providers: [
                    FilterPumpCleaningMySuffixService
                ]
            })
            .overrideTemplate(FilterPumpCleaningMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(FilterPumpCleaningMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FilterPumpCleaningMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new FilterPumpCleaningMySuffix(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.filterPumpCleaning).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
