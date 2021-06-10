@email
Feature: Email
As a user I want to validate a Registration Confirmation Email

@email_login
Scenario: Validate the Mailbox access
Given already on the email page
When Login is executed
Then Mailbox screen is opened

@email_validation
Scenario: Email message validation
Given the Mailbox screen is opened
When we confirmed if the email message arrived
Then this test is completed successfully