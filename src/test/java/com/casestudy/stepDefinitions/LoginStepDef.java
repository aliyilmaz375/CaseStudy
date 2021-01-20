package com.casestudy.stepDefinitions;

import com.casestudy.pages.LoginPage;
import com.casestudy.utilities.ConfigurationReader;
import com.casestudy.utilities.ReusableMethods;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import java.net.MalformedURLException;

public class LoginStepDef {
    LoginPage login = new LoginPage();

    public LoginStepDef() throws MalformedURLException {
    }


        @Given("click username button")
        public void click_username_button() {
            ReusableMethods.waitAndClick(login.userName,3);
        }

        @Then("enter username")
        public void enter_username() {
           ReusableMethods.waitAndSendText(login.userName, ConfigurationReader.get("username"),3);}

        @Then("click password button")
        public void click_password_button() {
        ReusableMethods.waitAndClick(login.passWord,3);

        }

        @Then("enter password")
        public void enter_password() {
         ReusableMethods.waitAndSendText(login.passWord,ConfigurationReader.get("password"),3);
        }

        @Then("click submit button")
        public void click_submit_button() {
        ReusableMethods.waitAndClick(login.submitButton,3);
        }

        @Then("user verifies profile button is displayed")
         public void user_verifies_profile_button_is_displayed() {
            Assert.assertTrue(login.profileMenu.isDisplayed());
            System.out.println("tulin"); // first commit

    }
    }

