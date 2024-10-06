it('Get store inventory successfully', () => {
    cy.request({
      method: 'GET',
      url: '/store/inventory',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers).to.have.property('content-type', 'application/json');
      expect(response.headers['access-control-allow-headers'].replace(/\s+/g, '')).to.eq('Content-Type,api_key,Authorization');
      expect(response.headers['access-control-allow-methods'].replace(/\s+/g, '')).to.eq('GET,POST,DELETE,PUT');
      expect(response.headers).to.have.property('access-control-allow-origin', '*');
      expect(response.headers).to.have.property('date');
      expect(response.headers).to.have.property('server', 'Jetty(9.2.9.v20150224)');
  
      const inventory = response.body;
      expect(inventory).to.have.property('3000', 1);
      expect(inventory).to.have.property('string', 512);
      expect(inventory).to.have.property('VIVO', 3);
      // ... add more expectations for each property in the response body
    });
  });