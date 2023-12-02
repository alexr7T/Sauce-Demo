//Login page
export const loginPage = () => {
    const visitApplication = cy.visit("https://www.saucedemo.com/v1/index.html");
    const insertUsername = cy.get("#user-name").type("standard_user");
    const insertPassword = cy.get("#password").type("secret_sauce");
    const clickOnLoginButton = cy.get("#login-button").click();
}

//Home page
export const homePage = () => {
    const clickOnAddProductToCart = cy.get(":nth-child(3) > .pricebar > .btn_inventory").click();
    const clickOnCart = cy.get(".shopping_cart_link").click();
}

//Checkout Information page
export const checkoutProcess = () => {
    const clickOnCheckoutButton = cy.get(".checkout_button").click();
    const enterFirstName = cy.get("#first-name").type("Andrew");
    const enterLastName = cy.get("#last-name").type("Eastwood");
    const enterZipCode = cy.get("#postal-code").type("45007");

    const clickOnContinueButton = cy.get(".cart_button").click();
    const clickOnFinishButton = cy.get(".btn_action").click();

    const finalMessage = cy.get(".complete-text").should("be.visible");
}
