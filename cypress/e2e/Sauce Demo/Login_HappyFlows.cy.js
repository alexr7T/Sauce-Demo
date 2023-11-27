describe("Happy Flow - Login Page", () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/");
    })

        it("Login with standard user", () => {
            cy.get("#user-name").type("standard_user");
            cy.get("#password").type("secret_sauce");
            cy.get("#login-button").click();

            cy.get(".app_logo").should("be.visible");
        })

        it("Login with locked out user", () => {
            cy.get("#user-name").type("locked_out_user");
            cy.get("#password").type("secret_sauce");
            cy.get("#login-button").click();

            cy.get("[data-test='error']").should('include.text', 'Epic sadface: Sorry, this user has been locked out.');
        })

        it("Login with problem user", () => {
            cy.get("#user-name").type("problem_user");
            cy.get("#password").type("secret_sauce");
            cy.get("#login-button").click();

            cy.get("#item_4_img_link").should("exist");
        })

        it("Login with performance glitch user", () => {
            cy.get("#user-name").type("performance_glitch_user");
            cy.get("#password").type("secret_sauce");
            cy.get("#login-button").click();
            
            cy.window().should((win) => {
                const loadTime = win.performance.timing.loadEventEnd - win.performance.timing.navigationStart;
                expect(loadTime).to.be.lessThan(5200);
            });
        })


})