describe("Negative Flows - Login Page", () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/index.html");
    })

        it("Missing username", () => {
            cy.get("#user-name").type("");
            cy.get("#password").type("secret_sauce");
            cy.get("#login-button").click();
        })

        it("Missing password for standard user", () => {
            cy.get("#user-name").type("standard_user");
            cy.get("#password").type("");
            cy.get("#login-button").click();
        })

        it("Incorrect username", () => {
            cy.get("#user-name").type("standard_userV");
            cy.get("#password").type("secret_sauce");
            cy.get("#login-button").click();
        })

        it("Incorrect password", () => {
            cy.get("#user-name").type("standard_user");
            cy.get("#password").type("secret_sauceV");
            cy.get("#login-button").click();
        })

    afterEach(() => {
        const errorMessage = cy.get("[data-test = 'error']");
        errorMessage.should("exist");
    })


})