# Declarative
Feature: Login
    As a user
    I want the possibility to initially sign up and/or sign into the application with an email and password
    so that I can save and view my data from other devices

    Background:
        Given the user just opens the application
        And the sign in component is visible

    Scenario: Sign in with an existing user
        Given the user has a username 'gostner.emanuel@gmail.com' with password "1234"
        When the user fills out the sign in form with his credentials
        Then the signIn component is not visible anymore
        And the routineOverview component is visible

    Scenario: Redirect to signUp
        When the user clicks on the Link to redirect to the sign up component
        Then the sign up component is visible

    Scenario: Create a new user 
        Given the user clicks on the Link to redirect to the sign up component
        And the sign up component is visible
        When the user "newUser@new.com" inputs his passowrd "123"
        And clicks on the sign up button
        Then the routine overview component is visible
    
    Scenario: Log in with non existent user
        Given the user has a username 'random@random.com' with password "123"
        When the user fills out the sign in form with his credentials
        Then the sign in component is still visible

        
