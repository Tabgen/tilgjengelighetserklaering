import { InfoComponent } from './info.component'

it('when the contact button is pressed', () => {
    cy.mount(InfoComponent)
    cy.get('[data-cy=link]').click()
  })

