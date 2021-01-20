$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/homePage.feature");
formatter.feature({
  "name": "Option Selection",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@homepage"
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
  "name": ": TC_01 User Logs in",
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
      "name": "@homepage"
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
  "name": ": TC_01 User Logs in",
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
      "name": "@homepage"
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
  "name": ": TC_01 User Logs in",
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
      "name": "@homepage"
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
  "name": ": TC_01 User Logs in",
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
  "name": "TC_03 User removes all products",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@homepage"
    }
  ]
});
formatter.step({
  "name": "user removes all products",
  "keyword": "Given "
});
formatter.match({
  "location": "com.getir.stepDefinitions.HomePageStepDef.user_removes_all_products()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});