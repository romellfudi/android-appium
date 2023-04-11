# TAE Webdriveio Project

### by Romell Freddy Dominguez

[![](https://raw.githubusercontent.com/romellfudi/assets/master/favicon.ico)](https://portfolio.romellfudi.com/)

## Structure

Check the [disneyland.spec.js](test/specs/disneyland.spec.js) file to see the test cases

```bash
├── README.md
├── test
│   ├── pageobjects
│   │   └── disneylandPage.js
│   └── specs
│       └── disneyland.spec.js
├── wdio.conf.js
└── package.json
```

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

## License

[![GNU GPLv3 Image](https://www.gnu.org/graphics/gplv3-127x51.png)](http://www.gnu.org/licenses/gpl-3.0.en.html)

ANDROID-APPIUM is a Free Software: You can use, study share and improve it at your
will. Specifically you can redistribute and/or modify it under the terms of the
[GNU General Public License](https://www.gnu.org/licenses/gpl.html) as
published by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
