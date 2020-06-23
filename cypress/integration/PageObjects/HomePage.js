/// <reference types="cypress" />

class HomePage {

    visit(){ 
        cy.visit('https://www.hobsons.com/')
    }

    clickDownArrow(){
        cy.get('.home-more').click({force: true})
    }

    ValidateVisibilityOfHowCanWeHelpYourStudents(){
     // cy.get('#section-learn-more > h2').contains("How can we help").should('be.visible')
     cy.get('#section-learn-more > h2').should('be.visible')
    }

    clickMenu(){
    cy.get('.menu').scrollIntoView()
    cy.get('.menu').click({force: true})
    }

    clickOnResources(){
      cy.get('body > div.sticky > div > nav > ul > li:nth-child(4)').should('be.visible').click()
    }

    assertThatResourcesContainsAnItem(item){
        cy.get('body > div.sticky > div > nav > ul > li:nth-child(4) > ul > li> a').should('contain', item)
    }

    clickOnLinkUnderResources(link){
        cy.get('body > div.sticky > div > nav > ul > li:nth-child(4) > ul > li> a').each(($e, index, $list)=> {
               
            const text = $e.text()
            if (text.includes(link)){ 
                cy.get($e).click()
      } 
     })

     
    }

    validateEventsYear(year){
        cy.get('.res-events').each(($e, index, $list)=> {
            // this assertion will fail because not all default events are in 2020  
            cy.get($e).contains(year) 
           })
        }
}
export default HomePage