describe("Servants Panel", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should have overlay image initially", () => {
        cy.get("[data-cy='Servants']").find("img").should("exist");
    });

    it("should not have overlay image after accumulating enough resources", () => {
        for (let i = 0; i < 25; i++) {
            cy.contains("Plow Field").click();
        }

        cy.get("[data-cy='Servants']").find("img").should("not.exist");
    });
});
