/* global cy */
/* global describe */
/* global it */

describe('register', () => {
  it('user can register on HERA', async () => {
    // Register
    cy.visit('/');
    cy.findByRole('textbox', { name: /first name/i }).type('Brain');
    cy.findByRole('textbox', { name: /last name/i }).type('Lee');
    cy.findByRole('textbox', { name: /email address/i }).type('brian@mail.com');
    cy.get('#password').type('admin@123');
    cy.get('#confirmPassword').type('admin@123');
    cy.findByRole('checkbox').check();
    cy.findByRole('button', { name: /register/i }).click();

    // Logout
    cy.wait(4000);
    cy.findByRole('button', { name: /sign out/i }).click();
  });
});
