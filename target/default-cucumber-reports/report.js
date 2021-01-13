$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Positive Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.background({
  "name": "User goes to the landing page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_01 User signes up with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "click username button",
  "keyword": "Given "
});
formatter.match({
  "location": "com.getir.stepDefinitions.LoginStepDef.click_username_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username",
  "keyword": "Then "
});
formatter.match({
  "location": "com.getir.stepDefinitions.LoginStepDef.enter_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click password button",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.stepDefinitions.LoginStepDef.click_password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.stepDefinitions.LoginStepDef.enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.stepDefinitions.LoginStepDef.click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies profile button is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.getir.stepDefinitions.LoginStepDef.user_verifies_profile_button_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});