import { AppAvailability } from '@ionic-native/app-availability';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AlertController, Platform } from 'ionic-angular';

/*
  Generated class for the IndexProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class IndexProvider {

  constructor(
    public aa: AppAvailability,
    public asc: AlertController,
    public iab: InAppBrowser,
    public platfrom: Platform,
  ) {
    console.log('Hello IndexProvider Provider');
  }


    /**
    * 打开其它App
    * @param iosScheme ios的scheme
    * @param iosDownloadUrl ios的下载地址
    * @param androidPackageName android的包名
    * @param androidDownloadUrl android的下载地址
    */
  async launchExternalApp() {
    
    let iosScheme: string = 'wxc46eb78481b81fab://';
    let iosDownloadUrl: string = 'https://www.adddownload.com';

    let androidPackageName: string = 'biz.o2o.app';
    let androidDownloadUrl: string = 'https://www.adddownload.com';
    
    await this.platfrom.ready();
    if (this.platfrom.is('ios')) {
      if (await this.aa.check(iosScheme)) {
        this.iab.create(iosScheme, '_system');
      } else {
        this.iab.create(iosDownloadUrl);
      }
      return;
    };
    if (this.platfrom.is('android')) {
      if (await this.aa.check(androidPackageName)) {
        try {
          let sAPP = window['startApp'].set({
            "application": androidPackageName
          });
          sAPP.start(function () { /* success */
            console.log("OK");
          }, function (error) { /* fail */
            alert(error);
          }, function () { // optional broadcast and forResult callback
            console.log(arguments);
          });
        } catch (e) {
          console.error(e);
        }
      } else {
        this.iab.create(androidDownloadUrl);
      }
      return;
    }
  }
}
