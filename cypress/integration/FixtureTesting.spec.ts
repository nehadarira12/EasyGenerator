

describe('Mock API Test', () => {
  beforeEach(() => {
    // Intercept the GET request to the mock URL
    cy.intercept('GET', 'https://www.mocky.io/v2/5185415ba171ea3a00704eed', { fixture: 'Testingfixtures.json' }).as('getUser');
    
    cy.visit('/'); 
  });

  it('should display user information from the mocked API', () => {

    cy.wait('@getUser').its('response.statusCode').should('eq', 200);
    cy.get('.user-id').should('contain', 1);
    cy.get('.user-name').should('contain', 'Neha Kumari');
    cy.get('.user-email').should('contain', 'nehakumar067@gmail.com');
  });
});



