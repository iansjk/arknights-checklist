// force Cypress.LocalStorage.clear to noop
// (we DON'T want localstorage cleared automatically between tests)
Cypress.LocalStorage.clear = () => {};

describe("crafting", () => {
  beforeEach(() => {
    window.localStorage.setItem(
      "operatorGoals",
      JSON.stringify([
        {
          operatorName: "Rosa",
          name: "Elite 2",
          category: 0,
          requiredItems: [
            { name: "LMD", quantity: 180000 },
            { name: "Sniper Dualchip", quantity: 4 },
            { name: "Bipolar Nanoflake", quantity: 4 },
            { name: "Optimized Device", quantity: 6 },
          ],
        },
      ])
    );
    window.localStorage.setItem(
      "itemsToCraft",
      JSON.stringify({ "Optimized Device": true })
    );
  });

  it("removes crafted items for a goal when its goal is removed", () => {
    cy.visit("/");
    cy.get('button[aria-label~="delete" i]').click();
    cy.getByTestId("materialsLists").should("be.empty");
  });
});
