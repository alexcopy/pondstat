/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GateTestModule } from '../../../test.module';
import { WaterChangeMySuffixComponent } from '../../../../../../main/webapp/app/entities/water-change-my-suffix/water-change-my-suffix.component';
import { WaterChangeMySuffixService } from '../../../../../../main/webapp/app/entities/water-change-my-suffix/water-change-my-suffix.service';
import { WaterChangeMySuffix } from '../../../../../../main/webapp/app/entities/water-change-my-suffix/water-change-my-suffix.model';

describe('Component Tests', () => {

    describe('WaterChangeMySuffix Management Component', () => {
        let comp: WaterChangeMySuffixComponent;
        let fixture: ComponentFixture<WaterChangeMySuffixComponent>;
        let service: WaterChangeMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [WaterChangeMySuffixComponent],
                providers: [
                    WaterChangeMySuffixService
                ]
            })
            .overrideTemplate(WaterChangeMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(WaterChangeMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(WaterChangeMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new WaterChangeMySuffix(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.waterChanges[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
