import { ApplicationPageModule } from './../../ApplicationPageModule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CreateNoticeComponent } from '../../modals/create-notice/create-notice.component';
import { TellUsifyouBuyitComponent } from '../../modals/tellusifyoubuyit/tellusifyoubuyit.component';
import { CertificateModalComponent } from '../../modals/certificatemodal/certificatemodal.component';
import { Userrole5modalComponent } from '../../modals/userrole5modal/userrole5modal.component';
import { IonicSelectableModule } from 'ionic-selectable';
import { UserroleinfoModalComponent } from '../../modals/userroleinfomodal/userroleinfomodal.component';
// import { QuizModalComponent } from 'src/app/quiz-modal2/quiz-modal.component';
import { HideHeaderDirective } from './../../../hide-header.directive';
import { WarrantycardComponent } from '../../modals/warrantycard/warrantycard.component';
import { PanoimageComponent } from '../../modals/panoimage/panoimage.component';
import { Verifyitproductpage } from './verifyitproductpage';
import { QuizModalComponent } from '../../modals/quiz-modal/quiz-modal.component';
// import { SurpriseModalComponent } from '../../modals/surprisemodal/surprisemodal.component';


const routes: Routes = [
  {
    path: '',
    component: Verifyitproductpage
  }
];
@NgModule({
  entryComponents: [CreateNoticeComponent,TellUsifyouBuyitComponent,WarrantycardComponent,PanoimageComponent, CertificateModalComponent,Userrole5modalComponent,UserroleinfoModalComponent,QuizModalComponent],
  imports: [
    CommonModule,
    IonicSelectableModule,
    FormsModule,
    ApplicationPageModule,
    IonicModule,
    RouterModule.forChild(routes),
    // QuizModalComponent

  ],
  providers: [
    // BarcodeScanner
    TellUsifyouBuyitComponent,WarrantycardComponent,PanoimageComponent, CertificateModalComponent,Userrole5modalComponent,UserroleinfoModalComponent
  ],
  declarations: [PanoimageComponent,WarrantycardComponent,Verifyitproductpage,TellUsifyouBuyitComponent,CertificateModalComponent,Userrole5modalComponent,HideHeaderDirective,
    UserroleinfoModalComponent]
  //declarations: [VerifyitProductInfoPage,TellUsifyouBuyitComponent,WarrantycardComponent,PanoimageComponent, CertificateModalComponent,Userrole5modalComponent,UserroleinfoModalComponent,QuizModalComponent]
})
export class VerifyitProductPageModule { }

