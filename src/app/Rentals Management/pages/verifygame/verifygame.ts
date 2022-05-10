import { Component, ElementRef, OnInit } from '@angular/core';
import { LoadingController, ModalController, AlertController, NavController } from '@ionic/angular';
import { NailaService } from '../../services/naila.service';

import { Browser } from '@capacitor/browser';
import { Utils } from '../../services/utils.service';

import { ViewChild } from '@angular/core';
import { NgxWheelComponent } from 'ngx-wheel';
import { AlertServiceService } from 'src/app/common-services/alert-service.service';
@Component({
  selector: 'app-verifygame',
  templateUrl: './verifygame.html',
  styleUrls: ['./verifygame.scss'],
})


export class verifygamePage  {
  
    constructor(private alertController:AlertController,
      private apiSvc:NailaService,
      private utils:Utils,
      private alertService: AlertServiceService,
    
      ) {
  
      }
      @ViewChild('myCanvas') myCanvas: ElementRef;


      colors = ["#923B94", "#FDFB01", "#FB5C6D", "#7DD3FC", "#A87B4B",
        "#4DF600", "#4851FE", "#A87B4B", "#4DF600",
        "#58FCFF"];
      restaraunts = ["0", "32", "15", "19",
        "4", "21", "2", "25",
        "17", "34"];
    
      startAngle = 0;
      arc = 2 * Math.PI / 10;
      spinTimeout = null;
    
      spinArcStart = 10;
      spinTime = 0;
      spinTimeTotal = 0;
    
      ctx;
    
      spinAngleStart;
    
    
    
      ngOnInit() {
    
      }
    
      ngAfterViewInit(): void {
        this.draw();
      }
    
    
    
      draw() {
        this.drawRouletteWheel();
      }
    
      drawRouletteWheel() {
        var canvas = document.getElementById("wheelcanvas");
    
        var outsideRadius = 140;
        var textRadius = 120;
        var insideRadius = 25;
    
        this.ctx = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
        this.ctx.clearRect(0, 0, 500, 500);
    
    
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;
    
        this.ctx.font = 'bold 12px sans-serif';
    
        for (var i = 0; i < 10; i++) {
          var angle = this.startAngle + i * this.arc;
          this.ctx.fillStyle = this.colors[i];
    
          this.ctx.beginPath();
          this.ctx.arc(150, 150, outsideRadius, angle, angle + this.arc, false);
          this.ctx.arc(150, 150, insideRadius, angle + this.arc, angle, true);
          this.ctx.stroke();
          this.ctx.fill();
    
          this.ctx.save();
          this.ctx.shadowOffsetX = -1;
          this.ctx.shadowOffsetY = -1;
          this.ctx.shadowBlur = 0;
          //this.ctx.shadowColor   = "rgb(220,220,220)";
          this.ctx.fillStyle = "white";
          this.ctx.translate(150 + Math.cos(angle + this.arc / 2) * textRadius, 150 + Math.sin(angle + this.arc / 2) * textRadius);
          this.ctx.rotate(angle + this.arc / 2 + Math.PI / 2);
          var text = this.restaraunts[i];
          this.ctx.fillText(text, -this.ctx.measureText(text).width / 2, 0);
          this.ctx.restore();
        }
    
        //Arrow
        this.ctx.fillStyle = "black";
        this.ctx.beginPath();
        this.ctx.moveTo(150 - 4, 150 - (outsideRadius + 5));
        this.ctx.lineTo(150 + 4, 150 - (outsideRadius + 5));
        this.ctx.lineTo(150 + 4, 150 - (outsideRadius - 5));
        this.ctx.lineTo(150 + 9, 150 - (outsideRadius - 5));
        this.ctx.lineTo(150 + 0, 150 - (outsideRadius - 13));
        this.ctx.lineTo(150 - 9, 150 - (outsideRadius - 5));
        this.ctx.lineTo(150 - 4, 150 - (outsideRadius - 5));
        this.ctx.lineTo(150 - 4, 150 - (outsideRadius + 5));
        this.ctx.fill();
      }
    
      spin() {
        this.spinAngleStart = Math.random() * 10 + 10;
        this.spinTime = 0;
        this.spinTimeTotal = Math.random() * 3 + 4 * 1000;
        this.rotateWheel();
      }
    
      rotateWheel() {
        this.spinTime += 30;
        if (this.spinTime >= this.spinTimeTotal) {
          this.stopRotateWheel();
          return;
        }
        var spinAngle = this.spinAngleStart - this.easeOut(this.spinTime, 0, this.spinAngleStart, this.spinTimeTotal);
        this.startAngle += (spinAngle * Math.PI / 180);
        this.drawRouletteWheel();
        this.spinTimeout = setTimeout(() => {
          this.rotateWheel();
        }, 30);
      }
    
      stopRotateWheel() {
        clearTimeout(this.spinTimeout);
        var degrees = this.startAngle * 180 / Math.PI + 100;
        var arcd = this.arc * 180 / Math.PI;
        var index = Math.floor((360 - degrees % 360) / arcd);
        this.ctx.save();
        this.ctx.font = 'bold 30px sans-serif';
        var text = this.restaraunts[index]
        //this.ctx.fillText(text, 150 - this.ctx.measureText(text).width / 2, 150 + 10);
        console.log("You got:\n" + text);
        this.alertService.presentAlert("", text);
        this.ctx.restore();
      }
    
      // t: current time
      // b: start value
      // c: change in value
      // d: duration
    
      easeOut(t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    }

    
    
  
}
