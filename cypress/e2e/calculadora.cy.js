describe("Calculadora de cadena ", () => {
    it("Deberia retornar 0, cuando el Usuario no coloque nada en el textbox" , () => {
        cy.visit("/");
        cy.get("#cadena-sumar").clear();
        cy.get("#sumar-button").click();
        cy.get("#resultado-div").should('contain', '0');
    });
});