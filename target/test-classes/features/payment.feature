@payment
Feature: Payment
  Scenario: TC_01 User logs in
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

  Scenario: TC-03 User goes payment page
    Given user clicks payment button
    And user verifies "Amount", "Address" and "Payment Method" are displayed
    And user verifies Amount, Current Adress and Payment Method are displayed
    Then user clicks orderNow button
