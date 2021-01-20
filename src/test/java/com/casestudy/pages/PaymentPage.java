package com.casestudy.pages;


import com.casestudy.utilities.Driver;
import io.appium.java_client.pagefactory.AndroidFindBy;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import java.net.MalformedURLException;

public class PaymentPage {
    public PaymentPage() {
        try {
            PageFactory.initElements(Driver.get(), this);
        } catch (MalformedURLException e) {

        }

    }

    @AndroidFindBy(id = "com.getir.casestudy.dev:id/btnCheckout")
    public WebElement paymentButton;
    @AndroidFindBy(id = "com.getir.casestudy.dev:id/tvAmount")
    public WebElement amounttBox;
    @AndroidFindBy(id = "com.getir.casestudy.dev:id/tvAddress")
    public WebElement addressBox;
    @AndroidFindBy(id = "com.getir.casestudy.dev:id/tvPaymentMethod")
    public WebElement paymentMethod;
    @AndroidFindBy(id = "com.getir.casestudy.dev:id/btnCheckout")
    public WebElement orderNow;


    public static void findLocator(String option) {
        try {
            WebElement selectOptions = Driver.get().findElement(By.xpath("//*[@text='" + option + "']"));
            Assert.assertTrue(selectOptions.isDisplayed());
        } catch (MalformedURLException e) {

        }
    }
}
