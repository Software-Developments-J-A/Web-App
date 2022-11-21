import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  actualBusinessName!: string;
  
  constructor(
    private businessService:BusinessService
  ) { }

  ngOnInit(): void {
    this.actualBusinessName=this.businessService.getActualBusiness().name;
  }

  
}
