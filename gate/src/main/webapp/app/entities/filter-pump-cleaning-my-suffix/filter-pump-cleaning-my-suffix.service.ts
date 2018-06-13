import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { FilterPumpCleaningMySuffix } from './filter-pump-cleaning-my-suffix.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<FilterPumpCleaningMySuffix>;

@Injectable()
export class FilterPumpCleaningMySuffixService {

    private resourceUrl =  SERVER_API_URL + 'pond/api/filter-pump-cleanings';

    constructor(private http: HttpClient, private dateUtils: JhiDateUtils) { }

    create(filterPumpCleaning: FilterPumpCleaningMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(filterPumpCleaning);
        return this.http.post<FilterPumpCleaningMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(filterPumpCleaning: FilterPumpCleaningMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(filterPumpCleaning);
        return this.http.put<FilterPumpCleaningMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<FilterPumpCleaningMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<FilterPumpCleaningMySuffix[]>> {
        const options = createRequestOption(req);
        return this.http.get<FilterPumpCleaningMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<FilterPumpCleaningMySuffix[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: FilterPumpCleaningMySuffix = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<FilterPumpCleaningMySuffix[]>): HttpResponse<FilterPumpCleaningMySuffix[]> {
        const jsonResponse: FilterPumpCleaningMySuffix[] = res.body;
        const body: FilterPumpCleaningMySuffix[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to FilterPumpCleaningMySuffix.
     */
    private convertItemFromServer(filterPumpCleaning: FilterPumpCleaningMySuffix): FilterPumpCleaningMySuffix {
        const copy: FilterPumpCleaningMySuffix = Object.assign({}, filterPumpCleaning);
        copy.cleaningDate = this.dateUtils
            .convertDateTimeFromServer(filterPumpCleaning.cleaningDate);
        return copy;
    }

    /**
     * Convert a FilterPumpCleaningMySuffix to a JSON which can be sent to the server.
     */
    private convert(filterPumpCleaning: FilterPumpCleaningMySuffix): FilterPumpCleaningMySuffix {
        const copy: FilterPumpCleaningMySuffix = Object.assign({}, filterPumpCleaning);

        copy.cleaningDate = this.dateUtils.toDate(filterPumpCleaning.cleaningDate);
        return copy;
    }
}
