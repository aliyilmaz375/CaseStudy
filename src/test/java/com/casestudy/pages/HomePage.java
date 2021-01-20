package com.casestudy.pages;


import com.casestudy.utilities.Driver;
import io.appium.java_client.pagefactory.AndroidFindBy;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import java.net.MalformedURLException;
import java.util.List;

public class HomePage {
    public HomePage() throws MalformedURLException {
        PageFactory.initElements(Driver.get(),this);
    }

    @AndroidFindBy(id = "com.getir.casestudy.dev:id/ga_toolbar_leftIconImageView")
    public WebElement geriButton;
    @AndroidFindBy(xpath = "//*[@text='Ürün 25']")
    public WebElement elementSecimi;
    @AndroidFindBy(xpath = "//*[contains(@text,'Ürün')]")
    public List<WebElement> urunListesi;
    @AndroidFindBy(id = "com.getir.casestudy.dev:id/btnAdd")
    public WebElement arttirmaButonu;


    @AndroidFindBy(xpath= "//*[@resource-id='com.getir.casestudy.dev:id/ga_toolbar_getir10GABasketButton']")
    public WebElement sepeteEkle;
    @AndroidFindBy(id = "com.getir.casestudy.dev:id/tvPrice")
    public WebElement productPrice;
    @AndroidFindBy(xpath = "//*[@resource-id='com.getir.casestudy.dev:id/btnRemove']")
    public WebElement removeButton;


    public static void selectionSelect(String option){
        try {
            WebElement selectOptions = Driver.get().findElement(By.xpath("//*[@text='"+option+"']"));
            selectOptions.click();
        } catch (MalformedURLException e) {

        }
    }

}
