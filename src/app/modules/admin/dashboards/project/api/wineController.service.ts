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

import { Wine } from '../model/wine';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({providedIn: 'root'})
export class WineControllerService {

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
     * @param wineId
     * @param name
     * @param price
     * @param grapes
     * @param gradation
     * @param country
     * @param region
     * @param year
     * @param producer
     * @param wineType
     * @param available
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE4(wineId?: number, name?: string, price?: number, grapes?: string, gradation?: string, country?: string, region?: string, year?: string, producer?: string, wineType?: 'BIANCO' | 'ROSSO' | 'ROSATO' | 'BOLLICINE' | 'CHAMPAGNE', available?: boolean, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteUsingDELETE4(wineId?: number, name?: string, price?: number, grapes?: string, gradation?: string, country?: string, region?: string, year?: string, producer?: string, wineType?: 'BIANCO' | 'ROSSO' | 'ROSATO' | 'BOLLICINE' | 'CHAMPAGNE', available?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteUsingDELETE4(wineId?: number, name?: string, price?: number, grapes?: string, gradation?: string, country?: string, region?: string, year?: string, producer?: string, wineType?: 'BIANCO' | 'ROSSO' | 'ROSATO' | 'BOLLICINE' | 'CHAMPAGNE', available?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteUsingDELETE4(wineId?: number, name?: string, price?: number, grapes?: string, gradation?: string, country?: string, region?: string, year?: string, producer?: string, wineType?: 'BIANCO' | 'ROSSO' | 'ROSATO' | 'BOLLICINE' | 'CHAMPAGNE', available?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {












        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (wineId !== undefined && wineId !== null) {
            queryParameters = queryParameters.set('wineId', <any>wineId);
        }
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (price !== undefined && price !== null) {
            queryParameters = queryParameters.set('price', <any>price);
        }
        if (grapes !== undefined && grapes !== null) {
            queryParameters = queryParameters.set('grapes', <any>grapes);
        }
        if (gradation !== undefined && gradation !== null) {
            queryParameters = queryParameters.set('gradation', <any>gradation);
        }
        if (country !== undefined && country !== null) {
            queryParameters = queryParameters.set('country', <any>country);
        }
        if (region !== undefined && region !== null) {
            queryParameters = queryParameters.set('region', <any>region);
        }
        if (year !== undefined && year !== null) {
            queryParameters = queryParameters.set('year', <any>year);
        }
        if (producer !== undefined && producer !== null) {
            queryParameters = queryParameters.set('producer', <any>producer);
        }
        if (wineType !== undefined && wineType !== null) {
            queryParameters = queryParameters.set('wineType', <any>wineType);
        }
        if (available !== undefined && available !== null) {
            queryParameters = queryParameters.set('available', <any>available);
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

        return this.httpClient.delete<any>(`${this.basePath}/api/v1/wine/delete`,
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
     * export
     *
     * @param wineExports wineExports
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public exportUsingPOST(wineExports?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public exportUsingPOST(wineExports?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public exportUsingPOST(wineExports?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public exportUsingPOST(wineExports?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (wineExports !== undefined && wineExports !== null) {
            queryParameters = queryParameters.set('wineExports', <any>wineExports);
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

        return this.httpClient.post<any>(`${this.basePath}/api/v1/wine/export`,
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
     * retrieveAll
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public retrieveAllUsingGET3(observe?: 'body', reportProgress?: boolean): Observable<Array<Wine>>;
    public retrieveAllUsingGET3(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Wine>>>;
    public retrieveAllUsingGET3(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Wine>>>;
    public retrieveAllUsingGET3(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<Wine>>(`${this.basePath}/api/v1/wine/findall`,
            {
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
     * @param wineId
     * @param name
     * @param price
     * @param grapes
     * @param gradation
     * @param country
     * @param region
     * @param year
     * @param producer
     * @param wineType
     * @param available
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveUsingPOST4(wineId?: number, name?: string, price?: number, grapes?: string, gradation?: string, country?: string, region?: string, year?: string, producer?: string, wineType?: 'BIANCO' | 'ROSSO' | 'ROSATO' | 'BOLLICINE' | 'CHAMPAGNE', available?: boolean, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public saveUsingPOST4(wineId?: number, name?: string, price?: number, grapes?: string, gradation?: string, country?: string, region?: string, year?: string, producer?: string, wineType?: 'BIANCO' | 'ROSSO' | 'ROSATO' | 'BOLLICINE' | 'CHAMPAGNE', available?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public saveUsingPOST4(wineId?: number, name?: string, price?: number, grapes?: string, gradation?: string, country?: string, region?: string, year?: string, producer?: string, wineType?: 'BIANCO' | 'ROSSO' | 'ROSATO' | 'BOLLICINE' | 'CHAMPAGNE', available?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public saveUsingPOST4(wineId?: number, name?: string, price?: number, grapes?: string, gradation?: string, country?: string, region?: string, year?: string, producer?: string, wineType?: 'BIANCO' | 'ROSSO' | 'ROSATO' | 'BOLLICINE' | 'CHAMPAGNE', available?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {












        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (wineId !== undefined && wineId !== null) {
            queryParameters = queryParameters.set('wineId', <any>wineId);
        }
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (price !== undefined && price !== null) {
            queryParameters = queryParameters.set('price', <any>price);
        }
        if (grapes !== undefined && grapes !== null) {
            queryParameters = queryParameters.set('grapes', <any>grapes);
        }
        if (gradation !== undefined && gradation !== null) {
            queryParameters = queryParameters.set('gradation', <any>gradation);
        }
        if (country !== undefined && country !== null) {
            queryParameters = queryParameters.set('country', <any>country);
        }
        if (region !== undefined && region !== null) {
            queryParameters = queryParameters.set('region', <any>region);
        }
        if (year !== undefined && year !== null) {
            queryParameters = queryParameters.set('year', <any>year);
        }
        if (producer !== undefined && producer !== null) {
            queryParameters = queryParameters.set('producer', <any>producer);
        }
        if (wineType !== undefined && wineType !== null) {
            queryParameters = queryParameters.set('wineType', <any>wineType);
        }
        if (available !== undefined && available !== null) {
            queryParameters = queryParameters.set('available', <any>available);
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

        return this.httpClient.post<any>(`${this.basePath}/api/v1/wine/save`,
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
     * @param wineId
     * @param name
     * @param price
     * @param grapes
     * @param gradation
     * @param country
     * @param region
     * @param year
     * @param producer
     * @param wineType
     * @param available
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPUT4(wineId?: number, name?: string, price?: number, grapes?: string, gradation?: string, country?: string, region?: string, year?: string, producer?: string, wineType?: 'BIANCO' | 'ROSSO' | 'ROSATO' | 'BOLLICINE' | 'CHAMPAGNE', available?: boolean, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateUsingPUT4(wineId?: number, name?: string, price?: number, grapes?: string, gradation?: string, country?: string, region?: string, year?: string, producer?: string, wineType?: 'BIANCO' | 'ROSSO' | 'ROSATO' | 'BOLLICINE' | 'CHAMPAGNE', available?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateUsingPUT4(wineId?: number, name?: string, price?: number, grapes?: string, gradation?: string, country?: string, region?: string, year?: string, producer?: string, wineType?: 'BIANCO' | 'ROSSO' | 'ROSATO' | 'BOLLICINE' | 'CHAMPAGNE', available?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateUsingPUT4(wineId?: number, name?: string, price?: number, grapes?: string, gradation?: string, country?: string, region?: string, year?: string, producer?: string, wineType?: 'BIANCO' | 'ROSSO' | 'ROSATO' | 'BOLLICINE' | 'CHAMPAGNE', available?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {












        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (wineId !== undefined && wineId !== null) {
            queryParameters = queryParameters.set('wineId', <any>wineId);
        }
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (price !== undefined && price !== null) {
            queryParameters = queryParameters.set('price', <any>price);
        }
        if (grapes !== undefined && grapes !== null) {
            queryParameters = queryParameters.set('grapes', <any>grapes);
        }
        if (gradation !== undefined && gradation !== null) {
            queryParameters = queryParameters.set('gradation', <any>gradation);
        }
        if (country !== undefined && country !== null) {
            queryParameters = queryParameters.set('country', <any>country);
        }
        if (region !== undefined && region !== null) {
            queryParameters = queryParameters.set('region', <any>region);
        }
        if (year !== undefined && year !== null) {
            queryParameters = queryParameters.set('year', <any>year);
        }
        if (producer !== undefined && producer !== null) {
            queryParameters = queryParameters.set('producer', <any>producer);
        }
        if (wineType !== undefined && wineType !== null) {
            queryParameters = queryParameters.set('wineType', <any>wineType);
        }
        if (available !== undefined && available !== null) {
            queryParameters = queryParameters.set('available', <any>available);
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

        return this.httpClient.put<any>(`${this.basePath}/api/v1/wine`,
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
