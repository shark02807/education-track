import { render } from "@testing-library/react";
import { TrackDetailsContextProvider } from "./TrackDetails";

describe("TrackDetails", () => {
  it("should render", () => {
    render(
      <TrackDetailsContextProvider
        trackDetailsService={{
          getTrackDetails: (() => {}) as any,
        }}
      >
        asd
      </TrackDetailsContextProvider>
    );
  });
});
