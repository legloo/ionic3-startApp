# ionic3-startApp
ionic3,adnroid,ios,url schemes

## Dependencies
- import { Platform } from 'ionic-angular';
- import { AppAvailability } from '@ionic-native/app-availability';
- import { InAppBrowser } from '@ionic-native/in-app-browser';
- cordova-plugin:com.lampa.startapp

## Installation
> Install: npm install @ionic-native/app-availability
>
> Install: npm install @ionic-native/in-app-browser
>
> Install: cordova plugin add add com.lampa.startapp
>

# ANDROID
- use com.lampa.startapp

# IOS
- use APP url scheme && InAppBrowser

# IOS Issues
first,you shoud add 
```bash
<access origin="*" />
<allow-navigation href="*" />
```
into your config.xml && /platform/ios/myappname/config.xml both;

next,Xcode myapp info add LSApplicationQueriesSchemes<Array> = ['url scheme']
