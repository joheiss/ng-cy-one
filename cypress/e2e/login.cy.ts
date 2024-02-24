describe('Logon form ...', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('entering the right credentials should accomplish a successful login', async () => {
    // login
    await login("ortoni11", "Pass1234");
    // check for successful login
    cy.get("app-nav-bar mat-toolbar button").contains("ortoni11");
  });

  it('entering the wrong credentials should cause an error message instead', async () => {
    // login
    await login("ortoni11", "Wrong123");
    // check for error message
    cy.contains("Username or Password is incorrect").should('exist');
  });

  it('clicking on "logout" should show the login form again', async () => {
    // login
    await login("ortoni11", "Pass1234");
    // check for successful login
    await logout("ortoni11");
    cy.url().should('equal', 'https://bookcart.azurewebsites.net/login');
  });

});

const login = async (username: string, password: string): Promise<void> => {
  const usernameFld = cy.get('input[formcontrolname="username"]');
  usernameFld.type(username);
  const passwordFld = cy.get('input[formcontrolname="password"]');
  passwordFld.type(password);
  const loginBtn = cy.get('mat-card-actions button').contains('Login');
  loginBtn.click();
}

const logout = async (username: string) => {
  const accountBtn = cy.get("app-nav-bar mat-toolbar button").contains(username);
  accountBtn.should('exist');
  accountBtn.click();
  const logoutBtn = cy.contains('Logout');
  logoutBtn.should('exist');
  logoutBtn.click();
}
