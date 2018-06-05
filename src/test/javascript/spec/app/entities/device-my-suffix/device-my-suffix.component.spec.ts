/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { PondgateTestModule } from '../../../test.module';
import { DeviceMySuffixComponent } from '../../../../../../main/webapp/app/entities/device-my-suffix/device-my-suffix.component';
import { DeviceMySuffixService } from '../../../../../../main/webapp/app/entities/device-my-suffix/device-my-suffix.service';
import { DeviceMySuffix } from '../../../../../../main/webapp/app/entities/device-my-suffix/device-my-suffix.model';

describe('Component Tests', () => {

    describe('DeviceMySuffix Management Component', () => {
        let comp: DeviceMySuffixComponent;
        let fixture: ComponentFixture<DeviceMySuffixComponent>;
        let service: DeviceMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [PondgateTestModule],
                declarations: [DeviceMySuffixComponent],
                providers: [
                    DeviceMySuffixService
                ]
            })
            .overrideTemplate(DeviceMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DeviceMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DeviceMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new DeviceMySuffix('123')],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.devices[0]).toEqual(jasmine.objectContaining({id: '123'}));
            });
        });
    });

});
