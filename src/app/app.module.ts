import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './pages/body/body.component';
import { HomeComponent } from './pages/home/home.component';
import { SignedComponent } from './pages/signed/signed.component';
import { UnsignedComponent } from './pages/unsigned/unsigned.component';
import { TokenComponent } from './pages/token/token.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { StampComponent } from './pages/stamp/stamp.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent,
    SignedComponent,
    UnsignedComponent,
    TokenComponent,
    WalletComponent,
    StampComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
