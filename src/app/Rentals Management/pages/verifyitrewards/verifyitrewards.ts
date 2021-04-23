import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { LoadingController, ModalController, AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx'
import * as moment from 'moment';
import { AlertServiceService } from 'src/app/common-services/alert-service.service';
import { CreateNoticeComponent } from '../../modals/create-notice/create-notice.component';
import { translateService } from 'src/app/common-services/translate/translate-service.service';
import { TranslateServiceService } from 'src/app/common-services/translate_/translate-service.service';
import { Storage } from '@ionic/storage';
import { RentalsUserService } from '../../services/rentals-user.service';
import { Device } from '@ionic-native/device/ngx';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ViewChild } from '@angular/core';
import { NailaService } from '../../services/naila.service';
import { RewardmodalfirstComponent } from '../../modals/rewardmodalfirst/rewardmodalfirst.component';
import { Utils } from '../../services/utils.service';
// import { Rewardmodal1Component } from '../../modals/rewardmodal1/rewardmodal1.component';
// import { Slides } from 'ionic-angular';

@Component({
  selector: 'app-verifyitrewards',
  templateUrl: './verifyitrewards.html',
  styleUrls: ['./verifyitrewards.scss'],
})


export class Verifyitrewards {




  constructor(private nailaservice: NailaService, private modalController:ModalController,
    private utils:Utils) {

  }
  searchTerm
  listbanner:any;


  ngOnInit() {
    let data;
    this.nailaservice.getLoyaltyPointByuser(data).subscribe(data => {
    this.listbanner=data;
    this.items=this.listbanner.data
      this.listbanner.data.forEach(element => {
        
        element.name= element.product_name
      });
    console.log(this.listbanner);
    })


    

  }
  items
  setFilteredItems() {
    this.items = this.listbanner.data;
    this.items = this.filterItems(this.searchTerm);
  }

  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }


  async presentModal2(data) {
    this.utils.royaltyData=data
    let modal = await this.modalController.create({
      component: RewardmodalfirstComponent,
      cssClass: "custome-refer-modal",
    });
    return await modal.present();
  }
}