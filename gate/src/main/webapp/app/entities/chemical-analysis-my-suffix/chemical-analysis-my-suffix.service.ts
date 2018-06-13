import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { ChemicalAnalysisMySuffix } from './chemical-analysis-my-suffix.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<ChemicalAnalysisMySuffix>;

@Injectable()
export class ChemicalAnalysisMySuffixService {

    private resourceUrl =  SERVER_API_URL + 'pond/api/chemical-analyses';

    constructor(private http: HttpClient, private dateUtils: JhiDateUtils) { }

    create(chemicalAnalysis: ChemicalAnalysisMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(chemicalAnalysis);
        return this.http.post<ChemicalAnalysisMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(chemicalAnalysis: ChemicalAnalysisMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(chemicalAnalysis);
        return this.http.put<ChemicalAnalysisMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ChemicalAnalysisMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<ChemicalAnalysisMySuffix[]>> {
        const options = createRequestOption(req);
        return this.http.get<ChemicalAnalysisMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<ChemicalAnalysisMySuffix[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: ChemicalAnalysisMySuffix = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<ChemicalAnalysisMySuffix[]>): HttpResponse<ChemicalAnalysisMySuffix[]> {
        const jsonResponse: ChemicalAnalysisMySuffix[] = res.body;
        const body: ChemicalAnalysisMySuffix[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to ChemicalAnalysisMySuffix.
     */
    private convertItemFromServer(chemicalAnalysis: ChemicalAnalysisMySuffix): ChemicalAnalysisMySuffix {
        const copy: ChemicalAnalysisMySuffix = Object.assign({}, chemicalAnalysis);
        copy.date = this.dateUtils
            .convertDateTimeFromServer(chemicalAnalysis.date);
        return copy;
    }

    /**
     * Convert a ChemicalAnalysisMySuffix to a JSON which can be sent to the server.
     */
    private convert(chemicalAnalysis: ChemicalAnalysisMySuffix): ChemicalAnalysisMySuffix {
        const copy: ChemicalAnalysisMySuffix = Object.assign({}, chemicalAnalysis);

        copy.date = this.dateUtils.toDate(chemicalAnalysis.date);
        return copy;
    }
}
