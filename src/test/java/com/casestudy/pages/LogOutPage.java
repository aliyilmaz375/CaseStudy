package com.casestudy.pages;


import com.casestudy.utilities.Driver;
import io.appium.java_client.pagefactory.AndroidFindBy;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import java.net.MalformedURLException;

public class LogOutPage {
    public LogOutPage() throws MalformedURLException {
        PageFactory.initElements(Driver.get(),this);
    }
    @AndroidFindBy(id="com.getir.casestudy.dev:id/ga_toolbar_leftIconImageView")
    public WebElement profileMenu;
    @AndroidFindBy(xpath = "//*[@text='Log out']")
    public WebElement logOutButton;

}
