import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { TempMeterMySuffix } from './temp-meter-my-suffix.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<TempMeterMySuffix>;

@Injectable()
export class TempMeterMySuffixService {

    private resourceUrl =  SERVER_API_URL + 'pond/api/temp-meters';

    constructor(private http: HttpClient, private dateUtils: JhiDateUtils) { }

    create(tempMeter: TempMeterMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(tempMeter);
        return this.http.post<TempMeterMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(tempMeter: TempMeterMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(tempMeter);
        return this.http.put<TempMeterMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<TempMeterMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<TempMeterMySuffix[]>> {
        const options = createRequestOption(req);
        return this.http.get<TempMeterMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<TempMeterMySuffix[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: TempMeterMySuffix = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<TempMeterMySuffix[]>): HttpResponse<TempMeterMySuffix[]> {
        const jsonResponse: TempMeterMySuffix[] = res.body;
        const body: TempMeterMySuffix[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to TempMeterMySuffix.
     */
    private convertItemFromServer(tempMeter: TempMeterMySuffix): TempMeterMySuffix {
        const copy: TempMeterMySuffix = Object.assign({}, tempMeter);
        copy.readingDate = this.dateUtils
            .convertDateTimeFromServer(tempMeter.readingDate);
        return copy;
    }

    /**
     * Convert a TempMeterMySuffix to a JSON which can be sent to the server.
     */
    private convert(tempMeter: TempMeterMySuffix): TempMeterMySuffix {
        const copy: TempMeterMySuffix = Object.assign({}, tempMeter);

        copy.readingDate = this.dateUtils.toDate(tempMeter.readingDate);
        return copy;
    }
}
