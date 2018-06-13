/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GateTestModule } from '../../../test.module';
import { OtherWorksMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/other-works-my-suffix/other-works-my-suffix-detail.component';
import { OtherWorksMySuffixService } from '../../../../../../main/webapp/app/entities/other-works-my-suffix/other-works-my-suffix.service';
import { OtherWorksMySuffix } from '../../../../../../main/webapp/app/entities/other-works-my-suffix/other-works-my-suffix.model';

describe('Component Tests', () => {

    describe('OtherWorksMySuffix Management Detail Component', () => {
        let comp: OtherWorksMySuffixDetailComponent;
        let fixture: ComponentFixture<OtherWorksMySuffixDetailComponent>;
        let service: OtherWorksMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [OtherWorksMySuffixDetailComponent],
                providers: [
                    OtherWorksMySuffixService
                ]
            })
            .overrideTemplate(OtherWorksMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(OtherWorksMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(OtherWorksMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new OtherWorksMySuffix(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.otherWorks).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
