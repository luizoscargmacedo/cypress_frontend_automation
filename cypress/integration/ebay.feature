@ebay
Feature: Ebay
As a user I want to find products on Ebay page

@ebay_search
Scenario: Validate the Ebay search
Given already on ebay page
When product search is executed
Then a result page appears

@ebay_user_register
Scenario: Validate User Register
Given already on Ebay page
When click on Register button
And confirm that Create an Account screen appears
Then the details and specific page appears correctly