/// <reference types="cypress" />
/// <reference types="Cypress-iframe" />

import 'cypress-iframe'

/*
1. Scenario 1:
   1. Starts on the [Binance market page](https://www.binance.com/en/markets)
   1. On the search box (coin name) type ETH
   1. Check if last price updates in every 5 second
   1. Clear the last price on search box
   1. Mark ETH , BNB as favorites
   1. Verify if Pair's are displayed under Favorites link
*/

describe('TESTING ASSIGNMENT 1 SCENARIO 1', () => {

   // Starts on the [Binance market page](https://www.binance.com/en/markets)
    beforeEach(() => {
      cy.visit('https://www.binance.com/en/markets')
    })

    // On the search box (coin name) type ETH
    // Check if last price updates in every 5 second
    // Clear the last price on search box
    it('Type ETH, Check Price Update And Clear Searc Box', () => {
        
        // On the search box (coin name) type ETH
        cy.get('input:first').should('have.attr', 'placeholder', 'Search Coin Name').type('ETH')
        
        // Check if last price updates in every 5 second
        cy.wait(5000)
        cy.get('.css-ahynou').eq(0).children('div').eq(2).invoke('text').then((text) => {
          cy.log('Price:' + text)
          cy.wait(5000)
          cy.get('.css-ahynou').eq(0).children('div').eq(2).invoke('text').then((text2) => {
            cy.log('Updated Price' + text2)
            assert.notEqual(text,text2)
          });

        
        });

        // Clear the last price on search box
        cy.get('input:first').should('have.attr', 'placeholder', 'Search Coin Name').clear()
   
        cy.log('GOD is great');

    })

    // Mark ETH , BNB as favorites
    // Verify if Pair's are displayed under Favorites link
    it('Mark ETH , BNB as favorites and Verify if Pairs are displayed under Favorites link', () => {
        
      cy.get('.css-1vloj7p').type('ETH')
      //cy.get('input:first').should('have.attr', 'placeholder', 'Search Coin Name').type('ETH')
      cy.wait(5000)    

      // Mark ETH as favorites
      //cy.get('div').contains('Last Price').parent().parent().parent().parent().children('div').find('.css-ahynou').eq(0).find('.css-yiznqx').click()
      cy.get('.css-ahynou').eq(0).find('.css-yiznqx').click()
      cy.wait(2000)  

      //cy.get('input:first').should('have.attr', 'placeholder', 'Search Coin Name').clear() (OR)
      cy.get('.css-1vloj7p').clear()
      cy.get('.css-1vloj7p').type('BNB')
      //OR belw line
      //cy.get('input:first').should('have.attr', 'placeholder', 'Search Coin Name').type('BNB')
      cy.wait(5000)

      // Mark  BNB as favorites
      cy.get('.css-ahynou').eq(0).find('.css-yiznqx').click()
      //cy.get('div').contains('Last Price').parent().parent().parent().parent().children('div').find('.css-ahynou').eq(0).find('.css-yiznqx').click()
      // Verify if Pair's are displayed under Favorites link
      cy.get('div').contains('Favorites').click()
      cy.wait(5000)
      cy.get('.css-1c1ahuy').should('contain', 'ETH')
      cy.get('.css-1c1ahuy').should('contain', 'BNB')
 
      cy.log('ALLAH HU AKBAR');

  })

})