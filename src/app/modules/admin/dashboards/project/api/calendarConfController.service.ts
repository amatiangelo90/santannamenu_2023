/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import {Observable} from "rxjs";

import { CalendarConfiguration } from '../model/calendarConfiguration';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({providedIn: 'root'})
export class CalendarConfControllerService {

    protected basePath = 'https://servicedbacorp741w.com:8444/santannaservice';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * delete
     *
     * @param calendarConfId
     * @param date
     * @param launch
     * @param dinner
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE(calendarConfId?: number, date?: string, launch?: 'OPEN' | 'CLOSE', dinner?: 'OPEN' | 'CLOSE', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteUsingDELETE(calendarConfId?: number, date?: string, launch?: 'OPEN' | 'CLOSE', dinner?: 'OPEN' | 'CLOSE', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteUsingDELETE(calendarConfId?: number, date?: string, launch?: 'OPEN' | 'CLOSE', dinner?: 'OPEN' | 'CLOSE', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteUsingDELETE(calendarConfId?: number, date?: string, launch?: 'OPEN' | 'CLOSE', dinner?: 'OPEN' | 'CLOSE', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (calendarConfId !== undefined && calendarConfId !== null) {
            queryParameters = queryParameters.set('calendarConfId', <any>calendarConfId);
        }
        if (date !== undefined && date !== null) {
            queryParameters = queryParameters.set('date', <any>date);
        }
        if (launch !== undefined && launch !== null) {
            queryParameters = queryParameters.set('launch', <any>launch);
        }
        if (dinner !== undefined && dinner !== null) {
            queryParameters = queryParameters.set('dinner', <any>dinner);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.delete<any>(`${this.basePath}/api/v1/calendarconf/delete`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * retrieveAll
     *
     * @param fromDate fromDate
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public retrieveAllUsingGET(fromDate: string, observe?: 'body', reportProgress?: boolean): Observable<Array<CalendarConfiguration>>;
    public retrieveAllUsingGET(fromDate: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CalendarConfiguration>>>;
    public retrieveAllUsingGET(fromDate: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CalendarConfiguration>>>;
    public retrieveAllUsingGET(fromDate: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (fromDate === null || fromDate === undefined) {
            throw new Error('Required parameter fromDate was null or undefined when calling retrieveAllUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (fromDate !== undefined && fromDate !== null) {
            queryParameters = queryParameters.set('fromDate', <any>fromDate);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Array<CalendarConfiguration>>(`${this.basePath}/api/v1/calendarconf/findall`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * save
     *
     * @param calendarConfId
     * @param date
     * @param launch
     * @param dinner
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveUsingPOST(calendarConfId?: number, date?: string, launch?: 'OPEN' | 'CLOSE', dinner?: 'OPEN' | 'CLOSE', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public saveUsingPOST(calendarConfId?: number, date?: string, launch?: 'OPEN' | 'CLOSE', dinner?: 'OPEN' | 'CLOSE', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public saveUsingPOST(calendarConfId?: number, date?: string, launch?: 'OPEN' | 'CLOSE', dinner?: 'OPEN' | 'CLOSE', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public saveUsingPOST(calendarConfId?: number, date?: string, launch?: 'OPEN' | 'CLOSE', dinner?: 'OPEN' | 'CLOSE', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (calendarConfId !== undefined && calendarConfId !== null) {
            queryParameters = queryParameters.set('calendarConfId', <any>calendarConfId);
        }
        if (date !== undefined && date !== null) {
            queryParameters = queryParameters.set('date', <any>date);
        }
        if (launch !== undefined && launch !== null) {
            queryParameters = queryParameters.set('launch', <any>launch);
        }
        if (dinner !== undefined && dinner !== null) {
            queryParameters = queryParameters.set('dinner', <any>dinner);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.post<any>(`${this.basePath}/api/v1/calendarconf/save`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * update
     *
     * @param calendarConfId
     * @param date
     * @param launch
     * @param dinner
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPUT(calendarConfId?: number, date?: string, launch?: 'OPEN' | 'CLOSE', dinner?: 'OPEN' | 'CLOSE', observe?: 'body', reportProgress?: boolean): Observable<CalendarConfiguration>;
    public updateUsingPUT(calendarConfId?: number, date?: string, launch?: 'OPEN' | 'CLOSE', dinner?: 'OPEN' | 'CLOSE', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CalendarConfiguration>>;
    public updateUsingPUT(calendarConfId?: number, date?: string, launch?: 'OPEN' | 'CLOSE', dinner?: 'OPEN' | 'CLOSE', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CalendarConfiguration>>;
    public updateUsingPUT(calendarConfId?: number, date?: string, launch?: 'OPEN' | 'CLOSE', dinner?: 'OPEN' | 'CLOSE', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (calendarConfId !== undefined && calendarConfId !== null) {
            queryParameters = queryParameters.set('calendarConfId', <any>calendarConfId);
        }
        if (date !== undefined && date !== null) {
            queryParameters = queryParameters.set('date', <any>date);
        }
        if (launch !== undefined && launch !== null) {
            queryParameters = queryParameters.set('launch', <any>launch);
        }
        if (dinner !== undefined && dinner !== null) {
            queryParameters = queryParameters.set('dinner', <any>dinner);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.put<CalendarConfiguration>(`${this.basePath}/api/v1/calendarconf/update`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
