describe('Greeting Machine', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows the greeting machine title', () => {
    cy.contains('Greeting Machine').should('be.visible');
  });

  it('displays the first greeting', () => {
    cy.contains('Hello, Cypress Tester!').should('be.visible');
  });

  it('changes quote when clicking "Next Quote"', () => {
    cy.contains('Next Quote').click();
    cy.contains('Hello, Cypress Tester!').should('not.exist');
  });

  it('resets to the first quote when clicking "Reset"', () => {
    cy.contains('Next Quote').click();
    cy.contains('Reset').click();
    cy.contains('Hello, Cypress Tester!').should('be.visible');
  });
});
