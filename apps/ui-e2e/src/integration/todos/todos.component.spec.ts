describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=todoscomponent--primary&knob-todos'));

  it('should render the component', () => {
    cy.get('nx-myorg-todos').should('exist');
  });

  it('should have 2 todos', () => {
    // always point component tag name because `cy` object has in scope also cypress view on the left hand side!
    cy.get('nx-myorg-todos li').should('have.length', 2);
    });

  it('should render 2 elements', () => {
    cy.get('nx-myorg-todos li:nth-child(1)').should('have.length', 1);
    cy.get('nx-myorg-todos li:nth-child(2)').should('have.length', 1);
  });

  it ('should render `todo1`, `todo2`', () => {
    cy.get('nx-myorg-todos li:nth-child(1)').eq(0).should('contain', 'todo1');
    cy.get('nx-myorg-todos li:nth-child(2)').eq(0).should('contain', 'todo2');
  });

});
