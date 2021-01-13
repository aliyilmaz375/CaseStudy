package com.getir.stepDefinitions;


import com.getir.pages.LoginPage;
import com.getir.utilities.ReusableMethods;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import java.net.MalformedURLException;

public class InValidStepDef {

    LoginPage inValid = new LoginPage();

    public InValidStepDef() throws MalformedURLException {
    }
    @Given("user click username button")
    public void user_click_username_button() {
        ReusableMethods.waitAndClick(inValid.userName,3);
    }

    @Then("uer enter  {string}")
    public void uer_enter(String username) {
       ReusableMethods.waitAndSendText(inValid.userName,username,3);
    }

    @Then("user click password button")
    public void user_click_password_button() {
       ReusableMethods.waitAndClick(inValid.passWord,3);
    }

    @Then("user enter {string}")
    public void user_enter(String password) {
      ReusableMethods.waitAndSendText(inValid.passWord,password,3);
    }

    @Then("user click submit button")
    public void user_click_submit_button() {
     ReusableMethods.waitAndClick(inValid.submitButton,3);
    }
    @Then("user verifies myprofile button is displayed")
    public void user_verifies_myprofile_button_is_displayed() {
        Assert.assertTrue(inValid.profileMenu.isDisplayed());
    }


}
