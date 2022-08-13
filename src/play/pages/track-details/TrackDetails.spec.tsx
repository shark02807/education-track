import { Route, Routes, MemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import TrackDetails from "./TrackDetails";
import { TrackDetailsContextProvider } from "../../context/track-details/TrackDetails";
import trackDetailsService from "../../../service/track-details";
import { track } from "../../../mock/test-mocks";

const server = setupServer(
  rest.get("https://api.education-track.com/track/:trackSlug", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(track));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const customRender = () => {
  return render(
    <MemoryRouter initialEntries={["/track/track-1"]}>
      <Routes>
        <Route
          path="track/:trackSlug"
          element={
            <TrackDetailsContextProvider trackDetailsService={trackDetailsService}>
              <TrackDetails />
            </TrackDetailsContextProvider>
          }
        >
        </Route>
      </Routes>
    </MemoryRouter>,
  )
}

describe("TrackDetails", () => {
  it("should render Track Details page", () => {
    render(<TrackDetails />);

    const trackDetailsPage = screen.queryByRole("track-details");
    expect(trackDetailsPage).toBeInTheDocument();

    const tabbedContentPage = screen.queryByRole("tabbed-content");
    expect(tabbedContentPage).toBeInTheDocument();
  });

  it("should render buttons", () => {
    render(<TrackDetails />);

    const shareButton = screen.queryByText("Share track");
    expect(shareButton).toBeInTheDocument();
    expect(shareButton).toHaveClass("bg-white");

    const startButton = screen.queryByText("Start track");
    expect(startButton).toBeInTheDocument();
    expect(startButton).toHaveClass("bg-indigo-900");
  });

  test("should show loading status at the start", () => {
    const loadingText = "loading...";

    customRender();

    expect(screen.getByText(loadingText)).toBeInTheDocument();
  });

  test("should render Track Details page after track loaded", async () => {
    customRender();

    expect(screen.queryByText(track.name)).toBeNull();

    await waitFor(() => screen.getByText(track.name));
    expect(screen.getByText(track.name)).toBeInTheDocument();

    const trackIcon = screen.queryByRole("track-icon");
    expect(trackIcon).toHaveAttribute("src", track.iconSrc);
  });
});
