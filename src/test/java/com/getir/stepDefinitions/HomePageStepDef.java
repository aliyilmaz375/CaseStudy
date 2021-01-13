package com.getir.stepDefinitions;

import com.getir.pages.HomePage;
import com.getir.utilities.Driver;
import com.getir.utilities.ReusableMethods;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import javax.swing.*;
import java.net.MalformedURLException;

public class HomePageStepDef {
 HomePage homePage = new HomePage();

    public HomePageStepDef() throws MalformedURLException {
    }
    @Given("user log in")
    public void user_log_in() throws MalformedURLException {
        ReusableMethods.loginGetir();
    }
    @Given("user select an {string} from options")
    public void user_select_an_from_options(String option) throws InterruptedException {
        Thread.sleep(3000);
        HomePage.selectionSelect(option);

    }
    public void clickElementByJS(WebElement element) throws MalformedURLException {
        JavascriptExecutor jsExecutor = ((JavascriptExecutor) Driver.get());
        jsExecutor.executeScript("arguments[0].click();", element);
    }

  // JScript commandlar i ile de actions ile de denedim ama maalesef sadece bu sekilde buldu elementleri.
    @Given("user adds it to cart")
    public void user_adds_it_to_cart() throws InterruptedException, MalformedURLException {
        Thread.sleep(3000);
    //    clickElementByJS(homePage.arttirmaButonu);
        Driver.get().findElementById("com.getir.casestudy.dev:id/btnAdd").click();
    //   Actions actions = new Actions(Driver.get());
    //   actions.moveToElement(homePage.arttirmaButonu).click().perform();
    //    Driver.get().findElementByAndroidUIAutomator("resource-id(\"com.getir.casestudy.dev:id/btnAdd\")");
    }

    @Then("user verifies the product")
    public void user_verifies_the_product() throws InterruptedException, MalformedURLException {

        ReusableMethods.sepetiDogrula();

    }
    @Given("user removes all products")
    public void user_removes_all_products() throws InterruptedException, MalformedURLException {

      ReusableMethods.waitAndClick(homePage.sepeteEkle,3);
      for(int i=0; i<4;i++) {
          ReusableMethods.waitAndClick(homePage.removeButton, 3);
      }

        }
    }



