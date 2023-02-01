import { HttpClient } from '@angular/common/http';
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

  constructor(private api : ServiceService,private route :ActivatedRoute,private http: HttpClient){

  }

  ngOnInit():void{

    this.getdata();

    this.http
      .get<employeData[]>('http://localhost:3000/EmploeeStaff')
      .subscribe((data: employeData[]) => {
        this.countries = data;
        this.allCountries = this.countries;
        // console.log(this.allCountries)
      });
  }

  searchTerm = '';
  countries: employeData[] = [];
  allCountries: employeData[] = [];

  // constructor(private http: HttpClient) {}

  search(value: string): void {
    this.countries = this.allCountries.filter((val) =>
      val.position.toLowerCase().includes(value)
    );
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
