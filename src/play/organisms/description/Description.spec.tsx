import { render, screen } from "@testing-library/react";
import Description from "./Description";

const durationSeconds = 60;
const challengesAmount = 4;
const description = "description";

describe("Description", () => {
  it("should render Description component", async () => {
    render(<Description durationSeconds={durationSeconds} challengesAmount={challengesAmount} description={description} />);

    const title = screen.getByText("Description");
    expect(title).toBeInTheDocument();

    const descriptionElement = screen.getByText(description);
    expect(descriptionElement).toBeInTheDocument();

    const trackShortInfo = screen.getByRole("track-short-info");
    expect(trackShortInfo).toBeInTheDocument();

    const duration = screen.getByText("1 minutes");
    expect(duration).toBeInTheDocument();

    const challenges = screen.getByText("4 challenges");
    expect(challenges).toBeInTheDocument();
  });
});
