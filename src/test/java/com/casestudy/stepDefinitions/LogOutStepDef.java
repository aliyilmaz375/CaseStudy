package com.casestudy.stepDefinitions;

import com.casestudy.pages.LogOutPage;
import com.casestudy.utilities.Driver;
import com.casestudy.utilities.ReusableMethods;
import io.cucumber.java.en.Given;

import java.net.MalformedURLException;

public class LogOutStepDef {
    LogOutPage logOut = new LogOutPage();

    public LogOutStepDef() throws MalformedURLException {
    }
    @Given("user logs in")
    public void user_logs_in() throws MalformedURLException {
        ReusableMethods.loginGetir();
    }

    @Given("user click my profile button")
    public void user_click_my_profile_button() throws MalformedURLException, InterruptedException {
       //ReusableMethods.waitAndClick(logOut.profileMenu,3);
        Driver.get().findElementById("com.getir.casestudy.dev:id/ga_toolbar_leftIconImageView").click();
        Thread.sleep(3000);
    }

    @Given("user click log out button")
    public void user_click_log_out_button() throws MalformedURLException {
     // ReusableMethods.waitAndClick(logOut.logOutButton,3);
        Driver.get().findElementByXPath("//*[@text='Log out']").click();
    }



}
