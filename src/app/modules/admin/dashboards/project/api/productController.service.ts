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


import { Product } from '../model/product';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import {Observable} from "rxjs";


@Injectable({providedIn: 'root'})
export class ProductControllerService {

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
     * @param productId
     * @param name
     * @param ingredients
     * @param category
     * @param subCategory
     * @param price
     * @param available
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE1(productId?: number, name?: string, ingredients?: string, category?: 'ANTIPASTI' | 'PRIMI' | 'SECONDI' | 'CONTORNI' | 'DOLCI' | 'BEVANDE', subCategory?: string, price?: number, available?: boolean, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteUsingDELETE1(productId?: number, name?: string, ingredients?: string, category?: 'ANTIPASTI' | 'PRIMI' | 'SECONDI' | 'CONTORNI' | 'DOLCI' | 'BEVANDE', subCategory?: string, price?: number, available?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteUsingDELETE1(productId?: number, name?: string, ingredients?: string, category?: 'ANTIPASTI' | 'PRIMI' | 'SECONDI' | 'CONTORNI' | 'DOLCI' | 'BEVANDE', subCategory?: string, price?: number, available?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteUsingDELETE1(productId?: number, name?: string, ingredients?: string, category?: 'ANTIPASTI' | 'PRIMI' | 'SECONDI' | 'CONTORNI' | 'DOLCI' | 'BEVANDE', subCategory?: string, price?: number, available?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {








        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (productId !== undefined && productId !== null) {
            queryParameters = queryParameters.set('productId', <any>productId);
        }
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (ingredients !== undefined && ingredients !== null) {
            queryParameters = queryParameters.set('ingredients', <any>ingredients);
        }
        if (category !== undefined && category !== null) {
            queryParameters = queryParameters.set('category', <any>category);
        }
        if (subCategory !== undefined && subCategory !== null) {
            queryParameters = queryParameters.set('subCategory', <any>subCategory);
        }
        if (price !== undefined && price !== null) {
            queryParameters = queryParameters.set('price', <any>price);
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

        return this.httpClient.delete<any>(`${this.basePath}/api/v1/product/delete`,
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
    public retrieveAllUsingGET1(observe?: 'body', reportProgress?: boolean): Observable<Array<Product>>;
    public retrieveAllUsingGET1(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Product>>>;
    public retrieveAllUsingGET1(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Product>>>;
    public retrieveAllUsingGET1(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<Product>>(`${this.basePath}/api/v1/product/findall`,
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
     * @param productId
     * @param name
     * @param ingredients
     * @param category
     * @param subCategory
     * @param price
     * @param available
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveUsingPOST1(productId?: number, name?: string, ingredients?: string, category?: 'ANTIPASTI' | 'PRIMI' | 'SECONDI' | 'CONTORNI' | 'DOLCI' | 'BEVANDE', subCategory?: string, price?: number, available?: boolean, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public saveUsingPOST1(productId?: number, name?: string, ingredients?: string, category?: 'ANTIPASTI' | 'PRIMI' | 'SECONDI' | 'CONTORNI' | 'DOLCI' | 'BEVANDE', subCategory?: string, price?: number, available?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public saveUsingPOST1(productId?: number, name?: string, ingredients?: string, category?: 'ANTIPASTI' | 'PRIMI' | 'SECONDI' | 'CONTORNI' | 'DOLCI' | 'BEVANDE', subCategory?: string, price?: number, available?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public saveUsingPOST1(productId?: number, name?: string, ingredients?: string, category?: 'ANTIPASTI' | 'PRIMI' | 'SECONDI' | 'CONTORNI' | 'DOLCI' | 'BEVANDE', subCategory?: string, price?: number, available?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {








        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (productId !== undefined && productId !== null) {
            queryParameters = queryParameters.set('productId', <any>productId);
        }
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (ingredients !== undefined && ingredients !== null) {
            queryParameters = queryParameters.set('ingredients', <any>ingredients);
        }
        if (category !== undefined && category !== null) {
            queryParameters = queryParameters.set('category', <any>category);
        }
        if (subCategory !== undefined && subCategory !== null) {
            queryParameters = queryParameters.set('subCategory', <any>subCategory);
        }
        if (price !== undefined && price !== null) {
            queryParameters = queryParameters.set('price', <any>price);
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

        return this.httpClient.post<any>(`${this.basePath}/api/v1/product/save`,
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
     * @param productId
     * @param name
     * @param ingredients
     * @param category
     * @param subCategory
     * @param price
     * @param available
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPUT1(productId?: number, name?: string, ingredients?: string, category?: 'ANTIPASTI' | 'PRIMI' | 'SECONDI' | 'CONTORNI' | 'DOLCI' | 'BEVANDE', subCategory?: string, price?: number, available?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Product>;
    public updateUsingPUT1(productId?: number, name?: string, ingredients?: string, category?: 'ANTIPASTI' | 'PRIMI' | 'SECONDI' | 'CONTORNI' | 'DOLCI' | 'BEVANDE', subCategory?: string, price?: number, available?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Product>>;
    public updateUsingPUT1(productId?: number, name?: string, ingredients?: string, category?: 'ANTIPASTI' | 'PRIMI' | 'SECONDI' | 'CONTORNI' | 'DOLCI' | 'BEVANDE', subCategory?: string, price?: number, available?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Product>>;
    public updateUsingPUT1(productId?: number, name?: string, ingredients?: string, category?: 'ANTIPASTI' | 'PRIMI' | 'SECONDI' | 'CONTORNI' | 'DOLCI' | 'BEVANDE', subCategory?: string, price?: number, available?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {








        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (productId !== undefined && productId !== null) {
            queryParameters = queryParameters.set('productId', <any>productId);
        }
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (ingredients !== undefined && ingredients !== null) {
            queryParameters = queryParameters.set('ingredients', <any>ingredients);
        }
        if (category !== undefined && category !== null) {
            queryParameters = queryParameters.set('category', <any>category);
        }
        if (subCategory !== undefined && subCategory !== null) {
            queryParameters = queryParameters.set('subCategory', <any>subCategory);
        }
        if (price !== undefined && price !== null) {
            queryParameters = queryParameters.set('price', <any>price);
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

        return this.httpClient.put<Product>(`${this.basePath}/api/v1/product/update`,
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
