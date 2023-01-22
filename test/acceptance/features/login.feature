Feature: Login
  As a user
  I want the possibility to authenticate myself
  So that my saved routines are showing

  Scenario: Initial visibility of the login page
    Given I open the App the first time with the baseURL
    Then input 'loginMail' should be visible
    And input 'loginPassword' should be visible
    And button 'loginButton' should be visible

  Scenario: Show user the signup page if he clicks on the appropriate link
    Given I am on the Login page
    When the user clicks on the link with id 'redirectToSignup'
    Then input 'signupMail' should be visible
    And input 'signupPassword' should be visible
    And button 'signupButton' should be visible

  Scenario: Authenticate user if he inserts correct credentials on the login page
    Given I am on the Login page
    When the user inputs 'gostner.emanuel@gmail.com' for the 'loginMail' field
    And the user inputs '123' for the 'loginPassword' field
    And the user clicks on the 'loginButton' button
    Then the 'routineOverview' component should be visible
    And the 'userRoutines' component should contain routines or the message 'So much empty...'
