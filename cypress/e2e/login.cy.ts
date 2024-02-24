describe('Logon form ...', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('entering the right credentials should accomplish a successful login', () => {
    // login
    login("ortoni11", "Pass1234");
    // check for successful login
    cy.get("app-nav-bar mat-toolbar button").contains("ortoni11");
  });

  it('entering the wrong credentials should cause an error message instead', () => {
    // login
    login("ortoni11", "Wrong123");
    // check for error message
    cy.contains("Username or Password is incorrect").should('exist');
  });

  it('clicking on "logout" should show the login form again', () => {
    // login
    login("ortoni11", "Pass1234");
    // check for successful login
   logout("ortoni11");
    cy.url().should('equal', 'https://bookcart.azurewebsites.net/login');
  });

});

const login = (username: string, password: string): void => {
  const usernameFld = cy.get('input[formcontrolname="username"]');
  usernameFld.type(username);
  const passwordFld = cy.get('input[formcontrolname="password"]');
  passwordFld.type(password);
  const loginBtn = cy.get('mat-card-actions button').contains('Login');
  loginBtn.click();
}

const logout = (username: string): void => {
  const accountBtn = cy.get("app-nav-bar mat-toolbar button").contains(username);
  accountBtn.should('exist');
  accountBtn.click();
  const logoutBtn = cy.contains('Logout');
  logoutBtn.should('exist');
  logoutBtn.click();
}
