package com.getir.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;


    @RunWith(Cucumber.class)
    @CucumberOptions(strict = false,
            plugin = {
                    "html:target/default-cucumber-reports",
                    "json:target/json-reports/cucumber.json",
                    "junit:target/xml-report/cucumber.xml"
            },
            //plugin = "html:target\\default-cucumber-reports",
            features ="src/test/resources/features",
            glue = "com/getir/stepDefinitions",



            tags = "@login",

            dryRun = false
    )

    public class GetirRunner {
    }

