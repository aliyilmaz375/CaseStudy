@logout
Feature: Log Out
  Background: User Logs in
    Given user logs in
  Scenario: TC_03 User logs out
    Given user click my profile button
    And user click log out button
