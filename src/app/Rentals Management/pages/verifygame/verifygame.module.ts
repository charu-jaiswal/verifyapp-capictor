import { ApplicationPageModule } from '../../ApplicationPageModule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateNoticeComponent } from '../../modals/create-notice/create-notice.component';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
// import { NailaAccountPage } from './nailaaccountpage';
import { RefundModalComponent } from '../../modals/refundmodal/refundmodal.component';
import { PrivacyPolicyModalComponent } from '../../modals/privacypolicy/privacypolicy.component';
import { TermsModalComponent } from '../../modals/termsandcondition/termsandcondition.component';
import { verifygamePage } from './verifygame';
import { NgxWheelModule } from 'ngx-wheel';
// import { VerifyloadingextlinkPage } from './verifyloadingextlink';


const routes: Routes = [
  {
    path: '',
    component: verifygamePage
  }
];

@NgModule({
  entryComponents: [],
  imports: [
    CommonModule,
    NgxWheelModule,
    FormsModule,
    ApplicationPageModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    // BarcodeScanner,
    RefundModalComponent,
    PrivacyPolicyModalComponent,
    TermsModalComponent
  ],
  declarations: [verifygamePage,]
})
export class verifygamePageModule { }

