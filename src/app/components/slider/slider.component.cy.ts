import { SliderComponent } from './slider.component'

it('when the contact button is pressed', () => {
    cy.mount(SliderComponent)
    cy.get('[data-cy=contact]').click()
    cy.get('[data-cy=contact]').should('have.css', 'background-color', 'rgb(0, 96, 161)')
    cy.get('[data-cy=info]').should('have.css', 'background-color', 'rgb(236, 238, 241)')
  })

it('when the info button is pressed', () => {
    cy.mount(SliderComponent)
    cy.get('[data-cy=info]').click()
    cy.get('[data-cy=info]').should('have.css', 'background-color', 'rgb(0, 96, 161)')
    cy.get('[data-cy=contact]').should('have.css', 'background-color', 'rgb(236, 238, 241)')
  })