import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { employeData } from './employeData';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeStaff';
  datalist : employeData[]=[];

  constructor(private api : ServiceService,private route :ActivatedRoute){

  }

  ngOnInit():void{

    this.getdata();
  }






  getdata(){
    this.api.getAllData()
    .subscribe(res=>{
      this.datalist = res;
      console.log(this.datalist);

      // this.datalist.forEach((a:any)=>{
      //   Object.assign(a,{quantity:1,total:a.price});
      // })

      
    })
  }
}
