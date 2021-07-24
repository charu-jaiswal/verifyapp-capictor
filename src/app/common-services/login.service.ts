import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as jsonFile from '../conatants/organization.json';
import { MainAppSetting } from '../conatants/MainAppSetting.js';
import {  HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
const appFor = jsonFile.connectTo;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isProductInfo:boolean=false;

  constructor(
    public navCtrl:NavController,
    public http: HttpClient,
    public appSettings: MainAppSetting,
    public afAuth: AngularFireAuth,   private router: Router,
  ) {
  }
  public appFor = appFor;

  checkPlatform(data): Observable<any> {
    return this.http.post(`${this.appSettings.getApi()}/shared-resource/authentication/common-auth`, data, this.appSettings.getHttpHeades());
  }

  needHelp(data): Observable<any> {
    let API = ''
    if (this.appFor == 'alpha') {
      API = 'https://alpha.thehousemonk.com';
    } else if (this.appFor == 'production') {
      API = 'https://admin.grexter.in';
    }
    return this.http.post(`${API}/shared-resource/webhook/support/email`, data, this.appSettings.getHttpHeades());
  }

  signIn(data): Observable<any> {
    return this.http.post(`${this.appSettings.getApi()}/api/login`, data, this.appSettings.getHttpHeades());
  }

  login(data): Observable<any> {
    return this.http.post(`${this.appSettings.getApi()}/api/v2/login`, data, this.appSettings.getHttpHeades());
  }

  verifyOtp(data): Observable<any> {
    return this.http.post(`${this.appSettings.getApi()}/api/verify-otp`, data, this.appSettings.getHttpHeades());
  }

  sendOtp(data): Observable<any> {
    return this.http.post(`${this.appSettings.getApi()}/api/send-otp`, data, this.appSettings.getHttpHeades());
  }

  reserPassword(data): Observable<any> {
    return this.http.post(`${this.appSettings.getApi()}/api/reset-password`, data, this.appSettings.getHttpHeades());
  }

  verifyPhone(data) {
    console.log("Step 6 --------- verify phone service called----")
    return this.http.post(`${this.appSettings.getApi()}/api/verify-phone`, data, this.appSettings.getHttpHeades());
  }

  userSignup(data: any): Observable<any> {
    return this.http.post(
      `${this.appSettings.getApi()}/api/v1/user/send_otp`,data,this.appSettings.getHttpHeades()
    );



    
  }
  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
    }
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  } 
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result:any) => {
      
        console.log('You have been successfully logged in!' +result.additionalUserInfo.profile.name)
       if (result){
        //  alert('You have been successfully logged in!')
         window.localStorage.setItem('name', result.additionalUserInfo.profile.name);
         if(this.isProductInfo){
          this.isProductInfo=false;
          this.navCtrl.pop();//
          return;
        }
         this.router.navigateByUrl("/verifyit-product-info");
       } 
        // this.router.navigateByUrl("/verifyit-product-info"); //charu

    }).catch((error) => {
        console.log(error)
    })
  }
      confirmOtp(data:any): Observable<any> {
        return this.http.post(
          `${this.appSettings.getApi()}/api/v1/user/verify_otp`,data,this.appSettings.getHttpHeades()
        );
      }


      registerUser(data:any): Observable<any> {
        return this.http.post(
          `${this.appSettings.getApi()}/register?email=${data.email}&signup-as=${data.signupas}&fullname=${data.fullname}&mobile=${data.mobile}&password=${data.password}&repassword=${data.password_confirmation}&gender=${data.gender};`,data,this.appSettings.getHttpHeades()
        );
      }

    

      // "fullname": this.loginData.name,
      // "email": this.loginData.phoneNumber,
      // "password": this.loginData.password,
      // "password_confirmation": this.loginData.passwordCheck,
      // "gender": this.loginData.gender  ,
      // "signup-as":'user',
      // "mobile": this.loginData.mobile
      // registeredUser(data:any): Observable<any> {
      //   return this.http.post(
      //     `${this.appSettings.getApi()}/api/v1/auth/sign_in`,data,this.appSettings.getHttpHeades()
      //   );
      // }


      // registeredUser(data:any): Observable<any> {
      //   return this.http.post(
      //     `${this.appSettings.getApi()}/api/v1/auth/sign_in`,data,this.appSettings.getHttpHeades()
      //   );
      // }


      loginUserInfo(): Observable<any> {

        return this.http.get(`${this.appSettings.getApi()}/login/userinfo`,
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Access-Control-Allow-Credentials': 'true',
              credentials: 'include',
              Authorization: localStorage.getItem('token'),
              
            }),
            
            withCredentials:true,
          }
          );
      }


      


      // registeredUser(id): Observable<any> {

      //   return this.http.get(`${this.appSettings.getApi()}/login?email=${id.email}&password=${id.password}`,
      //     {
      //       headers: new HttpHeaders({
              
      //         'Content-Type': 'application/json',
      //         'Access-Control-Allow-Credentials': 'true',
      //         credentials: 'include',
      //         Authorization: localStorage.getItem('token')
              
      //       }),
      //       withCredentials:true,

      //     }
      //     );
      // }



      registeredUser(data:any): Observable<any> {
        return this.http.post(
          `${this.appSettings.getApi()}/login`,data,this.appSettings.getHttpHeades()
        );
      }

      resendOtp(data:any): Observable<any> {
        return this.http.post(
          `${this.appSettings.getApi()}/api/v1/user/resend_otp`,data,this.appSettings.getHttpHeades()
        );
      }

      // forgotPassword(data)


      forgotPassword(data:any): Observable<any> {
        return this.http.post(
          `${this.appSettings.getApi()}/api/v1/user/reset_password`,data,this.appSettings.getHttpHeades()
        );
      }


      // registerUser(data:any): Observable<any> {
      //   return this.http.post(
      //     `${this.appSettings.getApi()}/api/v1/auth/`,data,this.appSettings.getHttpHeades()
      //   );
      // }
      
}
