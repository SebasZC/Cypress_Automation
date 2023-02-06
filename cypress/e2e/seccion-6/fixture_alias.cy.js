/// <reference types='Cypress'/>


require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Carga por feature alias', ()=>{

    before(function() {
        cy.fixture("datos").as("datos_sebastian")
    });

    it('cargando desde json con alias', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")

        cy.get("@datos_sebastian").then((data)=>{
            cy.get('#wsf-1-field-21').should("be.visible").type(data.name)
            cy.get('#wsf-1-field-22').should("be.visible").type(data.lastName)
            cy.get('#wsf-1-field-23').should("be.visible").type(data.email)
            cy.get('#wsf-1-field-24').should("be.visible").type(data.phone)
            cy.get('#wsf-1-field-28').should("be.visible").type(data.city)
            cy.get('#wsf-1-field-27').should("be.visible").click()
        })

        
    })
})