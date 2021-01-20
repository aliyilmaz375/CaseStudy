package com.casestudy.stepDefinitions;

import com.casestudy.pages.PaymentPage;
import com.casestudy.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.net.MalformedURLException;

public class PaymentStepDef {
    PaymentPage paymentPage = new PaymentPage();

    @Given("user clicks payment button")
    public void user_clicks_payment_button() throws MalformedURLException {
        Driver.get().findElementById("com.getir.casestudy.dev:id/ga_toolbar_getir10GABasketButton").click();
      //  ReusableMethods.waitAndClick(paymentPage.paymentButton,3);
        Driver.get().findElementById("com.getir.casestudy.dev:id/btnCheckout").click();
        //     ReusableMethods.waitAndClick(paymentPage.paymentButton,3);
    }
    @Given("user verifies Amount, Current Adress and Payment Method are displayed")
    public void user_verifies_Amount_Current_Adress_and_Payment_Method_are_displayed() throws MalformedURLException {
        WebElement amountBox = Driver.get().findElementById("com.getir.casestudy.dev:id/tvAmount");
        WebElement addressBox = Driver.get().findElementById("com.getir.casestudy.dev:id/tvAddress");
        WebElement paymentMethod = Driver.get().findElementById("com.getir.casestudy.dev:id/tvPaymentMethod");
        Assert.assertTrue(amountBox.isDisplayed());
        Assert.assertTrue(addressBox.isDisplayed());
        Assert.assertTrue(paymentMethod.isDisplayed());
    }
      //  Assert.assertEquals("Amount isn't displayed",option1,paymentPage.amounttBox.getText());
      //  Assert.assertEquals("Current address isn't displayed",paymentPage.addressBox.getText());
     //   Assert.assertEquals("Payment Method isn't displayed",paymentPage.paymentMethod.getText());
    @Given("user verifies {string}, {string} and {string} are displayed")
    public void user_verifies_and_are_displayed(String option1, String option2, String option3) throws InterruptedException {
         PaymentPage.findLocator(option1);
         PaymentPage.findLocator(option2);
         PaymentPage.findLocator(option3);

    }

    @Then("user clicks orderNow button")
    public void user_clicks_orderNow_button() throws MalformedURLException {
        //   ReusableMethods.waitAndClick(paymentPage.paymentButton,3);
        WebElement orderNow = Driver.get().findElementById("com.getir.casestudy.dev:id/btnCheckout");
        Assert.assertTrue(orderNow.isDisplayed());
    }
}
