import { Component } from '@angular/core';

export interface ESignature {
  FLID: String;
  SentDate: String;
  Remarks: String;
  ReportType: String;
}


const ELEMENT_DATA: ESignature[] = [
 {
  FLID:"02103",
  SentDate:"12/12/2020",
  Remarks:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ReportType:"Signed"
 },
 {
  FLID:"02103",
  SentDate:"12/12/2020",
  Remarks:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ReportType:"Signed"
 },
 {
  FLID:"02103",
  SentDate:"12/12/2020",
  Remarks:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ReportType:"Signed"
 },
 {
  FLID:"02103",
  SentDate:"12/12/2020",
  Remarks:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ReportType:"Signed"
 },
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns: string[] = ['FLID', 'SentDate', 'Remarks', 'ReportType']
  dataSource = ELEMENT_DATA;
}
