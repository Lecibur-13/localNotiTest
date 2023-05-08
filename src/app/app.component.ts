import { Component } from '@angular/core';
import { LocalNotifications, ScheduleOptions } from '@capacitor/local-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    setInterval(this.noitification, 5000);
  }

  noitification(){
    const options:ScheduleOptions = {
      notifications: [
        {
          id:1,
          title:"prueba de notificacion",
          body:"probando una notificiacion para android",
          largeIcon: 'res://drawable/logo',
          smallIcon: 'res://drawable/logo',
        }
      ]
    }

    LocalNotifications.schedule(options);
  }
}
