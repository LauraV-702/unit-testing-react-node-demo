describe('Greeting Machine', () => {
  // Visit the homepage before each test
  beforeEach(() => {
    cy.visit('/');
  });

  // Check if the title is visible
  it('shows the greeting machine title', () => {
    cy.contains('Greeting Machine').should('be.visible');
  });

  // Check if the first greeting text appears
  it('displays the first greeting', () => {
    cy.contains('Hello, Cypress Tester!').should('be.visible');
  });

  // Check if clicking "Next Quote" changes the greeting
  it('changes quote when clicking "Next Quote"', () => {
    cy.contains('Next Quote').click();
    cy.contains('Hello, Cypress Tester!').should('not.exist');
  });

  // Check if "Reset" brings back the first greeting
  it('resets to the first quote when clicking "Reset"', () => {
    cy.contains('Next Quote').click();
    cy.contains('Reset').click();
    cy.contains('Hello, Cypress Tester!').should('be.visible');
  });
});
