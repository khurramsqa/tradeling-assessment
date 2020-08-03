/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

import 'cypress-iframe'

/*
1. Scenario 1: [Check your gift card's balance is $0.00]
   1. Starts on the [Amazon](https://www.amazon.com/)
   2. Click on 'Start here' from Account and Lists
   3. Create Account and login
   4. Click on Your account
   5. Click on Gift Cards
   6. Check the balance of your gift card is $0.00
*/

describe('TESTING ASSIGNMENT AMAZON 2 SCENARIO 1', () => {
    //Starts on the [Amazon](https://www.amazon.com/
    beforeEach(() => {
      cy.visit('https://www.amazon.com/')
      
      // to read data from example file
      cy.fixture('example').then(function(data)
      {
this.data=data

      })

      })

      it('Amazon Case Study', function()
      {

      
      //2. Click on 'Start here' from Account and List
      cy.get('#nav-link-accountList').trigger('mouseover')
      cy.wait(2000)
      
      //sing in using existing account
      cy.contains('Sign in').wait(1000).click().wait(1000)

      cy.get('#ap_email').wait(2000).type(this.data.email) //read email value from example.json
      cy.get('#continue').click()
      cy.wait(3000)

      cy.get('input[type="password"]').type(this.data.passowrd)// read password value from example.json
      cy.get('#signInSubmit').click()
      cy.wait(3000)

      cy.get('#nav-link-accountList').trigger('mouseover')
      cy.wait(2000)
      
      //Click on Your account
      cy.get('.nav-text').each(($el, index, $list) => {  //Your Account clicking logic
        if($el.text()=='Your Account')   
            $el.click()  
    
    })
  
      
      cy.wait(2000)

      //Click on Gift Cards
      cy.get('.ya-card-row').eq([1]).contains('Gift cards').click()
      cy.wait(1000)
      
      //Check the balance of your gift card is $0.00
      cy.get('#gc-ui-balance-gc-balance-value').should('include.text','0.00') //verify the amount is $0.00
      cy.wait(3000)

      //  ----------------------------------END OF SCENARIO-1--------------------------------------------------------------------------
      
      /* 1. Scenario 2: [Check the total displayed number of results for category Smart Home | Televisions]
   1. Go to Categories list
   2. Choose category 'Smart Home'
   3. Chhose sub-category 'Televisions'
   4. Check the total number of results match the total displayed products */

      //Go to Categories list
      cy.get('#nav-hamburger-menu').wait(1000).click() //Left side menu icon button
      cy.wait(2000)

      //Choose category 'Smart Home'
      cy.get('ul.hmenu-visible').wait(1000).contains('Smart Home').click() //select Smart Home option from dropdown menu option
      cy.wait(3000)

      //Chhose sub-category 'Televisions'
      cy.get('.hmenu-visible').contains('Televisions').click() //select Television option from dropdown menu option
      cy.wait(3000)

      /* cy.get('#s-result-count').should(($div) => {
        const str = $div.text()
        
      }) */
      
      /* var str =cy.get('#s-result-count').invoke('text');
      cy.log(str) 
      var n = str.search("of");
      
      var n1 = str.search("results");
      var txt = str.substring(n+3, n1)
      cy.log(txt)
 */
// -------------------------------------END OF SCENARIO-2  -----------------------------------------------------------------

/* 1. Scenario 3: [Check the selected currency displayed for the products' price]
1. Go to Currency Settings
2. Change currency to 'AED'
3. Save changes
4. Check the selected currency displayed for the products' price */
      
    // scenario-3: STARTS FROM HERE

      //1. Go to Currency Settings
      cy.get('.hm-icon').wait(1000).click()
      cy.wait(3000)

      cy.get('ul.hmenu-visible').contains('English').click()
      cy.wait(3000)
     
      //2. Change currency to 'AED'
      //click on #a-autoid-0-announce opens currency selection options and then for AED i used ID=#icp-sc-dropdown_2
      cy.get('#a-autoid-0-announce').wait(1000).click().wait(1000).get('#icp-sc-dropdown_2').click()
      
      //3. Save changes
      cy.get('.a-button-input').click()
      cy.wait(3000)

      //4. Check the selected currency displayed for the products' price
      cy.get('#nav-hamburger-menu').click() //Left side menu icon button
      cy.wait(2000)

      cy.get('ul.hmenu-visible').contains('Smart Home').click() //select Smart Home option from dropdown menu option
      cy.wait(2000)

      cy.get('.hmenu-visible').contains('Televisions').click() //select Television option from dropdown menu option
      cy.wait(3000)

      cy.get('#search-results').contains('AED')

    


         
      })

})
                      