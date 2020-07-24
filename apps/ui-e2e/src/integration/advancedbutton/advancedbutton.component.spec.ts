describe('ui', () => {
    beforeEach(() => cy.visit('/iframe.html?id=advancedbuttoncomponent--primary&knob-advancedbutton'));
  
    it('should render the component', () => {
      cy.get('nx-myorg-advanced-button').should('exist');
    });
  
  });
  