import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { LiveStockMySuffix } from './live-stock-my-suffix.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<LiveStockMySuffix>;

@Injectable()
export class LiveStockMySuffixService {

    private resourceUrl =  SERVER_API_URL + 'pond/api/live-stocks';

    constructor(private http: HttpClient, private dateUtils: JhiDateUtils) { }

    create(liveStock: LiveStockMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(liveStock);
        return this.http.post<LiveStockMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(liveStock: LiveStockMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(liveStock);
        return this.http.put<LiveStockMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<LiveStockMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<LiveStockMySuffix[]>> {
        const options = createRequestOption(req);
        return this.http.get<LiveStockMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<LiveStockMySuffix[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: LiveStockMySuffix = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<LiveStockMySuffix[]>): HttpResponse<LiveStockMySuffix[]> {
        const jsonResponse: LiveStockMySuffix[] = res.body;
        const body: LiveStockMySuffix[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to LiveStockMySuffix.
     */
    private convertItemFromServer(liveStock: LiveStockMySuffix): LiveStockMySuffix {
        const copy: LiveStockMySuffix = Object.assign({}, liveStock);
        copy.date = this.dateUtils
            .convertDateTimeFromServer(liveStock.date);
        return copy;
    }

    /**
     * Convert a LiveStockMySuffix to a JSON which can be sent to the server.
     */
    private convert(liveStock: LiveStockMySuffix): LiveStockMySuffix {
        const copy: LiveStockMySuffix = Object.assign({}, liveStock);

        copy.date = this.dateUtils.toDate(liveStock.date);
        return copy;
    }
}
