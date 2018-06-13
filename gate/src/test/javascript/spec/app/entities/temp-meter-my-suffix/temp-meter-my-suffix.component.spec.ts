/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GateTestModule } from '../../../test.module';
import { TempMeterMySuffixComponent } from '../../../../../../main/webapp/app/entities/temp-meter-my-suffix/temp-meter-my-suffix.component';
import { TempMeterMySuffixService } from '../../../../../../main/webapp/app/entities/temp-meter-my-suffix/temp-meter-my-suffix.service';
import { TempMeterMySuffix } from '../../../../../../main/webapp/app/entities/temp-meter-my-suffix/temp-meter-my-suffix.model';

describe('Component Tests', () => {

    describe('TempMeterMySuffix Management Component', () => {
        let comp: TempMeterMySuffixComponent;
        let fixture: ComponentFixture<TempMeterMySuffixComponent>;
        let service: TempMeterMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [TempMeterMySuffixComponent],
                providers: [
                    TempMeterMySuffixService
                ]
            })
            .overrideTemplate(TempMeterMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TempMeterMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TempMeterMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new TempMeterMySuffix(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.tempMeters[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
