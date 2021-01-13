package com.getir.stepDefinitions;

import com.getir.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.Augmenter;

import java.io.File;
import java.net.MalformedURLException;


public class Hooks {

  @Before
  public void setUp(){
  }

  @After
  public void tearDown(Scenario scenario) throws MalformedURLException {

    WebDriver augmentedDriver= new Augmenter().augment(Driver.get());
    final byte[] screenshot = ((TakesScreenshot) augmentedDriver).getScreenshotAs(OutputType.BYTES);
    if (scenario.isFailed()) {
     scenario.attach(screenshot, "image/png","screenshots");
    }
      Driver.closeDriver();
  }

}
