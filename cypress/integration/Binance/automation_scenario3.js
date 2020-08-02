/// <reference types="cypress" />


/*
1. Scenario 3:
   1. Verify on the top navigation bar "Spot" list has following values :
        Basic, Classic, Advance, OTC, P2P
   2. Make sure the "ETH/USDT" ticker price changes constantly
*/

describe('TESTING ASSIGNMENT 1 SCENARIO 3', () => {

    beforeEach(() => {
      cy.visit('https://www.binance.com/en/markets')
    })

    // Verify on the top navigation bar "Spot" list has following values :
    // Basic, Classic, Advance, OTC, P2P
    it('Verify on the top navigation bar', () => {

        cy.get(':nth-child(5) > .hoverstatus').click()
        cy.wait(5000)
        cy.get('.css-yu8bgj > #ba-BasicCONVERT').children().contains('Basic')
        cy.get('.css-yu8bgj > #ba-Basic').children().contains('Classic')
        cy.get('.css-yu8bgj > #ba-Advanced').children().contains('Advance')
        cy.get('.css-yu8bgj > #ba-OTC').children().contains('OTC')
        cy.get('.css-yu8bgj > #ba-titile2-1').children().contains('P2P')

        cy.log('ALLAH HU AKBAR');

    })


    // Make sure the "ETH/USDT" ticker price changes constantly 
    it('Make sure the "ETH/USDT" ticker price changes constantly', () => {

        // TODO Put in loop to check multiple time
        cy.get('#marketpair-1-3 > .css-5h0skw').next().children().eq(0).invoke('text').then((text) => {
            cy.log('Price:' + text)
            cy.wait(5000)
            cy.get('#marketpair-1-3 > .css-5h0skw').next().children().eq(0).invoke('text').then((text2) => {
                cy.log('Changed Price:' + text2)
                assert.notEqual(text,text2)
            });
        });

        cy.log('ALLAH HU AKBAR');
    })
})