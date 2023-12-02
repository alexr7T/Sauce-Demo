import { loginPage, homePage, checkoutProcess } from "./Attributes&Methods.cy"

describe("Checkout", () => {

        context("Apple MacBook Pro 16-inch", () => {
            
            beforeEach(() => {
                cy.viewport(3546, 2234);
            })
            
            it("Verify checkout for MacBook Pro", () => {
                loginPage();
                homePage();
                checkoutProcess();
            })
        })

        context("Samsung S23 Plus", () => {

            beforeEach(() => {
                cy.viewport(2340, 1080);
            })

            it("Verify checkout for S23 Plus", () => {
                loginPage();
                homePage();
                checkoutProcess();
            })
        })

})