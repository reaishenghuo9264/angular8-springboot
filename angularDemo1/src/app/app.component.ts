import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularDemo1';

  public font:string="14";
  
  public arr:Array<any>=[
    {name:"虫族",age:200},
    {name:"人族",age:23 },
    {name:"神族",age:2000}
  ];

  public status:number=4;





  public isShow:boolean= true;
  //点击事件控制是否为true
  public toggleShow():void{
    this.isShow = !this.isShow;
  }




public class:{};
public canSave : boolean=true;
public isUnchanged : boolean=true;
public isSpecial : boolean=true;

  setClass(){
    this.class={
      'saveable': this.canSave,
      'modified': this.isUnchanged,
      'special': this.isSpecial
    };
  }



  public currentStyles: {}
  public canSave1:boolean=false;
  public isUnchanged1:boolean=false;
  public isSpecial1:boolean=false;
  setCurrentStyles() {    
      this.currentStyles = {        
          'font-style':  this.canSave1 ? 'italic' : 'normal', 
          'font-weight': !this.isUnchanged1 ? 'bold'   : 'normal',
          'font-size':   this.isSpecial1    ? '36px'   : '12px'    };}
  



public currentRace:any={name:"随机种族"};




public currentTime:Date =new Date;










}
