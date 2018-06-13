import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { WaterChangeMySuffix } from './water-change-my-suffix.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<WaterChangeMySuffix>;

@Injectable()
export class WaterChangeMySuffixService {

    private resourceUrl =  SERVER_API_URL + 'pond/api/water-changes';

    constructor(private http: HttpClient, private dateUtils: JhiDateUtils) { }

    create(waterChange: WaterChangeMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(waterChange);
        return this.http.post<WaterChangeMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(waterChange: WaterChangeMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(waterChange);
        return this.http.put<WaterChangeMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<WaterChangeMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<WaterChangeMySuffix[]>> {
        const options = createRequestOption(req);
        return this.http.get<WaterChangeMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<WaterChangeMySuffix[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: WaterChangeMySuffix = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<WaterChangeMySuffix[]>): HttpResponse<WaterChangeMySuffix[]> {
        const jsonResponse: WaterChangeMySuffix[] = res.body;
        const body: WaterChangeMySuffix[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to WaterChangeMySuffix.
     */
    private convertItemFromServer(waterChange: WaterChangeMySuffix): WaterChangeMySuffix {
        const copy: WaterChangeMySuffix = Object.assign({}, waterChange);
        copy.changeDate = this.dateUtils
            .convertDateTimeFromServer(waterChange.changeDate);
        return copy;
    }

    /**
     * Convert a WaterChangeMySuffix to a JSON which can be sent to the server.
     */
    private convert(waterChange: WaterChangeMySuffix): WaterChangeMySuffix {
        const copy: WaterChangeMySuffix = Object.assign({}, waterChange);

        copy.changeDate = this.dateUtils.toDate(waterChange.changeDate);
        return copy;
    }
}
