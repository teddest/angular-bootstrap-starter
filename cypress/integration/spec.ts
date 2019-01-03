it('App loads', () => {
  cy.visit('http://localhost:4200');
});

it('Title contains "Angular Bootstrap starter template"', () => {
  cy.get('app-root h1').contains('Angular Bootstrap starter template');
});

it('ngb-carousel has 3 carousel items', () => {
  cy.get('app-root app-public ngb-carousel .carousel-inner .carousel-item')
      .should('have.length', 3);
});
