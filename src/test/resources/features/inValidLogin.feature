@negativelogin
Feature: Negative Login

Scenario Outline: TC_02 user signes up with inValid credentials


    Given  user click username button
    Then uer enter  "<username>"
    And user click password button
    And user enter "<password>"
    And user click submit button
    And user verifies myprofile button is displayed


    Examples:data For negative login
    |username           |password         |
    |tmngan@a.com       |lkgegeorge       |
    |sdkf@şfgke         |ertgbfd          |