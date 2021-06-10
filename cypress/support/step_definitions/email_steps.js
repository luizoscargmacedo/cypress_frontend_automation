import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import * as hooks from '../hooks';
import * as homeEmailPage from '../page_objects/home_email_page';

// Validate the Mailbox access
Given(/^already on the email page$/, () => {
    homeEmailPage.emailPage();
});

When(/^Login is executed$/, () => {
    homeEmailPage.loginOperation();
});

Then(/^Mailbox screen is opened$/, () => {
    homeEmailPage.mailBoxValidation();
});


// Email message validation
Given(/^the Mailbox screen is opened$/, () => {
    homeEmailPage.mailBoxValidation();
});

When(/^we confirmed if the email message arrived$/, () => {
    homeEmailPage.messageValidation();
});

Then(/^this test is completed successfully$/, () => {
    homeEmailPage.emailConfirmation();
});