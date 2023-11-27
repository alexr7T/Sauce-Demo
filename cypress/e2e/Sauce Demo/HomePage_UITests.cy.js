describe("UI Testing - Home Page", () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/index.html");
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();
    })

        it("Check color price from a displayed product", () => {
            const priceNumber = cy.get(':nth-child(1) > .pricebar > .inventory_item_price');
            priceNumber.should("have.css", "color", "rgb(226, 35, 26)");
        })

        it("Check description font from a displayed product", () => {
            const descriptionText = cy.get(":nth-child(1) > .inventory_item_label > .inventory_item_desc");
            descriptionText.should("have.css", "font-family", "Roboto, Arial, Helvetica, sans-serif");
        })

        it("Check if Remove button is black", () => {
            cy.clickAddToCartButton();
            const removeButton = cy.get(".btn_secondary");
            removeButton.should("have.css", "color", "rgb(71, 76, 85)");
        })

        it("Check if animation logo from secondary container is visible", () => {
            const animationLogo = cy.get(".peek");
            animationLogo.should("be.visible");
        })

        it("Check if Burger Menu is positioned correctly", () => {
            const burgerMenu = cy.get(".bm-burger-button");
            burgerMenu.should("have.css", "position", "absolute");
        })

        it("Check if the shopping cart badge is displayed after clicking on Add to cart button", () => {
            cy.clickAddToCartButton();
            const cartBadge = cy.get(".shopping_cart_badge");
            cartBadge.should("exist");
        })



})