# Imperative
Feature: Routines with intervalls
    
    Background: 
        Given the user opens the application with the baseURL
        And the component "loginComponent" is visible
        And the user clicks on the button "closeLogin"
        Then the component "routinesOverview" is visible
    

    Scenario: Add interval to new routine
        When the user clicks on the Button "newRoutine"
        And the component "routineDetail" is visible
        When the user clicks on the Button "newInterval"
        And the user fills <title> into the field "intervalTitle"
        And the user fills <duration> into the field "intervalDuration"
        And the user fills <rest> into the field "intervalRest"
        And the user fills <reps> into the field "intervalRepetitions" 
        And the user clicks on the Button "intervalSave"
        Then the component "intervalContainer" is visible
        And the component "intervalItem-<id>" contains follwing visible fields with text. title: <title>, duration: <duration>, rest: <rest>, reps: <reps>

        Examples:
            |   title              |   duration  |   rest    |   reps   | id |
            |   first Interval    |   10        |   4       |   3      | 1 |
            |   second Interval   |   12        |   4       |   3      | 2 |
            |   third Interval    |   5         |   0       |   1      | 3 |
        
    Scenario: Delete interval
        When the user clicks on the Button "newRoutine"
        And the component "routineDetail" is visible
        And the user clicks on the Button "newInterval"
        And the user clicks on the Button "closeDrawer"
        When the user clicks on the Button "closeDrawer" in the component "intervalItem-1"
        Then the component "intervalItem-1" is not visible