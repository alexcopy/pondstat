import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { DeviceMySuffix } from './device-my-suffix.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<DeviceMySuffix>;

@Injectable()
export class DeviceMySuffixService {

    private resourceUrl =  SERVER_API_URL + 'api/devices';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/devices';

    constructor(private http: HttpClient) { }

    create(device: DeviceMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(device);
        return this.http.post<DeviceMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(device: DeviceMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(device);
        return this.http.put<DeviceMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: string): Observable<EntityResponseType> {
        return this.http.get<DeviceMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<DeviceMySuffix[]>> {
        const options = createRequestOption(req);
        return this.http.get<DeviceMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<DeviceMySuffix[]>) => this.convertArrayResponse(res));
    }

    delete(id: string): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    search(req?: any): Observable<HttpResponse<DeviceMySuffix[]>> {
        const options = createRequestOption(req);
        return this.http.get<DeviceMySuffix[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<DeviceMySuffix[]>) => this.convertArrayResponse(res));
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: DeviceMySuffix = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<DeviceMySuffix[]>): HttpResponse<DeviceMySuffix[]> {
        const jsonResponse: DeviceMySuffix[] = res.body;
        const body: DeviceMySuffix[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to DeviceMySuffix.
     */
    private convertItemFromServer(device: DeviceMySuffix): DeviceMySuffix {
        const copy: DeviceMySuffix = Object.assign({}, device);
        return copy;
    }

    /**
     * Convert a DeviceMySuffix to a JSON which can be sent to the server.
     */
    private convert(device: DeviceMySuffix): DeviceMySuffix {
        const copy: DeviceMySuffix = Object.assign({}, device);
        return copy;
    }
}
