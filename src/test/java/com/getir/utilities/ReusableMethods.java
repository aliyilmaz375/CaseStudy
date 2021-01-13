package com.getir.utilities;

import com.getir.pages.HomePage;
import com.getir.pages.LogOutPage;
import com.getir.pages.LoginPage;
import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Random;

public class ReusableMethods {

    public static String getScreenshot(String name) throws IOException {
        // naming the screenshot with the current date to avoid duplication
        String date = new SimpleDateFormat("yyyyMMddhhmmss").format(new Date());

        // TakesScreenshot is an interface of selenium that takes the screenshot
        TakesScreenshot ts = (TakesScreenshot) Driver.get();
        File source = ts.getScreenshotAs(OutputType.FILE);
        // full path to the screenshot location
        String target = System.getProperty("user.dir") + "/test-output/Screenshots/" + name + date + ".png";

        File finalDestination = new File(target);
        // save the screenshot to the path given
        FileUtils.copyFile(source, finalDestination);

        return target;
    }
    public static void sepeteEkleRandom() throws MalformedURLException {
        // Rastgele bir urun secip sepete atma metodu
         HomePage homePage = new HomePage();
         Random random = new Random();
         int optionIndex = 1 + random.nextInt(homePage.urunListesi.size()-1);
        homePage.urunListesi.get(optionIndex).click();
     //   homePage.arttirmaButonlari.get(optionIndex).click();
        homePage.sepeteEkle.click();

    }

    public static void sepetiDogrula(){
        try {
            Driver.get().findElementById("com.getir.casestudy.dev:id/ga_toolbar_getir10GABasketButton").click();
        } catch (MalformedURLException e) {

        }
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {

        }
        WebElement image = null;
        try {
            image = Driver.get().findElementById("com.getir.casestudy.dev:id/productImg");
        } catch (MalformedURLException e) {

        }
        Assert.assertTrue(image.isDisplayed());
        try {
            Driver.get().findElementById("com.getir.casestudy.dev:id/ga_toolbar_leftIconImageView").click();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        try {
            Driver.get().findElementById("com.getir.casestudy.dev:id/ga_toolbar_leftIconImageView").click();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }



    public static void loginGetir ()  {
        LoginPage login = null;
        try {
            login = new LoginPage();
        } catch (MalformedURLException e) {

        }
        login.userName.click();
        login.userName.sendKeys(ConfigurationReader.get("username"));
        login.passWord.click();
        login.passWord.sendKeys(ConfigurationReader.get("password"));
        login.submitButton.click();
    }
    public static void logOut() throws MalformedURLException, InterruptedException {
        LogOutPage logOut = new LogOutPage();
        loginGetir();
        Thread.sleep(3000);
        logOut.profileMenu.click();
        Thread.sleep(3000);
        logOut.logOutButton.click();

    }
    public static void wait(int secs) {
        try {
            Thread.sleep(1000 * secs);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public static void waitAndClick(WebElement element, int timeout) {
        for (int i = 0; i < timeout; i++) {
            try {
                element.click();
                return;
            } catch (WebDriverException e) {
                wait(1);
            }
        }
    }
    public static void waitAndSendText(WebElement element,String text, int timeout) {
        for (int i = 0; i < timeout; i++) {
            try {
                element.sendKeys(text);
                return;
            } catch (WebDriverException e) {
                wait(1);
            }
        }
    }

    public static WebElement selectRandomTextFromDropdown(Select select) {
        Random random = new Random();
        List<WebElement> weblist = select.getOptions();
        int optionIndex = 1 + random.nextInt(weblist.size());
        select.selectByIndex(optionIndex);
        return select.getFirstSelectedOption();
    }

    //========Hover Over=====//
    public static void hover(WebElement element) {
        Actions actions = null;
        try {
            actions = new Actions(Driver.get());
        } catch (MalformedURLException e) {

        }
        actions.moveToElement(element).perform();
    }

    public static void waitFor(int sec) {
        try {
            Thread.sleep(sec * 1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }





    }


