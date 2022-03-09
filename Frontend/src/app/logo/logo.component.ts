import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {


  constructor(private service:ApiserviceService) { }
  readData:any;

  ngOnInit(): void {

    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
    });
  }

  //get deleteid
  deleteID(id:any)
  {
    console.log(id,'deleteid==>');
    this.service.deleteData(id).subscribe((res)=>{
      alert("Do you want delete");
      console.log(res,'deleteres==>');
      
      this.service.getAllData().subscribe((res)=>{
        console.log(res,"res==>");
        this.readData = res.data;
      });
    });
  }

 

}
