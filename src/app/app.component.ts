import { Component } from '@angular/core';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'senga';

  constructor(){
    this.initializeApp();
  }

  initializeApp(){
    // SplashScreen.hide();

    App.addListener('backButton', ({ canGoBack }) => {
      if(canGoBack){
        window.history.back();
      } else {
        App.exitApp();
      }
    });
  }
}
