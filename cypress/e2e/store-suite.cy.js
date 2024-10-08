let orderId;

// I've put all possible assertions here, hopefully! - Masha Med

it('Get inventory successfully', () => {
  cy.request({
    method: 'GET',
    url: '/store/inventory',
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.headers).to.have.property('content-type', 'application/json');
    expect(response.headers).to.have.property('access-control-allow-origin', '*');
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('available').that.is.a('number');
    expect(response.body).to.have.property('sold').that.is.a('number');
    expect(response.body).to.have.property('string').that.is.a('number');
    expect(response.body).to.have.property('availabe').that.is.a('number');
    expect(response.body).to.have.property('avaliable').that.is.a('number');
    expect(response.body).to.have.property('pending').that.is.a('number');
    expect(response.body).to.have.property('busy').that.is.a('number');
    expect(response.body).to.have.property('available').that.is.a('number');
    expect(response.body).to.have.property('Available').that.is.a('number');
    expect(response.body).to.have.property('status').that.is.a('number');
  });
});

it('Place order successfully', () => {
  cy.fixture('order.json').then((order) => {
    cy.request({
      method: 'POST',
      url: '/store/order',
      body: order,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers).to.have.property('content-type', 'application/json');
      expect(response.headers).to.have.property('access-control-allow-origin', '*');
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('id').that.is.a('number');
      expect(response.body).to.have.property('petId', 0);
      expect(response.body).to.have.property('quantity', 0);
      expect(response.body).to.have.property('shipDate').that.is.a('string');
      expect(response.body).to.have.property('status', 'placed');
      expect(response.body).to.have.property('complete', true);
      orderId = response.body.id; // store the order ID
    });
  });
});


it('Get order successfully by Id', () => {
  cy.request({
    method: 'GET',
    url: `/store/order/${orderId}`,
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.headers).to.have.property('content-type', 'application/json');
    expect(response.headers).to.have.property('access-control-allow-origin', '*');
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('id', orderId);
    expect(response.body).to.have.property('petId', 0);
    expect(response.body).to.have.property('quantity', 0);
    expect(response.body).to.have.property('shipDate').that.is.a('string');
    expect(response.body).to.have.property('status', 'placed');
    expect(response.body).to.have.property('complete', true);
  });
});

it('Delete order successfully', () => {
  cy.fixture('order.json').then((order) => {
    cy.request({
      method: 'POST',
      url: '/store/order',
      body: order,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers).to.have.property('content-type', 'application/json');
      expect(response.headers).to.have.property('access-control-allow-origin', '*');
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('id').that.is.a('number');
      expect(response.body).to.have.property('petId', 0);
      expect(response.body).to.have.property('quantity', 0);
      expect(response.body).to.have.property('shipDate').that.is.a('string');
      expect(response.body).to.have.property('status', 'placed');
      expect(response.body).to.have.property('complete', true);
      const orderId = response.body.id; // store the order ID

      cy.request({
        method: 'DELETE',
        url: `/store/order/${orderId}`,
      }).then((deleteResponse) => {
        expect(deleteResponse.status).to.eq(200);
        expect(deleteResponse.headers).to.have.property('content-type', 'application/json');
        expect(deleteResponse.headers).to.have.property('access-control-allow-origin', '*');
        expect(deleteResponse.body).to.be.an('object');
        expect(deleteResponse.body).to.have.property('code', 200);
        expect(deleteResponse.body).to.have.property('type', 'unknown');
        expect(deleteResponse.body).to.have.property('message').that.is.a('string');
      });
    });
  });
});