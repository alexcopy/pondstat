/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PondgateTestModule } from '../../../test.module';
import { DeviceMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/device-my-suffix/device-my-suffix-detail.component';
import { DeviceMySuffixService } from '../../../../../../main/webapp/app/entities/device-my-suffix/device-my-suffix.service';
import { DeviceMySuffix } from '../../../../../../main/webapp/app/entities/device-my-suffix/device-my-suffix.model';

describe('Component Tests', () => {

    describe('DeviceMySuffix Management Detail Component', () => {
        let comp: DeviceMySuffixDetailComponent;
        let fixture: ComponentFixture<DeviceMySuffixDetailComponent>;
        let service: DeviceMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [PondgateTestModule],
                declarations: [DeviceMySuffixDetailComponent],
                providers: [
                    DeviceMySuffixService
                ]
            })
            .overrideTemplate(DeviceMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DeviceMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DeviceMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new DeviceMySuffix('123')
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith('123');
                expect(comp.device).toEqual(jasmine.objectContaining({id: '123'}));
            });
        });
    });

});
