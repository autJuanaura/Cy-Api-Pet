it('Login user successfully', () => {
  const username = Cypress.env('CY_USER');
  const password = Cypress.env('CY_PSSWD');

  cy.request({
    method: 'GET',
    url: `/user/login?username=${username}&password=${password}`,
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('code', 200);
    expect(response.body).to.have.property('type', 'unknown');
    expect(response.body).to.have.property('message').that.contains('logged in user session:');
  });
});