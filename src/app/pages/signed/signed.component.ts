import { Component } from '@angular/core';

export interface ESignature {
  FLID: String;
  SentDate: String;
  CompletionDate: String;
  SignType: String;
  AgreementPdf: String;
  AuditTrial: String;
}


const ELEMENT_DATA: ESignature[] = [
  {
    FLID:"02103",
    SentDate:"12/12/2020",
    CompletionDate:"12/12/2020",
    SignType:"eSign",
    AgreementPdf:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    AuditTrial:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    FLID:"02103",
    SentDate:"12/12/2020",
    CompletionDate:"12/12/2020",
    SignType:"eSign",
    AgreementPdf:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    AuditTrial:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    FLID:"02103",
    SentDate:"12/12/2020",
    CompletionDate:"12/12/2020",
    SignType:"eSign",
    AgreementPdf:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    AuditTrial:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    FLID:"02103",
    SentDate:"12/12/2020",
    CompletionDate:"12/12/2020",
    SignType:"eSign",
    AgreementPdf:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    AuditTrial:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    FLID:"02103",
    SentDate:"12/12/2020",
    CompletionDate:"12/12/2020",
    SignType:"eSign",
    AgreementPdf:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    AuditTrial:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
];

@Component({
  selector: 'app-signed',
  templateUrl: './signed.component.html',
  styleUrls: ['./signed.component.scss']
})
export class SignedComponent {
displayedColumns: string[] =[ 'FLID', 'SentDate', 'CompletionDate', 'SignType', 'AgreementPdf', 'AuditTrial']
  dataSource = ELEMENT_DATA;
  openAuditLink(auditLink: string) {
    window.open(auditLink, '_blank');
  }
  openAgreementLink(agreementLink: string) {
    window.open(agreementLink, '_blank');
  }
}
