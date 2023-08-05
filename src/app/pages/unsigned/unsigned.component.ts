import { Component } from '@angular/core';

export interface ESignature {
  FLID: String;
  CreateData: String;
  ExpiryDate: String;
  Remarks: String;

  AuditTrial: String;
}


const ELEMENT_DATA: ESignature[] = [
  {
    FLID: "02103",
    CreateData: "12/12/2020",
    ExpiryDate: "12/12/2020",
    Remarks: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    AuditTrial: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    FLID: "02103",
    CreateData: "12/12/2020",
    ExpiryDate: "12/12/2020",
    Remarks: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    AuditTrial: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    FLID: "02103",
    CreateData: "12/12/2020",
    ExpiryDate: "12/12/2020",
    Remarks: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    AuditTrial: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    FLID: "02103",
    CreateData: "12/12/2020",
    ExpiryDate: "12/12/2020",
    Remarks: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    AuditTrial: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },

];

@Component({
  selector: 'app-unsigned',
  templateUrl: './unsigned.component.html',
  styleUrls: ['./unsigned.component.scss']
})
export class UnsignedComponent {
  displayedColumns: string[] = ['FLID', 'CreateData', 'ExpiryDate', 'Remarks', 'AuditTrial']
  dataSource = ELEMENT_DATA;
  openAuditLink(auditLink: string) {
    window.open(auditLink, '_blank');
  }

}
