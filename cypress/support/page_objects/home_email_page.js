/// <reference types="Cypress"/>
import * as hooks from '../hooks';

const URL_EMAIL = 'https://email.bol.uol.com.br/';
const mailService = "//*[@id='wrapper']";
const field_EMAIL = "//*[@id='user']";
const field_PASSWORD = "//*[@id='pass']";
const button_ENTER = "//*[@id='button-submit']";
const emailAddress = "steve.rogers56444@bol.com.br";
const password = "xxxxxxx";
const mailboxScreen = "Caixa de Entrada";
const emailMessage = "Samurai";

export function emailPage() {
    cy.visit(URL_EMAIL);
    cy.xpath(mailService).should('be.visible')
    hooks.geraLog('BOL email page is working correctly')
}

export function loginOperation() {
    cy.xpath(field_EMAIL).type(emailAddress, { force: true })
    hooks.geraLog('USER FIELD validated and Login executed')
    cy.xpath(field_PASSWORD).type(password, { force: true })
    hooks.geraLog('PASSWORD executed and FIELD validated')
    cy.xpath(button_ENTER).click({ force: true })
    cy.wait(3000)
    cy.xpath(button_ENTER).click({ force: true })
    hooks.geraLog('Enter button clicked')
}

export function mailBoxValidation() {
    cy.wait(15000)
    cy.contains(mailboxScreen).should('be.visible')
    hooks.geraLog('Mailbox screen is opened and validated successfully')
    cy.wait(8000)
}

export function messageValidation() {
    cy.contains(emailMessage).should('be.visible')
    hooks.geraLog('Registration Confirmation Message is on Mailbox')
}

export function emailConfirmation() {
    hooks.geraLog('email successfully identified')
}