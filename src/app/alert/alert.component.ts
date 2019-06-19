import { Component, OnInit } from '@angular/core';


interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'success',
  message: 'SUCCESS',
}, {
  type: 'info',
  message: 'INFO',
}, {
  type: 'warning',
  message: 'WARNING',
}, {
  type: 'danger',
  message: 'DANGER',
}, {
  type: 'primary',
  message: 'PRIMARY',
}, {
  type: 'secondary',
  message: 'SECONDARY',
}, {
  type: 'light',
  message: 'LIGHT',
}, {
  type: 'dark',
  message: 'DARK',
}
];


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

    alerts: Alert[];

  constructor() { 
    this.reset();
  }

  close(alert:Alert){
    this.alerts.splice(this.alerts.indexOf(alert), 1);

  }

  reset(){
    this.alerts = Array.from(ALERTS);
  }
  ngOnInit() {
  }

}




