import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignedComponent } from './pages/signed/signed.component';
import { HomeComponent } from './pages/home/home.component';
import { UnsignedComponent } from './pages/unsigned/unsigned.component';
import { TokenComponent } from './pages/token/token.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { StampComponent } from './pages/stamp/stamp.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'signed', component: SignedComponent},
  {path: 'unsigned', component: UnsignedComponent},
  {path: 'token', component: TokenComponent},
  {path: 'wallet', component: WalletComponent},
  {path: 'stamp', component: StampComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
