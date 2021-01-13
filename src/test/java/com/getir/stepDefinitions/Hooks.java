package com.getir.stepDefinitions;

import com.getir.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.net.MalformedURLException;


public class Hooks {

  @Before
  public void setUp(){
  }

  @After
  public void tearDown(Scenario scenario) throws MalformedURLException {
  //  final byte[] screenshot=((TakesScreenshot) Driver.get().getScreenshotAs(OutputType.BYTES));
    if (scenario.isFailed()) {
  //    scenario.attach(screenshot, "image/png","screenshots");
    }
  //  Driver.closeDriver();
  }

}
