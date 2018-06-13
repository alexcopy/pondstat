/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GateTestModule } from '../../../test.module';
import { MeterReadingMySuffixComponent } from '../../../../../../main/webapp/app/entities/meter-reading-my-suffix/meter-reading-my-suffix.component';
import { MeterReadingMySuffixService } from '../../../../../../main/webapp/app/entities/meter-reading-my-suffix/meter-reading-my-suffix.service';
import { MeterReadingMySuffix } from '../../../../../../main/webapp/app/entities/meter-reading-my-suffix/meter-reading-my-suffix.model';

describe('Component Tests', () => {

    describe('MeterReadingMySuffix Management Component', () => {
        let comp: MeterReadingMySuffixComponent;
        let fixture: ComponentFixture<MeterReadingMySuffixComponent>;
        let service: MeterReadingMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [MeterReadingMySuffixComponent],
                providers: [
                    MeterReadingMySuffixService
                ]
            })
            .overrideTemplate(MeterReadingMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MeterReadingMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MeterReadingMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new MeterReadingMySuffix(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.meterReadings[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
