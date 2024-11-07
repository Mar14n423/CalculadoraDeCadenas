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
    it("cuando el usuario ingrese la operacion separado por , entonces deberia sumar", () => {
        cy.visit("/");
        cy.get("#cadena-sumar").type("4,3");
        cy.get("#sumar-button").click();
        cy.get("#resultado-div").should('contain', '7');
    });
    it("cuando el usuario ingrese la operacion de multiples numeros entonces deberia sumar", () => {
        cy.visit("/");
        cy.get("#cadena-sumar").type("1,3,5");
        cy.get("#sumar-button").click();
        cy.get("#resultado-div").should('contain', '9');
    });
    it("cuando el usuario ingrese la operacion separado por , o - entonces deberia sumar", () => {
        cy.visit("/");
        cy.get("#cadena-sumar").type("1,3-5");
        cy.get("#sumar-button").click();
        cy.get("#resultado-div").should('contain', '9');
    });
    it("Si el usuario ingresa la cadena con un numero mayor a 1000 se ignora y debe retornar la suma de la cadena sin ese valor", () => {
        cy.visit("/");
        cy.get("#cadena-sumar").type("1003,3-7");
        cy.get("#sumar-button").click();
        cy.get("#resultado-div").should('contain', '10');
    });
    it("Si el usuario ingresa la cadena con un numero y un delimitador especifico debe retornar la suma de la cadena", () => {
        cy.visit("/");
        cy.get("#cadena-sumar").type("//[;] 6,3-2;1");
        cy.get("#sumar-button").click();
        cy.get("#resultado-div").should('contain', '12');
    });
    it("cuando el usuario ingrese la cadena con un delimitador de más de un carácter debe retornar la suma de la cadena", () => {
        cy.visit("/");
        cy.get("#cadena-sumar").type("//[***]2***4***4");
        cy.get("#sumar-button").click();
        cy.get("#resultado-div").should('contain', '10');
    });

});
