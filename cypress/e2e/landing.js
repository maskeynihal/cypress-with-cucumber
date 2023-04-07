const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("I visit nepawl.com.np", () => {
  cy.visit("https://nepawl.com.np/");
});

Then("I should text for dogs", () => {
  cy.get(
    "html body div#__nuxt div#__layout div div section.mt-4.mb-4.pt-5 div.container div.row.mb-5 h2.text-primary.text-center"
  ).should("have.text", "for dogs");
});
