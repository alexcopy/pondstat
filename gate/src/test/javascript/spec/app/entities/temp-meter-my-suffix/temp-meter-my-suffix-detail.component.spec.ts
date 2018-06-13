/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GateTestModule } from '../../../test.module';
import { TempMeterMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/temp-meter-my-suffix/temp-meter-my-suffix-detail.component';
import { TempMeterMySuffixService } from '../../../../../../main/webapp/app/entities/temp-meter-my-suffix/temp-meter-my-suffix.service';
import { TempMeterMySuffix } from '../../../../../../main/webapp/app/entities/temp-meter-my-suffix/temp-meter-my-suffix.model';

describe('Component Tests', () => {

    describe('TempMeterMySuffix Management Detail Component', () => {
        let comp: TempMeterMySuffixDetailComponent;
        let fixture: ComponentFixture<TempMeterMySuffixDetailComponent>;
        let service: TempMeterMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [TempMeterMySuffixDetailComponent],
                providers: [
                    TempMeterMySuffixService
                ]
            })
            .overrideTemplate(TempMeterMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TempMeterMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TempMeterMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new TempMeterMySuffix(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.tempMeter).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
