import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-app-translate';

  constructor(  public translate:TranslateService
              ){
    /*  this.translate.addLangs(["es","en"]);
      this.translate.setDefaultLang("en");
      this.translate.use("es");

      this.translate.get("APP.NAME").subscribe(res => {
        console.log("get: "+res);
      });


      const res = this.translate.instant("APP.NAME");
      console.log("instant"+res);*/
  }

}
