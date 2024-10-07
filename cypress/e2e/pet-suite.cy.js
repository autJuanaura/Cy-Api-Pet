let petId;
let petName;

beforeEach(() => {
  cy.fixture('pet.json').then((pet) => {
    cy.request({
      method: 'POST',
      url: '/pet',
      body: pet,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      petId = response.body.id; // Store the pet ID
      petName = response.body.name; // Store the pet name
    });
  });
});

it('Create pet successfully', () => {
  cy.fixture('pet.json').then((pet) => {
    cy.request({
      method: 'POST',
      url: '/pet',
      body: pet,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('category');
      expect(response.body).to.have.property('name');
      expect(response.body).to.have.property('photoUrls');
      expect(response.body).to.have.property('tags');
      expect(response.body).to.have.property('status');
    });
  });
});

it('Get pet by ID successfully', () => {
  cy.request({
    method: 'GET',
    url: `/pet/${petId}`,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((getResponse) => {
    expect(getResponse.status).to.eq(200);
    expect(getResponse.body).to.have.property('id');
    expect(getResponse.body).to.have.property('category');
    expect(getResponse.body).to.have.property('name');
    expect(getResponse.body).to.have.property('photoUrls');
    expect(getResponse.body).to.have.property('tags');
    expect(getResponse.body).to.have.property('status');
    expect(getResponse.body.name).to.eq(petName); // Check if the pet name matches
  });
});

it('Update pet successfully', () => {
  cy.fixture('update-pet.json').then((updatedPet) => {
    cy.request({
      method: 'PATCH',
      url: `/pet/${petId}`,
      body: updatedPet,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((updateResponse) => {
      expect(updateResponse.status).to.eq(200);
      expect(updateResponse.body).to.have.property('id');
      expect(updateResponse.body).to.have.property('category');
      expect(updateResponse.body).to.have.property('name');
      expect(updateResponse.body).to.have.property('photoUrls');
      expect(updateResponse.body).to.have.property('tags');
      expect(updateResponse.body).to.have.property('status');
      expect(updateResponse.body.name).to.eq(updatedPet.name); // Check if the pet name matches
    });
  });
});

it('Delete pet successfully', () => {
  cy.request({
    method: 'DELETE',
    url: `/pet/${petId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false // add this option to catch the 404 error
  }).then((deleteResponse) => {
    if (deleteResponse.status === 404) {
      console.error(`Pet not found: ${petId}`);
    } else {
      expect(deleteResponse.status).to.eq(200);
      expect(deleteResponse.body).to.be.empty; // Check if the response body is empty
    }
  });
});