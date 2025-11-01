describe('Frontend App', () => {
    it('renders the greeting and button', () => {
      cy.visit('/');
      cy.contains('Hello, Cypress Tester!').should('be.visible');
      cy.contains('Click me').click();
    });
  });
  