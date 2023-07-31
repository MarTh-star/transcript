import { Component, OnInit } from '@angular/core';
import { IDashboardTable } from '../interfaces/dashboardTable.interface';
import { companyInfo } from '../data/companies';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  title = 'Dashboard';
  tableArray: IDashboardTable[] = [];
  p: number = 1;

  ngOnInit(){
    this.jsonToObject();
  }
 
 
  jsonToObject() {
    companyInfo.forEach((object) => {
      this.tableArray.push(object);
    })
   console.log(this.tableArray);
  }


}
