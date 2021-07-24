import { mount } from "@cypress/react";
import { cy, describe, it } from "local-cypress";
import App from "./App";

describe(`<App />`, () => {
  it("should render the feature", () => {
    mount(<App />);
    cy.get("[data-testid=app-wrapper]").should("exist");
  });

  it("shouldyou can mount anything", () => {
    mount(<button data-testid="moo">moo</button>);
    cy.get("[data-testid=moo]").should("exist");
  });
});
