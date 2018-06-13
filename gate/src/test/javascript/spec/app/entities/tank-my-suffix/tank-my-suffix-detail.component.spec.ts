/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GateTestModule } from '../../../test.module';
import { TankMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/tank-my-suffix/tank-my-suffix-detail.component';
import { TankMySuffixService } from '../../../../../../main/webapp/app/entities/tank-my-suffix/tank-my-suffix.service';
import { TankMySuffix } from '../../../../../../main/webapp/app/entities/tank-my-suffix/tank-my-suffix.model';

describe('Component Tests', () => {

    describe('TankMySuffix Management Detail Component', () => {
        let comp: TankMySuffixDetailComponent;
        let fixture: ComponentFixture<TankMySuffixDetailComponent>;
        let service: TankMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GateTestModule],
                declarations: [TankMySuffixDetailComponent],
                providers: [
                    TankMySuffixService
                ]
            })
            .overrideTemplate(TankMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TankMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TankMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new TankMySuffix(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.tank).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
