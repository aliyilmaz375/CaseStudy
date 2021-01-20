package com.casestudy.runners;

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
            glue = "com/casestudy/stepDefinitions",



            tags = "@homepage",

            dryRun = false
    )

    public class Runner {
    }

