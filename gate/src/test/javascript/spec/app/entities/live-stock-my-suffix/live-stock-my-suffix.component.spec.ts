/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GateTestModule } from '../../../test.module';
import { LiveStockMySuffixComponent } from '../../../../../../main/webapp/app/entities/live-stock-my-suffix/live-stock-my-suffix.component';
import { LiveStockMySuffixService } from '../../../../../../main/webapp/app/entities/live-stock-my-suffix/live-stock-my-suffix.service';
import { LiveStockMySuffix } from '../../../../../../main/webapp/app/entities/live-stock-my-suffix/live-stock-my-suffix.model';

describe('Component Tests', () => {

    describe('LiveStockMySuffix Management Component', () => {
        let comp: LiveStockMySuffixComponent;
        let fixture: ComponentFixture<LiveStockMySuffixComponent>;
        let service: LiveStockMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [LiveStockMySuffixComponent],
                providers: [
                    LiveStockMySuffixService
                ]
            })
            .overrideTemplate(LiveStockMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(LiveStockMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LiveStockMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new LiveStockMySuffix(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.liveStocks[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
