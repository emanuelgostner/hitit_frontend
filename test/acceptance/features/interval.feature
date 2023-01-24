Feature: Add Interval
  As a user
  I want the possibility to add intervals to a routine
  I want the possibility to define a title for the interval
  I want the possibility to define a duration for the interval
  I want the possibility to define the rest for the interval
  I want the possibility to define repetitions for the interval
  I want the possibility to save the interval

  Scenario: User adds an interval to a newly created routine with title, duration, rest and repetitions
    Given I am on the Routine Detail page of a newly created routine
    When the user clicks on the 'newInterval' button
    And the user inputs 'interval title' for the 'intervalTitle' field
    And the user inputs '10' for the 'intervalDuration' field
    And the user inputs '5' for the 'intervalRest' field
    And the user inputs '1' for the 'intervalRepetitions' field
    And the user clicks on the 'intervalSave' button
    Then the 'intervalCardTitle' component should not contain 'intervalTitle'
    And the 'intervalCardDuration' component should not contain '10'
    And the 'intervalCardRest' component should not contain '5'
    And the 'intervalCardRepetitions' component should not contain '1'


