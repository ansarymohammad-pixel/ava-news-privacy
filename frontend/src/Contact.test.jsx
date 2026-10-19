import { it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Preferences } from "./Preferences";
import Contact from "./pages/Contact";
import { products } from "./content";
afterEach(() => {
  cleanup();
  localStorage.clear();
});
it("retains contact email, policies and all official app downloads", () => {
  localStorage.setItem("avaLanguage", "en");
  render(
    <MemoryRouter>
      <Preferences>
        <Contact />
      </Preferences>
    </MemoryRouter>,
  );
  expect(
    screen
      .getByRole("link", { name: "support@avaintelligent.info" })
      .getAttribute("href"),
  ).toBe("mailto:support@avaintelligent.info");
  for (const p of products)
    expect(
      screen
        .getByRole("link", { name: "Get it on Google Play — " + p.name })
        .getAttribute("href"),
    ).toBe(p.storeUrl);
  expect(
    screen.getByRole("link", { name: "Account deletion" }).getAttribute("href"),
  ).toBe("/delete-account.html");
});
it("supports French contact content", () => {
  localStorage.setItem("avaLanguage", "fr");
  render(
    <MemoryRouter>
      <Preferences>
        <Contact />
      </Preferences>
    </MemoryRouter>,
  );
  expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
    "Parlons d’AVA Intelligent.",
  );
});
