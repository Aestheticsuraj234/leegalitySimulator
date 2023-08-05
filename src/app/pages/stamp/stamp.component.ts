import { Component } from '@angular/core';

export interface ESignature {
  Blocked: String;
  Denomination: String;
  Purpose: String;
  Reserved: String;
  SeriesNo: String;
  State: String;
  Total : String;
  UnderProcess:String;
  Unused:String;
  Used:String;
}


const ELEMENT_DATA: ESignature[] = [
  {
    Blocked:"0",
    Denomination:"100.00",
    Purpose:"Stamp Duty",
    Reserved:"0",
    SeriesNo:"1",
    State:"Maharashtra",
    Total:"100",
    UnderProcess:"0",
    Unused:"100",
    Used:"0"

  },
  {
    Blocked:"0",
    Denomination:"100.00",
    Purpose:"Stamp Duty",
    Reserved:"0",
    SeriesNo:"1",
    State:"Maharashtra",
    Total:"100",
    UnderProcess:"0",
    Unused:"100",
    Used:"0"

  },
  {
    Blocked:"0",
    Denomination:"100.00",
    Purpose:"Stamp Duty",
    Reserved:"0",
    SeriesNo:"1",
    State:"Maharashtra",
    Total:"100",
    UnderProcess:"0",
    Unused:"100",
    Used:"0"

  },
  {
    Blocked:"0",
    Denomination:"100.00",
    Purpose:"Stamp Duty",
    Reserved:"0",
    SeriesNo:"1",
    State:"Maharashtra",
    Total:"100",
    UnderProcess:"0",
    Unused:"100",
    Used:"0"

  },
  {
    Blocked:"0",
    Denomination:"100.00",
    Purpose:"Stamp Duty",
    Reserved:"0",
    SeriesNo:"1",
    State:"Maharashtra",
    Total:"100",
    UnderProcess:"0",
    Unused:"100",
    Used:"0"

  },
];

@Component({
  selector: 'app-stamp',
  templateUrl: './stamp.component.html',
  styleUrls: ['./stamp.component.scss']
})
export class StampComponent {
  displayedColumns: string[] =[ 'Blocked', 'Denomination', 'Purpose', 'Reserved', 'SeriesNo', 'State', 'Total', 'UnderProcess', 'Unused', 'Used']
  dataSource = ELEMENT_DATA;
  openAuditLink(auditLink: string) {
    window.open(auditLink, '_blank');
  }
  openAgreementLink(agreementLink: string) {
    window.open(agreementLink, '_blank');
  }
}
