@login
Feature: Positive Login
   Background: User goes to the landing page
  Scenario: TC_01 User signes up with valid credentials

    Given click username button
    Then enter username
    And click password button
    And enter password
    And click submit button
    Then user verifies profile button is displayed