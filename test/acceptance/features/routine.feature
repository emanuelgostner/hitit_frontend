Feature: Create routine
  As a user
  I want the possibility to create a routine
  I want the possibility to add a title to the routine
  I want the possibility to delete the routine
  I want the possibility to start a routine

  Scenario: User clicks on the Button to create a new Routine
    Given I am on the Routine Overview page
    When the user clicks on the 'newRoutine' button
    Then the 'routineDetail' component should be visible

  Scenario: want the possibility to add a title to the routine
    Given I am on the Routine Detail page of a newly created routine
    When the user inputs 'Hello World' for the 'routineTitleInput' field
    And the user clicks on the 'drawerBack' button
    Then the 'userRoutines' component should contain the content 'Hello World'

  Scenario: want the possibility to delete a routine
    Given I am on the Routine Detail page of a newly created routine with the title '123456789'
    When the user clicks on the 'deleteRoutine' button
    Then the 'userRoutines' component should not contain '123456789'

  Scenario: want the possibility to start a routine
    Given I am on the Routine Detail page of a newly created routine
    When the user clicks on the 'startRoutine' button
    Then the 'routineStart' component should be visible
