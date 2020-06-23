/// <reference types="cypress" />

import HomePage from    '../PageObjects/HomePage'

describe('test' , function(){

    beforeEach(function() {
        cy.viewport(1000, 660)
      })

    it('test' , function(){
      const  hp= new HomePage();
      hp.visit()
      cy.title().should('eq','Education Advances | Hobsons')
      hp.clickDownArrow()
      cy.wait(2000)
      hp.ValidateVisibilityOfHowCanWeHelpYourStudents();
      cy.window('top').contains('How can we help your students?')
      hp.clickMenu()
      hp.clickOnResources()
      hp.assertThatResourcesContainsAnItem('Events')
      hp.clickOnLinkUnderResources('Events')
      cy.wait(1000)//
      hp.validateEventsYear('2020')
    })
})


