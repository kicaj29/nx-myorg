describe('ui', () => {
    beforeEach(() => cy.visit('/iframe.html?id=slidercomponent--primary&knob-slider'));
  
    it('should render the component', () => {
      cy.get('nx-myorg-slider').should('exist');
    });
  
  });
  