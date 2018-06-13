/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GateTestModule } from '../../../test.module';
import { LiveStockMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/live-stock-my-suffix/live-stock-my-suffix-detail.component';
import { LiveStockMySuffixService } from '../../../../../../main/webapp/app/entities/live-stock-my-suffix/live-stock-my-suffix.service';
import { LiveStockMySuffix } from '../../../../../../main/webapp/app/entities/live-stock-my-suffix/live-stock-my-suffix.model';

describe('Component Tests', () => {

    describe('LiveStockMySuffix Management Detail Component', () => {
        let comp: LiveStockMySuffixDetailComponent;
        let fixture: ComponentFixture<LiveStockMySuffixDetailComponent>;
        let service: LiveStockMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [LiveStockMySuffixDetailComponent],
                providers: [
                    LiveStockMySuffixService
                ]
            })
            .overrideTemplate(LiveStockMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(LiveStockMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LiveStockMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new LiveStockMySuffix(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.liveStock).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
