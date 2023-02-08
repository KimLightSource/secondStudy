import {Component, EventEmitter, Inject, inject, Injectable, Input, OnInit, Output, ProviderToken} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {INFORMATION} from "../MyType";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {
  @Input() visible1! : boolean;  //받는 역할
  @Output() sendMyEvent : EventEmitter<any> = new EventEmitter(); // 보내는 역할
  id = new FormControl(''); //폼 컨트롤러 클래스
  pwd = new FormControl('', [Validators.required, Validators.minLength(4)]); //폼 컨트롤러 클래스
  private message: any;

  styleArray = {'wrong_id': false, 'wrong_pwd': false};

  constructor(@Inject("sending_name") my_type : INFORMATION) {
    console.log(my_type)
  }
    ngOnInit(): void{ }

    tryToLogin() : void {
      if (this.id.value == 'admin' && this.pwd.value == '1234') {
        alert('로그인합니다!')
        this.visible1 = true;
        this.sendMyEvent.emit(this.visible1); //앱 컴포넌트에 전달
      } else if (this.id.value != 'admin') {
        this.setMessage = 'wrong id'
        this.styleArray.wrong_id = true;
        this.styleArray.wrong_pwd = false;
      }else if (this.pwd.value != '1234') {
        this.setMessage = 'wrong pwd'
        this.styleArray.wrong_id = false;
        this.styleArray.wrong_pwd = true;
      }
      console.log(this.pwd.status);
    }

  set setMessage(arg:any){
    this.message = arg;
  }
    get getMessage(): any{
      return this.message
    }



}
