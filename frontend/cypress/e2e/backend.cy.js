describe('Express API Tests', () => {
  const baseUrl = 'http://localhost:3000';

  it('GET /hello should return greeting', () => {
    cy.request(`${baseUrl}/hello`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq('Hello from Express!');
    });
  });

  it('POST /add should return correct sum', () => {
    cy.request('POST', `${baseUrl}/add`, { a: 10, b: 5 }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.sum).to.eq(15);
    });
  });
});
