import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

declare type MyType = {
  text: any;
  number: any;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  builder: FormBuilder;
  rows: FormArray;
  formGrp: FormGroup;
  single: FormControl;

  constructor(fb: FormBuilder) { //FormBuilder를 주입받습니다.
    this.builder = fb;
    this.rows = this.builder.array([]); //주입받은 FormBuilder를 통해서 배열 형태로 값을 담을 변수 생성
    this.single = new FormControl('Title', Validators.required); //1개의 데이터에 바인딩할 대상
    this.formGrp = this.builder.group({'row_data':this.rows, 'single_data': this.single});
  }
  ngOnInit():void {
    for (let i = 0; i < 10; i++) {
      let group = this.builder.group({ //배열에 담을 그룹을 생성
        text : this.builder.control('abcd'+i, Validators.minLength(5)), //control함수는 FormControl을 만드는 역할을 합니다.
        number: this.builder.control(i, Validators.required)
      });
      this.rows.push(group);
    }
  }

  showData(arg?: any) {  //화면에서 데이터를 볼 함수
    if (arg) {
      console.log(arg);
    } else {
      console.log(this.formGrp);
    }
  }

}
