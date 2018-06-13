import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { MeterReadingMySuffix } from './meter-reading-my-suffix.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<MeterReadingMySuffix>;

@Injectable()
export class MeterReadingMySuffixService {

    private resourceUrl =  SERVER_API_URL + 'pond/api/meter-readings';

    constructor(private http: HttpClient, private dateUtils: JhiDateUtils) { }

    create(meterReading: MeterReadingMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(meterReading);
        return this.http.post<MeterReadingMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(meterReading: MeterReadingMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(meterReading);
        return this.http.put<MeterReadingMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<MeterReadingMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<MeterReadingMySuffix[]>> {
        const options = createRequestOption(req);
        return this.http.get<MeterReadingMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<MeterReadingMySuffix[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: MeterReadingMySuffix = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<MeterReadingMySuffix[]>): HttpResponse<MeterReadingMySuffix[]> {
        const jsonResponse: MeterReadingMySuffix[] = res.body;
        const body: MeterReadingMySuffix[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to MeterReadingMySuffix.
     */
    private convertItemFromServer(meterReading: MeterReadingMySuffix): MeterReadingMySuffix {
        const copy: MeterReadingMySuffix = Object.assign({}, meterReading);
        copy.readingDate = this.dateUtils
            .convertDateTimeFromServer(meterReading.readingDate);
        return copy;
    }

    /**
     * Convert a MeterReadingMySuffix to a JSON which can be sent to the server.
     */
    private convert(meterReading: MeterReadingMySuffix): MeterReadingMySuffix {
        const copy: MeterReadingMySuffix = Object.assign({}, meterReading);

        copy.readingDate = this.dateUtils.toDate(meterReading.readingDate);
        return copy;
    }
}
