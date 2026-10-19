import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Preferences } from "./Preferences";
import { Header } from "./components/Layout";
import Home from "./pages/Home";
vi.mock("./components/SignalChart", () => ({ default: () => null }));
const mount = () => {
  localStorage.setItem("avaLanguage", "fr");
  localStorage.setItem("avaTheme", "dark");
  return render(
    <MemoryRouter>
      <Preferences>
        <Header />
        <Home />
      </Preferences>
    </MemoryRouter>,
  );
};
afterEach(() => {
  cleanup();
  localStorage.clear();
});
describe("Homepage interaction", () => {
  it("filters without changing application destinations", () => {
    mount();
    expect(screen.getAllByRole("article")).toHaveLength(8);
    const filter = screen.getByRole("group", { name: "Applications" });
    fireEvent.click(filter.querySelectorAll("button")[1]);
    expect(
      screen
        .getByRole("link", { name: "Explorer AVA Fuel" })
        .getAttribute("href"),
    ).toBe("/fuel.html");
    expect(
      screen.queryByRole("link", { name: "Explorer MindMatch" }),
    ).toBeNull();
  });
  it("switches FR EN ES and preserves language preference", () => {
    mount();
    fireEvent.change(screen.getByLabelText("Langue"), {
      target: { value: "en" },
    });
    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain(
      "Intelligence that matters.",
    );
    fireEvent.change(screen.getByLabelText("Language"), {
      target: { value: "es" },
    });
    expect(document.documentElement.lang).toBe("es");
    expect(localStorage.getItem("avaLanguage")).toBe("es");
  });
  it("opens mobile navigation and toggles theme", () => {
    mount();
    const toggle = screen.getByRole("button", { name: "Menu", exact: true });
    fireEvent.click(toggle);
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(screen.getByRole("button", { name: "Changer le theme" }));
    expect(document.documentElement.dataset.theme).toBe("light");
  });
});
