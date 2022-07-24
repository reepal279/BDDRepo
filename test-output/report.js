$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Selenium_workSpace/amazon/src/main/java/feature/login.feature");
formatter.feature({
  "line": 2,
  "name": "amazon site",
  "description": "",
  "id": "amazon-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "open url",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "open amazon links",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefination.open_amazon_links()"
});
formatter.result({
  "duration": 10421647800,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "amazon site",
  "description": "",
  "id": "amazon-site;amazon-site",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "get a title of page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "get a all page top links",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.get_a_title_of_page()"
});
formatter.result({
  "duration": 12390600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.get_a_all_page_top_links()"
});
formatter.result({
  "duration": 251874500,
  "error_message": "org.openqa.selenium.WebDriverException: TypeError: browsingContext.currentWindowGlobal is null\nBuild info: version: \u00273.141.5\u0027, revision: \u0027d54ebd709a\u0027, time: \u00272018-11-06T11:42:16\u0027\nSystem info: host: \u0027RS\u0027, ip: \u0027192.168.2.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 102.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220705093820, moz:geckodriverVersion: 0.30.0, moz:headless: false, moz:processID: 37300, moz:profile: C:\\Users\\reepa\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, moz:windowless: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: bbdc4122-b73c-443d-b2f9-236cf6cd7d52\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027nav-xshop\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pages.LoginPage.headerLinks(LoginPage.java:25)\r\n\tat StepDefination.LoginStepDefination.get_a_all_page_top_links(LoginStepDefination.java:41)\r\n\tat ✽.Then get a all page top links(C:/Selenium_workSpace/amazon/src/main/java/feature/login.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "sign-in to your account",
  "description": "",
  "id": "amazon-site;sign-in-to-your-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "enter emailadress\"\u003cemail\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "click on continue",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "entre \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "verify your profile",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close the browser.",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "amazon-site;sign-in-to-your-account;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 23,
      "id": "amazon-site;sign-in-to-your-account;;1"
    },
    {
      "cells": [
        "saumypatel18374@gmail.com",
        "Qwerty@1289"
      ],
      "line": 24,
      "id": "amazon-site;sign-in-to-your-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "open url",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "open amazon links",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefination.open_amazon_links()"
});
formatter.result({
  "duration": 10287830200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "sign-in to your account",
  "description": "",
  "id": "amazon-site;sign-in-to-your-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "enter emailadress\"saumypatel18374@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "click on continue",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "entre \"Qwerty@1289\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "verify your profile",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close the browser.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "saumypatel18374@gmail.com",
      "offset": 18
    }
  ],
  "location": "SigninStepDefination.enter_emailadress(String)"
});
formatter.result({
  "duration": 781806100,
  "status": "passed"
});
formatter.match({
  "location": "SigninStepDefination.click_on_continue()"
});
formatter.result({
  "duration": 440378000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qwerty@1289",
      "offset": 7
    }
  ],
  "location": "SigninStepDefination.entre(String)"
});
formatter.result({
  "duration": 1384411000,
  "status": "passed"
});
formatter.match({
  "location": "SigninStepDefination.verify_your_profile()"
});
formatter.result({
  "duration": 65474500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 1489912900,
  "status": "passed"
});
});