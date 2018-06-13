/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GateTestModule } from '../../../test.module';
import { WaterChangeMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/water-change-my-suffix/water-change-my-suffix-detail.component';
import { WaterChangeMySuffixService } from '../../../../../../main/webapp/app/entities/water-change-my-suffix/water-change-my-suffix.service';
import { WaterChangeMySuffix } from '../../../../../../main/webapp/app/entities/water-change-my-suffix/water-change-my-suffix.model';

describe('Component Tests', () => {

    describe('WaterChangeMySuffix Management Detail Component', () => {
        let comp: WaterChangeMySuffixDetailComponent;
        let fixture: ComponentFixture<WaterChangeMySuffixDetailComponent>;
        let service: WaterChangeMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [WaterChangeMySuffixDetailComponent],
                providers: [
                    WaterChangeMySuffixService
                ]
            })
            .overrideTemplate(WaterChangeMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(WaterChangeMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(WaterChangeMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new WaterChangeMySuffix(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.waterChange).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
