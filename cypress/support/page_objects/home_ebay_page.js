/// <reference types="Cypress"/>
import * as hooks from '../hooks';

const URL = 'https://www.ebay.com/';
const ebayField = "//*[@id='gh-ac']";
const buttonSearch = "//*[@id='gh-btn']";
const productInfo = "headset";
const resultItem = "Bluetooth";
const firstNameField = "firstname"; 
const lastNameField = "//*[@id='lastname']";
const buttonRegister = "//*[@id='gh-ug-flex']";
const screenRegister = "//*[@id='gh']";
const nameText = "Harry";
const LastNameText = "Thurderman";

export function firstPage() {
    cy.visit(URL);
    cy.xpath(ebayField).should('be.visible')
    hooks.geraLog('Ebay page is working correctly')
}

export function searchOperation() {
    cy.xpath(ebayField).type(productInfo, { force: true })
    cy.xpath(buttonSearch).click({ force: true })
    hooks.geraLog('Product search is executed')
}

export function resultValidation() {
    cy.wait(8000)
    cy.contains(resultItem).should('be.visible')
    hooks.geraLog('Product result is confirmed')
}

export function registerValidation() {
    cy.xpath(buttonRegister).should('be.visible')
    hooks.geraLog('Register option is confirmed')
}

export function clickOnRegister() {
    cy.xpath(buttonRegister).click({ force: true })
    hooks.geraLog('Register Button is clicked')
}

export function createAccountScreenVal() {
    cy.wait(6000)
    cy.xpath(screenRegister).should('be.visible')
    hooks.geraLog('Create Account Screen is confirmed')
}

export function detailsValidation() {
    cy.contains(firstNameField).should('be.visible')
    hooks.geraLog('achei')
    cy.xpath(firstNameField).type(nameText, { force: true })
    hooks.geraLog('First name executed successfully')
    cy.xpath(lastNameField).type(LastNameText, { force: true })
    hooks.geraLog('Last name executed successfully')
}