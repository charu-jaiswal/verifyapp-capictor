import * as tslib_1 from "tslib";
import { ApplicationPageModule } from '../../ApplicationPageModule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CreateNoticeComponent } from '../../modals/create-notice/create-notice.component';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
// import { NailasearchPage } from './nailasearchpage';
import { NailaOffersPage } from './nailaofferspage';
var routes = [
    {
        path: '',
        component: NailaOffersPage
    }
];
var NailaOffersPageModule = /** @class */ (function () {
    function NailaOffersPageModule() {
    }
    NailaOffersPageModule = tslib_1.__decorate([
        NgModule({
            entryComponents: [CreateNoticeComponent],
            imports: [
                CommonModule,
                FormsModule,
                ApplicationPageModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            providers: [
            // BarcodeScanner
            ],
            declarations: [NailaOffersPage]
        })
    ], NailaOffersPageModule);
    return NailaOffersPageModule;
}());
export { NailaOffersPageModule };
//# sourceMappingURL=nailaofferspage.module.js.map