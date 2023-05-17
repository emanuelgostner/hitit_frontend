# Highly Declarative
Feature: Login
    As a user
    I want the possibility to initially sign up and/or sign into the application with an email and password
    so that I can save and view my data from other devices

    Scenario: Sign in with an existing user
        Given the user opens the application
        When the user logs in with a valid username and password
        Then the user should be successfully authorized in the system

    Scenario: Redirect to signUp
        Given a new user opens the application
        When the user wants to sign up to the application
        Then the user is shown the sign up form


    Scenario: Create a new user 
        Given a new user opens the application
        When the user wants to sign up to the application
        Then the user is shown the sign up form
        When the user fills out the sign up form with valid information
        And submits the form
        Then the user is shown the routines overview 
    
    Scenario: Log in with non existent user
        Given the user opens the application
        When the user logs in with an invalid username and password
        Then the sign in component remains visible

        
