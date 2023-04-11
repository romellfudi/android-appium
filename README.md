# TAE Webdriveio Project

## Usefull commands
```bash
npm i
npm run wdio
npm install appium --save-dev
npm install wdio-appium-service --save-dev
```

## Appium
localhost:4723/wd/hub

## Appium Capabilities in Appium Inspector

```json
{
  "appium:deviceName": "emulator-5554",
  "appium:deviceOrientation": "portrait",
  "appium:appPackage": "com.disney.wdpro.dlr",
  "platformName": "Android",
  "appium:automationName": "uiAutomator2",
  "appium:appActivity": "com.disney.wdpro.park.activities.SplashActivity",
  "appium:platformVersion": "13",
  "appium:waitForIdle": 0,
  "appium:waitForIdleTimeout": 0,
  "appium:noReset": true
}
```

## Appium Capabilities in wdio.conf.js

```js
capabilities: [
    {
      automationName: "uiAutomator2",
      platformName: "Android",
      platformVersion: "13",
      deviceName: "emulator-5554",
      deviceOrientation: "portrait",
      appActivity: "com.disney.wdpro.park.activities.SplashActivity",
      appPackage: "com.disney.wdpro.dlr",
      maxInstances: 1,
      noReset: true,
    },
  ],
```

### by Romell Freddy Dominguez

[![](https://raw.githubusercontent.com/romellfudi/assets/master/favicon.ico)](https://portfolio.romellfudi.com/)
