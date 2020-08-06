import { Injectable } from '@angular/core';

import {Http, Response } from '@angular/http'

@Injectable()
export class ProductService {

  private _http: Http
  private _albumUrl = '../assets/album.jso'

  constructor(_http) {

  }



}
