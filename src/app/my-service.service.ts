import { Injectable } from '@angular/core';
import {INFORMATION} from "./MyType";

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  public readonly myData : INFORMATION = { // 내가 전달할 데이터
    data1 : 'data',
    data2 : 1433,
    data3 : ['data3_1','data3_2'],
  }

  constructor() { }
}
