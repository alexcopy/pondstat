/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GateTestModule } from '../../../test.module';
import { OtherWorksMySuffixComponent } from '../../../../../../main/webapp/app/entities/other-works-my-suffix/other-works-my-suffix.component';
import { OtherWorksMySuffixService } from '../../../../../../main/webapp/app/entities/other-works-my-suffix/other-works-my-suffix.service';
import { OtherWorksMySuffix } from '../../../../../../main/webapp/app/entities/other-works-my-suffix/other-works-my-suffix.model';

describe('Component Tests', () => {

    describe('OtherWorksMySuffix Management Component', () => {
        let comp: OtherWorksMySuffixComponent;
        let fixture: ComponentFixture<OtherWorksMySuffixComponent>;
        let service: OtherWorksMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [OtherWorksMySuffixComponent],
                providers: [
                    OtherWorksMySuffixService
                ]
            })
            .overrideTemplate(OtherWorksMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(OtherWorksMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(OtherWorksMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new OtherWorksMySuffix(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.otherWorks[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
