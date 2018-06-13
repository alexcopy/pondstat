/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GateTestModule } from '../../../test.module';
import { TankMySuffixComponent } from '../../../../../../main/webapp/app/entities/tank-my-suffix/tank-my-suffix.component';
import { TankMySuffixService } from '../../../../../../main/webapp/app/entities/tank-my-suffix/tank-my-suffix.service';
import { TankMySuffix } from '../../../../../../main/webapp/app/entities/tank-my-suffix/tank-my-suffix.model';

describe('Component Tests', () => {

    describe('TankMySuffix Management Component', () => {
        let comp: TankMySuffixComponent;
        let fixture: ComponentFixture<TankMySuffixComponent>;
        let service: TankMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [TankMySuffixComponent],
                providers: [
                    TankMySuffixService
                ]
            })
            .overrideTemplate(TankMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TankMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TankMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new TankMySuffix(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.tanks[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
