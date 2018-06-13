import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { OtherWorksMySuffix } from './other-works-my-suffix.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<OtherWorksMySuffix>;

@Injectable()
export class OtherWorksMySuffixService {

    private resourceUrl =  SERVER_API_URL + 'pond/api/other-works';

    constructor(private http: HttpClient, private dateUtils: JhiDateUtils) { }

    create(otherWorks: OtherWorksMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(otherWorks);
        return this.http.post<OtherWorksMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(otherWorks: OtherWorksMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(otherWorks);
        return this.http.put<OtherWorksMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<OtherWorksMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<OtherWorksMySuffix[]>> {
        const options = createRequestOption(req);
        return this.http.get<OtherWorksMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<OtherWorksMySuffix[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: OtherWorksMySuffix = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<OtherWorksMySuffix[]>): HttpResponse<OtherWorksMySuffix[]> {
        const jsonResponse: OtherWorksMySuffix[] = res.body;
        const body: OtherWorksMySuffix[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to OtherWorksMySuffix.
     */
    private convertItemFromServer(otherWorks: OtherWorksMySuffix): OtherWorksMySuffix {
        const copy: OtherWorksMySuffix = Object.assign({}, otherWorks);
        copy.date = this.dateUtils
            .convertDateTimeFromServer(otherWorks.date);
        return copy;
    }

    /**
     * Convert a OtherWorksMySuffix to a JSON which can be sent to the server.
     */
    private convert(otherWorks: OtherWorksMySuffix): OtherWorksMySuffix {
        const copy: OtherWorksMySuffix = Object.assign({}, otherWorks);

        copy.date = this.dateUtils.toDate(otherWorks.date);
        return copy;
    }
}
