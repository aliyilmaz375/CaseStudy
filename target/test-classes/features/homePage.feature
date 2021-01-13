@homepage
Feature: Option Selection
  Background: : TC_01 User Logs in
    Given user logs in
  Scenario Outline: TC_02 User selects an option
  Given user select an "<option>" from options
    And user adds it to cart
    Then user verifies the product
    Examples: Test Data
      |option        |
      |Yiyecek       |
      |Süt & Kahvaltı|
      |Bebek         |


  Scenario: TC_03 User removes all products
    Given user removes all products




