import { Component } from '@angular/core';


export interface ESignature {
  ID:String;
  Token:String;
  Status:String;
}

const ELEMENT_DATA: ESignature[] = [
  {
    ID: '1',
    Token: '838e06a2-b702-4334-b177-01759c8c1fed',
    Status: 'Active'
  },
  {
    ID: '1',
    Token: '838e06a2-b702-4334-b177-01759c8c1fed',
    Status: 'Active'
  },
  {
    ID: '1',
    Token: '838e06a2-b702-4334-b177-01759c8c1fed',
    Status: 'Active'
  },
  {
    ID: '1',
    Token: '838e06a2-b702-4334-b177-01759c8c1fed',
    Status: 'Active'
  },

];

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent {
  displayedColumns: string[] = ['ID', 'Token', 'Status']
  dataSource = ELEMENT_DATA;
  openAuditLink(auditLink: string) {
    window.open(auditLink, '_blank');
  }
}
