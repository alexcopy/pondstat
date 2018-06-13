import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { ChemicalsMySuffix } from './chemicals-my-suffix.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<ChemicalsMySuffix>;

@Injectable()
export class ChemicalsMySuffixService {

    private resourceUrl =  SERVER_API_URL + 'pond/api/chemicals';

    constructor(private http: HttpClient, private dateUtils: JhiDateUtils) { }

    create(chemicals: ChemicalsMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(chemicals);
        return this.http.post<ChemicalsMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(chemicals: ChemicalsMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(chemicals);
        return this.http.put<ChemicalsMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ChemicalsMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<ChemicalsMySuffix[]>> {
        const options = createRequestOption(req);
        return this.http.get<ChemicalsMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<ChemicalsMySuffix[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: ChemicalsMySuffix = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<ChemicalsMySuffix[]>): HttpResponse<ChemicalsMySuffix[]> {
        const jsonResponse: ChemicalsMySuffix[] = res.body;
        const body: ChemicalsMySuffix[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to ChemicalsMySuffix.
     */
    private convertItemFromServer(chemicals: ChemicalsMySuffix): ChemicalsMySuffix {
        const copy: ChemicalsMySuffix = Object.assign({}, chemicals);
        copy.date = this.dateUtils
            .convertDateTimeFromServer(chemicals.date);
        return copy;
    }

    /**
     * Convert a ChemicalsMySuffix to a JSON which can be sent to the server.
     */
    private convert(chemicals: ChemicalsMySuffix): ChemicalsMySuffix {
        const copy: ChemicalsMySuffix = Object.assign({}, chemicals);

        copy.date = this.dateUtils.toDate(chemicals.date);
        return copy;
    }
}
