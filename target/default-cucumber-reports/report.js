$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/inValidLogin.feature");
formatter.feature({
  "name": "Negative Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@negativelogin"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC_02 user signes up with inValid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click username button",
  "keyword": "Given "
});
formatter.step({
  "name": "uer enter  \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user click password button",
  "keyword": "And "
});
formatter.step({
  "name": "user enter \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click submit button",
  "keyword": "And "
});
formatter.step({
  "name": "user verifies myprofile button is displayed",
  "keyword": "And "
});
formatter.examples({
  "name": "data For negative login",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "tmngan@a.com",
        "lkgegeorge"
      ]
    },
    {
      "cells": [
        "sdkf@şfgke",
        "ertgbfd"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC_02 user signes up with inValid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negativelogin"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user click username button",
  "keyword": "Given "
});
formatter.match({
  "location": "com.getir.stepDefinitions.InValidStepDef.user_click_username_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "uer enter  \"tmngan@a.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.getir.stepDefinitions.InValidStepDef.uer_enter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click password button",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.stepDefinitions.InValidStepDef.user_click_password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"lkgegeorge\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.stepDefinitions.InValidStepDef.user_enter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.stepDefinitions.InValidStepDef.user_click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies myprofile button is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.stepDefinitions.InValidStepDef.user_verifies_myprofile_button_is_displayed()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.id: com.getir.casestudy.dev:id/ga_toolbar_leftIconImageView})\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\r\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:59)\r\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.isDisplayed(\u003cgenerated\u003e)\r\n\tat com.getir.stepDefinitions.InValidStepDef.user_verifies_myprofile_button_is_displayed(InValidStepDef.java:44)\r\n\tat ✽.user verifies myprofile button is displayed(file:///C:/GetirProject/src/test/resources/features/inValidLogin.feature:12)\r\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@51ec2df1 (tried for 1 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\r\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:59)\r\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.isDisplayed(\u003cgenerated\u003e)\r\n\tat com.getir.stepDefinitions.InValidStepDef.user_verifies_myprofile_button_is_displayed(InValidStepDef.java:44)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.id: com.getir.casestudy.dev:id/ga_toolbar_leftIconImageView})\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-VAMO0RC\u0027, ip: \u0027192.168.0.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: driver.version: AndroidDriver\r\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\t... 42 more\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshots");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_02 user signes up with inValid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negativelogin"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user click username button",
  "keyword": "Given "
});
formatter.match({
  "location": "com.getir.stepDefinitions.InValidStepDef.user_click_username_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "uer enter  \"sdkf@şfgke\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.getir.stepDefinitions.InValidStepDef.uer_enter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click password button",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.stepDefinitions.InValidStepDef.user_click_password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"ertgbfd\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.stepDefinitions.InValidStepDef.user_enter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.stepDefinitions.InValidStepDef.user_click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies myprofile button is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.stepDefinitions.InValidStepDef.user_verifies_myprofile_button_is_displayed()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.id: com.getir.casestudy.dev:id/ga_toolbar_leftIconImageView})\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\r\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:59)\r\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.isDisplayed(\u003cgenerated\u003e)\r\n\tat com.getir.stepDefinitions.InValidStepDef.user_verifies_myprofile_button_is_displayed(InValidStepDef.java:44)\r\n\tat ✽.user verifies myprofile button is displayed(file:///C:/GetirProject/src/test/resources/features/inValidLogin.feature:12)\r\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@3e1624c7 (tried for 1 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\r\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:59)\r\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.isDisplayed(\u003cgenerated\u003e)\r\n\tat com.getir.stepDefinitions.InValidStepDef.user_verifies_myprofile_button_is_displayed(InValidStepDef.java:44)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.id: com.getir.casestudy.dev:id/ga_toolbar_leftIconImageView})\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-VAMO0RC\u0027, ip: \u0027192.168.0.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: driver.version: AndroidDriver\r\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\t... 42 more\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "screenshots");
formatter.after({
  "status": "passed"
});
});