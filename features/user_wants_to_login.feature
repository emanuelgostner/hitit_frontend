Feature: Login
    User wants to be able to login into his account

    Scenario: Error on empty fields
        Given Login page is visible
        When I click on 'enter'
        Then field 'email' should be with error
        And field 'password' should be with error
