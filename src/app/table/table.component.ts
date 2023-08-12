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
      object.fiscalquarter = object.fiscalquarter.substring(0, object.fiscalquarter .length - 2);
      object.fiscalyear = object.fiscalyear.substring(0, object.fiscalyear .length - 2);
      this.tableArray.push(object);
    })
   console.log(this.tableArray);
  }


}
