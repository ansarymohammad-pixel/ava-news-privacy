import { describe, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Preferences } from "./Preferences";
import { Header } from "./components/Layout";
import { products } from "./content";
describe("Release defaults and store links", () => {
  it("starts in English and light mode without saved preferences", () => {
    localStorage.clear();
    render(
      <MemoryRouter>
        <Preferences>
          <Header />
        </Preferences>
      </MemoryRouter>,
    );
    expect(document.documentElement.lang).toBe("en");
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(screen.getByLabelText("Language").value).toBe("en");
    cleanup();
  });
  it("uses the five supplied Google Play app IDs", () => {
    expect(
      products.map((p) => new URL(p.storeUrl).searchParams.get("id")),
    ).toEqual([
      "info.avaintelligent.smartfuel",
      "com.ava.electricity",
      "com.ava.parking",
      "com.ansary.avaintelligence",
      "com.ava.mindmatch",
    ]);
  });
});
