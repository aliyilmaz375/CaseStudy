package com.casestudy.pages;


import com.casestudy.utilities.Driver;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import java.net.MalformedURLException;

public class LoginPage {
    public LoginPage() throws MalformedURLException {
        PageFactory.initElements(new AppiumFieldDecorator(Driver.get()),this);
    }
    @AndroidFindBy(id = "com.getir.casestudy.dev:id/usernameEditText")
    public WebElement userName;
    @AndroidFindBy(id = "com.getir.casestudy.dev:id/passwordEditText")
    public WebElement passWord;
    @AndroidFindBy(id = "com.getir.casestudy.dev:id/loginButton")
    public WebElement submitButton;
    @AndroidFindBy(id="com.getir.casestudy.dev:id/ga_toolbar_leftIconImageView")
    public WebElement profileMenu;
}
