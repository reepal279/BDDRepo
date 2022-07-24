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
formatter.before({
  "duration": 20011948800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "amazon site",
  "description": "",
  "id": "amazon-site;amazon-site",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "open amazon links",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "get a title of page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "get a all page top links",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.open_amazon_links()"
});
formatter.result({
  "duration": 393354600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.get_a_title_of_page()"
});
formatter.result({
  "duration": 11561783400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.get_a_all_page_top_links()"
});
formatter.result({
  "duration": 377875300,
  "status": "passed"
});
formatter.after({
  "duration": 2135290700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "sign-in to your account",
  "description": "",
  "id": "amazon-site;sign-in-to-your-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "enter emailadress\"\u003cemail\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "click on continue",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "entre \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "verify your profile",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "amazon-site;sign-in-to-your-account;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 17,
      "id": "amazon-site;sign-in-to-your-account;;1"
    },
    {
      "cells": [
        "saumypatel18374@gmail.com",
        "Qwerty@1289"
      ],
      "line": 18,
      "id": "amazon-site;sign-in-to-your-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 24178513400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
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
  "line": 12,
  "name": "enter emailadress\"saumypatel18374@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "click on continue",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "entre \"Qwerty@1289\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "verify your profile",
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
  "duration": 5968300,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"pages.SigninPage.login()\" because \"this.signinPage\" is null\r\n\tat StepDefination.SigninStepDefination.enter_emailadress(SigninStepDefination.java:20)\r\n\tat ✽.Given enter emailadress\"saumypatel18374@gmail.com\"(C:/Selenium_workSpace/amazon/src/main/java/feature/login.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SigninStepDefination.click_on_continue()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "SigninStepDefination.verify_your_profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1996288000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "search for Lenovo Thinkpad T480 laptop",
  "description": "",
  "id": "amazon-site;search-for-lenovo-thinkpad-t480-laptop",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "search for \"\u003cLaptopName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "select \"\u003cbrand\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "select 14\" to 14.9\" display size",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "select Quad core Number of CPU cores",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "select  \"\u003cRAM size\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on Lenovo Thinkpad T480 laptop",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "go to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "verify your added product is correct or not",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "click on proceed to checkout",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "amazon-site;search-for-lenovo-thinkpad-t480-laptop;",
  "rows": [
    {
      "cells": [
        "LaptopName",
        "brand",
        "RAM size"
      ],
      "line": 34,
      "id": "amazon-site;search-for-lenovo-thinkpad-t480-laptop;;1"
    },
    {
      "cells": [
        "Thinkpad",
        "lenovo",
        "16 GB"
      ],
      "line": 35,
      "id": "amazon-site;search-for-lenovo-thinkpad-t480-laptop;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22449271000,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "search for Lenovo Thinkpad T480 laptop",
  "description": "",
  "id": "amazon-site;search-for-lenovo-thinkpad-t480-laptop;;2",
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
  "line": 23,
  "name": "search for \"Thinkpad\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "select \"lenovo\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "select 14\" to 14.9\" display size",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "select Quad core Number of CPU cores",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "select  \"16 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on Lenovo Thinkpad T480 laptop",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "go to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "verify your added product is correct or not",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "click on proceed to checkout",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Thinkpad",
      "offset": 12
    }
  ],
  "location": "AddtocartStepDefination.search_for(String)"
});
formatter.result({
  "duration": 1417800,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"pages.AddtocartPage.search()\" because \"this.addtocartPage\" is null\r\n\tat StepDefination.AddtocartStepDefination.search_for(AddtocartStepDefination.java:26)\r\n\tat ✽.Given search for \"Thinkpad\"(C:/Selenium_workSpace/amazon/src/main/java/feature/login.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "lenovo",
      "offset": 8
    }
  ],
  "location": "AddtocartStepDefination.select1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 7
    },
    {
      "val": " to 14.9",
      "offset": 10
    }
  ],
  "location": "AddtocartStepDefination.select_display_size(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddtocartStepDefination.select_Quad_core_Number_of_CPU_cores()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "16 GB",
      "offset": 9
    }
  ],
  "location": "AddtocartStepDefination.select(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "480",
      "offset": 26
    }
  ],
  "location": "AddtocartStepDefination.click_on_Lenovo_Thinkpad_T_laptop(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddtocartStepDefination.add_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddtocartStepDefination.go_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddtocartStepDefination.verify_your_added_product_is_correct_or_not()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddtocartStepDefination.click_on_proceed_to_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 250950900,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.141.5\u0027, revision: \u0027d54ebd709a\u0027, time: \u00272018-11-06T11:42:16\u0027\nSystem info: host: \u0027RS\u0027, ip: \u0027172.20.10.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 102.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220705093820, moz:geckodriverVersion: 0.30.0, moz:headless: false, moz:processID: 23380, moz:profile: C:\\Users\\reepa\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, moz:windowless: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0d2e86d4-3736-4584-827c-87aa39d11d4d\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat testBase.TestBase.closebrowser(TestBase.java:78)\r\n\tat StepDefination.LoginStepDefination.quit(LoginStepDefination.java:49)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat myRunner.Runner.feature(Runner.java:31)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 10273060600,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Go to gift ideas",
  "description": "",
  "id": "amazon-site;go-to-gift-ideas",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "go to gift ideas",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "get a title of a page",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "get catogery under who are you shopping for",
  "keyword": "Then "
});
formatter.match({
  "location": "GiftIdeaStepDefination.go_to_gift_ideas()"
});
formatter.result({
  "duration": 503719900,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.141.5\u0027, revision: \u0027d54ebd709a\u0027, time: \u00272018-11-06T11:42:16\u0027\nSystem info: host: \u0027RS\u0027, ip: \u0027172.20.10.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 102.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220705093820, moz:geckodriverVersion: 0.30.0, moz:headless: false, moz:processID: 35000, moz:profile: C:\\Users\\reepa\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, moz:windowless: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 33987dbb-c750-4a0c-b20b-eeaa57065002\n*** Element info: {Using\u003dlink text, value\u003dGift Ideas}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pages.GiftideaPage.clickongift(GiftideaPage.java:11)\r\n\tat StepDefination.GiftIdeaStepDefination.go_to_gift_ideas(GiftIdeaStepDefination.java:22)\r\n\tat ✽.Given go to gift ideas(C:/Selenium_workSpace/amazon/src/main/java/feature/login.feature:40)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GiftIdeaStepDefination.get_a_title_of_a_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GiftIdeaStepDefination.get_catogery_under_who_are_you_shopping_for()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 6742200,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.141.5\u0027, revision: \u0027d54ebd709a\u0027, time: \u00272018-11-06T11:42:16\u0027\nSystem info: host: \u0027RS\u0027, ip: \u0027172.20.10.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 102.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220705093820, moz:geckodriverVersion: 0.30.0, moz:headless: false, moz:processID: 35000, moz:profile: C:\\Users\\reepa\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, moz:windowless: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 33987dbb-c750-4a0c-b20b-eeaa57065002\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat testBase.TestBase.closebrowser(TestBase.java:78)\r\n\tat StepDefination.LoginStepDefination.quit(LoginStepDefination.java:49)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat myRunner.Runner.feature(Runner.java:31)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
});