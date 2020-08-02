/// <reference types="cypress" />


/*
1. Scenario 2:
   1. Select ETH on "ALTS Markets" filter
   1. Verify that pair column is sorted with all ETH values
   1. Select USSD on "FIAT Markets" filter
   1. Verify that  pair column is sorted with all USSD values
   1. And ALTS Markets filter default value is reset to "All"
*/

describe('TESTING ASSIGNMENT 1 SCENARIO 2', () => {
    beforeEach(() => {
      cy.visit('https://www.binance.com/en/markets')
    })

    // Select ETH on "ALTS Markets" filter
    // Verify that pair column is sorted with all ETH values
    it('Select ETH on "ALTS Markets" filter and Verify Sorting', () => {

        // Select ETH on "ALTS Markets" filter
        cy.get('button').contains('ALTS Markets').click()
        cy.wait(5000)
        cy.get('.css-1cqc2bs > :nth-child(3)').click()
        cy.wait(5000)
        //Verify that pair column is sorted with all ETH values
        cy.get('div').contains('Pair').click()
        cy.wait(5000)
        cy.get('.css-14yoi5o').children('div').should('have.class', 'css-en0860').contains('ETH')
        cy.log('ALLAH HU AKBAR');
    })
    
    // Select USSD on "FIAT Markets" filter
    // Verify that  pair column is sorted with all USSD values
    it('Select USSD on "FIAT Markets" filter and Verify Sorting', () => {

        // Select USSD on "FIAT Markets" filter *** USSD not found but USDT is there
        cy.get('button').contains('FIAT Markets').click()
        cy.wait(5000)
        cy.get('.css-1cqc2bs > :nth-child(3)').click()
        cy.wait(5000)

        // Verify that  pair column is sorted with all USSD values
        cy.get('div').contains('Pair').click()
        cy.wait(5000)
        cy.get('.css-14yoi5o').children('div').should('have.class', 'css-en0860').contains('USDT')
        cy.log('ALLAH HU AKBAR');
    })

    // And ALTS Markets filter default value is reset to "All"
    it('ALTS Markets filter default value is reset to "All"', () => {

        // And ALTS Markets filter default value is reset to "All"
        cy.get('button').contains('ALTS Markets').click()
        cy.wait(5000) 
        cy.get('.css-1451lrn').contains('All')

        cy.log('ALLAH HU AKBAR');
    })
    
})