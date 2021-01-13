package com.getir.utilities;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class Driver {
    private Driver() {
    }
    private static AndroidDriver<AndroidElement> driver;
    public static final String USERNAME = "tlinmungan1";
    public static final String AUTOMATE_KEY = "7qPzTorNsr4ximTRAPv7";
    public static final String URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";
    public static AndroidDriver<AndroidElement> get() throws MalformedURLException {
        if (driver==null){
            String platform = ConfigurationReader.get("platform");
            DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
            switch (platform){
                case "android":

                    desiredCapabilities.setCapability("platformName","Android");
                    desiredCapabilities.setCapability("platformVersion","9");
                    desiredCapabilities.setCapability("deviceName","SM-A305F");
                    desiredCapabilities.setCapability("udid","R58M45E9TBB");
                 //   desiredCapabilities.setCapability("appPackage","com.getir.casestudy.dev");
                 //   desiredCapabilities.setCapability("appActivity","com.getir.casestudy.modules.login.ui.LoginActivity");
                    desiredCapabilities.setCapability("app", "C:\\AppiumCucumber\\getir-testing-case-study.apk");
                    try {
                        driver = new AndroidDriver<>(new URL("http://localhost:4723/wd/hub"), desiredCapabilities);
                        Driver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
                    }catch (MalformedURLException e){

                    }
                    break;

                case  "browserStack":


                    desiredCapabilities.setCapability("browserName", "android");
                    desiredCapabilities.setCapability("device", "Samsung Galaxy S10e");
                    desiredCapabilities.setCapability("realMobile", "true");
                    desiredCapabilities.setCapability("os_version", "9.0");
                    desiredCapabilities.setCapability("name", "tulinsFirstAppiumTest");
                    desiredCapabilities.setCapability("app", "bs://79864338b844d6bcaf941ef699a540256146ebf5");

                    try {
                        driver = new AndroidDriver<>(new URL(URL), desiredCapabilities);
                        Driver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
                    }catch (MalformedURLException e){

                    }
                    break;
                default:

            }
        }
        return driver;
    }

   public static void closeDriver() {
       if (driver!=null){
           driver.quit();
           driver=null;
       }
    }
}