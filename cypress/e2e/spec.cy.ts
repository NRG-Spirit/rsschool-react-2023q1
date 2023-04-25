describe('routing', () => {
  it('should rote to about page', () => {
    cy.visit('/');
    cy.get('a').contains('About us').click();
    cy.url().should('include', '/about');
    cy.contains('h1', 'About us');
  });

  it('should rote to form page', () => {
    cy.visit('/');
    cy.get('a').contains('Form').click();
    cy.url().should('include', '/form');
    cy.contains('h1', 'Form');
  });

  it('should show 404 page', () => {
    cy.visit('/test');
    cy.contains('h1', 'Page not found - 404');
  });
});

describe('main page', () => {
  it('should render main page', () => {
    cy.visit('/');
    cy.contains('h1', 'Home');
    cy.get('input').should('have.value', '');
  });

  it('should get books from api', () => {
    cy.visit('/');
    cy.get('input').type('harry{enter}');
    cy.get('input').should('have.value', 'harry');
    cy.get('.card').should('have.length', 14);
  });

  it('should open/close modal window', () => {
    cy.visit('/');
    cy.get('input').type('harry{enter}');
    cy.get('.card:first-child').click();
    cy.get('.modal__wrapper').should('have.length', 1);
    cy.get('.modal__close').click();
    cy.get('.modal__wrapper').should('have.length', 0);
  });

  it('should paginate', () => {
    cy.visit('/');
    cy.get('input').type('harry{enter}');
    cy.get('.pagination__next').should('have.text', 'next page');
    cy.get('.pagination__next').click();
    cy.get('.pagination__prew').should('have.text', 'previous page');
  });
});
