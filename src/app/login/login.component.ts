import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // for(var i =1;i<5;i++){
    //   setTimeout(function(){
    //     for(var j=1;j<=100;j++){
    //       console.log(j);
    //     }
    //   },i*2000)
    // }
    for(var i = 1; i<=100;i++){
      print(i);
    }
    function print(i){
      setTimeout(function(){
        console.log(i)
      },i*2000);

    }
  }

}
