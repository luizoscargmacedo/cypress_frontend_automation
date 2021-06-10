import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import * as homeEbayPage from '../page_objects/home_ebay_page';

// Validate the Ebay search
Given(/^already on ebay page$/, () => {
    homeEbayPage.firstPage();
});

When(/^product search is executed$/, () => {
    homeEbayPage.searchOperation();
});

Then(/^a result page appears$/, () => {
    homeEbayPage.resultValidation();
});

// Validate User Register
Given(/^already on Ebay page$/, () => {
    homeEbayPage.registerValidation();
});

When(/^click on Register button$/, () => {
    homeEbayPage.clickOnRegister();
});

And(/^confirm that Create an Account screen appears$/, () => {
    homeEbayPage.createAccountScreenVal();
});

Then(/^the details and specific page appears correctly$/, () => {
    homeEbayPage.detailsValidation();
});