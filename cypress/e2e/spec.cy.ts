describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render the initial project page', () => {
    cy.contains('Book Cart').should('exist');
  });

  it('should display a categories filter list', () => {
    cy.get('app-book-filter mat-nav-list mat-list-item').should('have.length', 6);
    // you could do this by chained finds as well - BUT NOT chained gets
    cy.get('app-book-filter').find('mat-nav-list').find('mat-list-item').should('have.length', 6);
    const menuItem = cy.contains("All Categories");
    menuItem.should('exist');
    menuItem.click();
  });
});

describe('User interactions...', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('click on "Logon" in the main toolbar should open the login form', () => {
    const loginButton = cy.get("mat-toolbar").contains("Login");
    loginButton.click();
    cy.get('app-login').should('be.visible');
  });

  it('entering the right credentials in the login form should accomplish a successful login', () => {

  });

  it('click on "Register" on the login form should open the register form', () => {
    const loginButton = cy.get("mat-toolbar").contains("Login");
    loginButton.click();
    const registerButton = cy.get('app-login button').contains("Register");
    registerButton.click();
    cy.get('app-user-registration').should('be.visible');
  });
});

