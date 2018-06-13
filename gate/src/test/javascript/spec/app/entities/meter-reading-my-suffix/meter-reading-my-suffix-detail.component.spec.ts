/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GateTestModule } from '../../../test.module';
import { MeterReadingMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/meter-reading-my-suffix/meter-reading-my-suffix-detail.component';
import { MeterReadingMySuffixService } from '../../../../../../main/webapp/app/entities/meter-reading-my-suffix/meter-reading-my-suffix.service';
import { MeterReadingMySuffix } from '../../../../../../main/webapp/app/entities/meter-reading-my-suffix/meter-reading-my-suffix.model';

describe('Component Tests', () => {

    describe('MeterReadingMySuffix Management Detail Component', () => {
        let comp: MeterReadingMySuffixDetailComponent;
        let fixture: ComponentFixture<MeterReadingMySuffixDetailComponent>;
        let service: MeterReadingMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [MeterReadingMySuffixDetailComponent],
                providers: [
                    MeterReadingMySuffixService
                ]
            })
            .overrideTemplate(MeterReadingMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MeterReadingMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MeterReadingMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new MeterReadingMySuffix(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.meterReading).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
