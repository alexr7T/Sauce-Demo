describe("Add product to cart", () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/index.html");
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();
        cy.get(":nth-child(1) > .pricebar > .btn_inventory").click();
        cy.get(".shopping_cart_link").click();
    })

        it("Verify if the user can add a product to the cart", () => {
            cy.get(".checkout_button").should("exist");
        })

        it("Validate the quantity of the items in the cart", () => {
            cy.get(".cart_quantity").should("have.text", "1");
        })

        it("Check that the price of the product is displayed correctly", () => {
            cy.get(".inventory_item_price").should("have.text", "29.99");
        })
})