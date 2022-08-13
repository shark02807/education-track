import { render, screen } from "@testing-library/react";
import TrackShortInfo from "./TrackShortInfo";

const durationSeconds = 60;
const challengesAmount = 4;

describe("TrackShortInfo", () => {
  it("should render Track Short Info properly", () => {
    render(<TrackShortInfo durationSeconds={durationSeconds} challengesAmount={challengesAmount} />);

    const duration = screen.getByText("1 minutes");
    expect(duration).toBeInTheDocument();

    const challenges = screen.getByText("4 challenges");
    expect(challenges).toBeInTheDocument();

    const clockIcon = screen.queryByRole("clock-icon");
    expect(clockIcon).toBeInTheDocument();

    const flagIcon = screen.queryByRole("flag-icon");
    expect(flagIcon).toBeInTheDocument();
  });

  it("should render Track Short Info with custom class", () => {
    const customClass = "custom-class"

    render(<TrackShortInfo durationSeconds={durationSeconds} challengesAmount={challengesAmount} className={customClass} />);

    const trackShortInfo = screen.getByRole("track-short-info");
    
    expect(trackShortInfo).toHaveClass(customClass);
  });
});
