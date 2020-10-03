describe("removing crafted items", () => {
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
        {
          operatorName: "Exusiai",
          name: "Elite 2",
          category: 0,
          requiredItems: [
            { name: "LMD", quantity: 180000 },
            { name: "Sniper Dualchip", quantity: 4 },
            { name: "Polymerization Preparation", quantity: 4 },
            { name: "Sugar Lump", quantity: 5 },
          ],
        },
      ])
    );
    window.localStorage.setItem(
      "itemsToCraft",
      JSON.stringify({ "Sniper Dualchip": true })
    );
    cy.visit("/");
  });

  it("removes crafted items for a goal when its goal is removed", () => {
    cy.get('button[aria-label~="delete" i]').click({ multiple: true });
    cy.getByTestId("materialsLists").should("be.empty");
  });

  it("keeps crafted items for a deleted goal if another goal needs them", () => {
    cy.get('button[aria-label~="delete" i]').first().click();
    cy.getByTestId("Sniper Dualchip").within(() => {
      cy.get("button").contains("crafting", { matchCase: false });
    });
  });
});

describe("crafted item chaining", () => {
  beforeEach(() => {
    window.localStorage.setItem(
      "operatorGoals",
      JSON.stringify([
        {
          operatorName: "Siege",
          name: "Elite 2",
          category: 0,
          requiredItems: [
            { name: "LMD", quantity: 180000 },
            { name: "Vanguard Dualchip", quantity: 4 },
            { name: "Bipolar Nanoflake", quantity: 4 },
            { name: "Orirock Concentration", quantity: 6 },
          ],
        },
      ])
    );
    cy.visit("/");
  });

  it("marks chained crafted items", () => {
    cy.getByTestId("Orirock Concentration").as("concentration");
    cy.get("@concentration")
      .contains(/craft$/i)
      .click();
    cy.get("@concentration")
      .contains(/crafting/i)
      .closest("button")
      .should("have.class", "MuiButton-contained");
    cy.getByTestId("Orirock Cluster").contains(/craft/i).click();
    cy.getByTestId("Orirock Cube").contains(/craft/i).click();
    cy.getByTestId("Orirock");
  });

  it("removes a crafted item's ingredients from the materials list when crafting is turned off", () => {
    cy.getByTestId("Orirock Concentration").as("concentration");
    cy.get("@concentration")
      .contains(/craft$/i)
      .click();
    cy.getByTestId("Orirock Cluster").contains(/craft/i).click();
    cy.getByTestId("Orirock Cube").contains(/craft/i).click();
    cy.get("@concentration")
      .contains(/crafting/i)
      .click(); // now stop crafting concentration
    cy.getByTestId("Orirock Cluster").should("not.exist");
    cy.getByTestId("Orirock Cube").should("not.exist");
    cy.getByTestId("Orirock").should("not.exist");
  });
});

describe("item requirements for crafted items", () => {
  beforeEach(() => {
    window.localStorage.setItem(
      "operatorGoals",
      JSON.stringify([
        {
          operatorName: "FEater",
          name: "Skill Level 6 -> 7",
          category: 2,
          requiredItems: [
            { name: "Skill Summary - 3", quantity: 6 },
            { name: "Oriron Cluster", quantity: 2 },
            { name: "Grindstone", quantity: 3 },
          ],
        },
      ])
    );
    window.localStorage.setItem(
      "itemsToCraft",
      JSON.stringify({ "Skill Summary - 3": true, "Skill Summary - 2": true })
    );
    cy.visit("/");
  });

  it("updates item requirements for upstream and downstream items", () => {
    cy.getByTestId("Skill Summary - 3").as("ss3");
    cy.get("@ss3").find("input").type(1);
    cy.get("@ss3").find("[data-testid=quantity]").should("have.text", 6); // no change to required #
    cy.getByTestId("Skill Summary - 2").as("ss2");
    cy.get("@ss2").find("[data-testid=quantity]").should("have.text", 15);
    cy.getByTestId("Skill Summary - 1").as("ss1");
    cy.get("@ss1").find("[data-testid=quantity]").should("have.text", 45);

    cy.get("@ss1").find("input").type(3);
    cy.get("@ss2").find("[data-testid=quantity]").should("have.text", 14);
  });
});
