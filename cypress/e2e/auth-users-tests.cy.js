
it('Create user successfully', () => {
  cy.fixture('/.config/user.json').then((user) => {
    cy.request({
      method: 'POST',
      url: '/user',
      body: user,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('code', 200);
      expect(response.body).to.have.property('type', 'unknown');
      expect(response.body).to.have.property('message').that.contains('user created');
    });
  });
});


// it('Login user successfully', () => {
//   const username = Cypress.env('CY_USER');
//   const password = Cypress.env('CY_PSSWD');

//   cy.request({
//     method: 'GET',
//     url: `/user/login?username=${username}&password=${password}`,
//   }).then((response) => {
//     expect(response.status).to.eq(200);
//     expect(response.body).to.have.property('code', 200);
//     expect(response.body).to.have.property('type', 'unknown');
//     expect(response.body).to.have.property('message').that.contains('logged in user session:');
//   });
// });