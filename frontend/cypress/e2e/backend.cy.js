describe('Express API Tests', () => {
  const baseUrl = 'http://localhost:3000'; 

  it('GET /hello should return greeting', () => {
    cy.request(`${baseUrl}/hello`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'Hello from Express!');
    });
  });

  it('POST /add should return correct sum', () => {
    cy.request('POST', `${baseUrl}/add`, { a: 10, b: 5 }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('sum', 15);
    });
  });

  it('POST /add handles negative numbers', () => {
    cy.request('POST', `${baseUrl}/add`, { a: -3, b: 7 }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.sum).to.eq(4);
    });
  });

  it('GET /unknown returns 404', () => {
    cy.request({
      url: `${baseUrl}/notreal`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
