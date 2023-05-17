# Declarative
Feature: Routine management
    As a user
    I want the possibility to create, delete, update routines and view them grouped by personal and public

    Background:
        Given the user just opens the application
        And the sign in component is visible
        
    
    Scenario: Existing user with saved routines sees his saved routines
        Given the user "gostner.emanuel@gmail.com" with his password "1234" enters his credentials
        And the user submits
        And the routine overview component is visible
        Then the users routines list contains at least one routine
    
    Scenario: Show public routines
        Given the user closes the log in component
        And the routine overview component is visible
        Then the public routines list contains at least one routine
    
    Scenario: Private routines for unauthorized user
        Given the user closes the log in component
        And the routine overview component is visible
        Then the private routines list contains no routines
    
    Scenario: Create new routine
        Given the user closes the log in component
        And the routine overview component is visible
        When the user adds a new routine
        And the user enters a title for his new routine
        And submits the new routine
        Then the routines overview should be visible
        And the newly create routine is visible in the private routines list