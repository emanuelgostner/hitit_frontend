Feature: Shopping Cart
    As a customer
    I want to be able to add and remove items from my shopping cart
    So that I can manage my desired purchases before checking out

    Scenario: Adding a product to the shopping cart
        Given I am on the product listing page
        When I click the "Add to cart" button for the "Laptop" product
        Then the "Laptop" product should be in my shopping cart
        And the total cost of my shopping cart should be 1200