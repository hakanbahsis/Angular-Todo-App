import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isUpdateFormActive:boolean=false;
 work:string="";
 updateWork:string="";
 index:number=0;
 works:string[]=["Deneme1","Deneme2","Deneme3"];

 save(){
  this.works.push(this.work);
  this.work="";
 }

 remove(index:number){
  let result:boolean=confirm("kaydı silmek istiyor musun?");
  if (result){
    this.works.splice(index,1);
  }
 }

 get(work:string,index:number){
  this.updateWork=work;
  this.index=index;
  this.isUpdateFormActive=true;
 }

 update(){
  this.works[this.index]=this.updateWork;
  this.cancel();
 }

 cancel(){
  this.isUpdateFormActive=false;
 }

 changeInputClas(){
  if(this.work.length<3){
    return " is-invalid"
  }
  return " is-valid"
 }
}
