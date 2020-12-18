describe('shared-ui-component: SharedUiComponent component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=shareduicomponent--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to shared-ui-component!');
    });
});
