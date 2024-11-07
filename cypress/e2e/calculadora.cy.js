describe("Calculadora de cadena ", () => {
    it("Deberia retornar 0, cuando el Usuario no coloque nada en el textbox" , () => {
        cy.visit("/");
        cy.get("#cadena-sumar").clear();
        cy.get("#sumar-button").click();
        cy.get("#resultado-div").should('contain', '0');
    });

    it("Si, el usuario ingresa un numero, se Ddeberia retornar ese mismo numero" , () => {
        cy.visit("/");
        cy.get("#cadena-sumar").clear().type("5");
        cy.get("#sumar-button").click();
        cy.get("#resultado-div").should('contain', '5');
    });
});
