$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/payment.feature");
formatter.feature({
  "name": "Payment",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@payment"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC_02 User selects an option",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user select an \"\u003coption\u003e\" from options",
  "keyword": "Given "
});
formatter.step({
  "name": "user adds it to cart",
  "keyword": "And "
});
formatter.step({
  "name": "user verifies the product",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test Data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "option"
      ]
    },
    {
      "cells": [
        "Yiyecek"
      ]
    },
    {
      "cells": [
        "Süt \u0026 Kahvaltı"
      ]
    },
    {
      "cells": [
        "Bebek"
      ]
    }
  ]
});
formatter.background({
  "name": ": TC_01 User logs in",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.getir.stepDefinitions.LogOutStepDef.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_02 User selects an option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@payment"
    }
  ]
});
formatter.step({
  "name": "user select an \"Yiyecek\" from options",
  "keyword": "Given "
});
formatter.match({
  "location": "com.getir.stepDefinitions.HomePageStepDef.user_select_an_from_options(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds it to cart",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.stepDefinitions.HomePageStepDef.user_adds_it_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies the product",
  "keyword": "Then "
});
formatter.match({
  "location": "com.getir.stepDefinitions.HomePageStepDef.user_verifies_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": ": TC_01 User logs in",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.getir.stepDefinitions.LogOutStepDef.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_02 User selects an option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@payment"
    }
  ]
});
formatter.step({
  "name": "user select an \"Süt \u0026 Kahvaltı\" from options",
  "keyword": "Given "
});
formatter.match({
  "location": "com.getir.stepDefinitions.HomePageStepDef.user_select_an_from_options(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds it to cart",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.stepDefinitions.HomePageStepDef.user_adds_it_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies the product",
  "keyword": "Then "
});
formatter.match({
  "location": "com.getir.stepDefinitions.HomePageStepDef.user_verifies_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": ": TC_01 User logs in",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.getir.stepDefinitions.LogOutStepDef.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_02 User selects an option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@payment"
    }
  ]
});
formatter.step({
  "name": "user select an \"Bebek\" from options",
  "keyword": "Given "
});
formatter.match({
  "location": "com.getir.stepDefinitions.HomePageStepDef.user_select_an_from_options(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds it to cart",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.stepDefinitions.HomePageStepDef.user_adds_it_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies the product",
  "keyword": "Then "
});
formatter.match({
  "location": "com.getir.stepDefinitions.HomePageStepDef.user_verifies_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": ": TC_01 User logs in",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.getir.stepDefinitions.LogOutStepDef.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC-03 User goes payment page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@payment"
    }
  ]
});
formatter.step({
  "name": "user clicks payment button",
  "keyword": "Given "
});
formatter.match({
  "location": "com.getir.stepDefinitions.PaymentStepDef.user_clicks_payment_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-VAMO0RC\u0027, ip: \u0027192.168.0.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\AppiumCucumber\\getir-tes..., appPackage: com.getir.casestudy.dev, databaseEnabled: false, desired: {app: C:\\AppiumCucumber\\getir-tes..., deviceName: SM-A305F, platformName: android, platformVersion: 9, udid: R58M45E9TBB}, deviceApiLevel: 28, deviceManufacturer: samsung, deviceModel: SM-A305F, deviceName: R58M45E9TBB, deviceScreenDensity: 420, deviceScreenSize: 1080x2340, deviceUDID: R58M45E9TBB, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 9, statBarHeight: 83, takesScreenshot: true, udid: R58M45E9TBB, viewportRect: {height: 2048, left: 0, top: 83, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 46fdaa8d-fe10-44ba-9817-088a27053f85\n*** Element info: {Using\u003did, value\u003dcom.getir.casestudy.dev:id/btnCheckout}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat com.getir.stepDefinitions.PaymentStepDef.user_clicks_payment_button(PaymentStepDef.java:18)\r\n\tat ✽.user clicks payment button(file:///C:/GetirProject/src/test/resources/features/payment.feature:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user verifies \"Amount\", \"Address\" and \"Payment Method\" are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.stepDefinitions.PaymentStepDef.user_verifies_and_are_displayed(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies Amount, Current Adress and Payment Method are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.stepDefinitions.PaymentStepDef.user_verifies_Amount_Current_Adress_and_Payment_Method_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks orderNow button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.getir.stepDefinitions.PaymentStepDef.user_clicks_orderNow_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});