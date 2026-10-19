import { it, expect, vi, afterEach } from "vitest";
import {
  render,
  screen,
  waitFor,
  cleanup,
  fireEvent,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Preferences } from "./Preferences";
import Analytics from "./pages/Analytics";
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  localStorage.clear();
});
function mount() {
  localStorage.setItem("avaLanguage", "en");
  return render(
    <MemoryRouter>
      <Preferences>
        <Analytics />
      </Preferences>
    </MemoryRouter>,
  );
}
it("loads the unchanged endpoint and renders real API totals", async () => {
  const fetcher = vi
    .fn()
    .mockResolvedValue({
      ok: true,
      json: async () => ({
        days: [{ date: "2026-10-19", page_views: 7, unique_visitors: 3 }],
        total_page_views: 7,
        total_unique_visitors: 3,
      }),
    });
  vi.stubGlobal("fetch", fetcher);
  mount();
  await screen.findByText("Source: AVA analytics API");
  expect(fetcher.mock.calls[0][0]).toBe(
    "http://127.0.0.1:8000/analytics/daily?days=14",
  );
  expect(screen.getAllByText("7").length).toBeGreaterThan(0);
});
it("shows unavailable state rather than fabricated zeroes and supports retry", async () => {
  const fetcher = vi.fn().mockRejectedValue(Error("offline"));
  vi.stubGlobal("fetch", fetcher);
  mount();
  await screen.findByText(
    "Analytics is currently unavailable. Please try again later.",
  );
  expect(screen.getAllByText("—")).toHaveLength(2);
  fireEvent.click(screen.getByRole("button", { name: "Refresh data" }));
  await waitFor(() => expect(fetcher).toHaveBeenCalledTimes(2));
});
