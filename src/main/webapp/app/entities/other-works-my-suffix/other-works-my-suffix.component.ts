import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { OtherWorksMySuffix } from './other-works-my-suffix.model';
import { OtherWorksMySuffixService } from './other-works-my-suffix.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-other-works-my-suffix',
    templateUrl: './other-works-my-suffix.component.html'
})
export class OtherWorksMySuffixComponent implements OnInit, OnDestroy {
otherWorks: OtherWorksMySuffix[];
    currentAccount: any;
    eventSubscriber: Subscription;
    currentSearch: string;

    constructor(
        private otherWorksService: OtherWorksMySuffixService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private activatedRoute: ActivatedRoute,
        private principal: Principal
    ) {
        this.currentSearch = this.activatedRoute.snapshot && this.activatedRoute.snapshot.params['search'] ?
            this.activatedRoute.snapshot.params['search'] : '';
    }

    loadAll() {
        if (this.currentSearch) {
            this.otherWorksService.search({
                query: this.currentSearch,
                }).subscribe(
                    (res: HttpResponse<OtherWorksMySuffix[]>) => this.otherWorks = res.body,
                    (res: HttpErrorResponse) => this.onError(res.message)
                );
            return;
       }
        this.otherWorksService.query().subscribe(
            (res: HttpResponse<OtherWorksMySuffix[]>) => {
                this.otherWorks = res.body;
                this.currentSearch = '';
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    search(query) {
        if (!query) {
            return this.clear();
        }
        this.currentSearch = query;
        this.loadAll();
    }

    clear() {
        this.currentSearch = '';
        this.loadAll();
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInOtherWorks();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: OtherWorksMySuffix) {
        return item.id;
    }
    registerChangeInOtherWorks() {
        this.eventSubscriber = this.eventManager.subscribe('otherWorksListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
