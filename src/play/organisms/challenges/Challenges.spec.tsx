import { render, screen } from "@testing-library/react";
import Challenges from "./Challenges";
import { challenges } from "../../../mock/test-mocks";

describe("Challenges", () => {
  it("should render Challenges component", async () => {
    render(<Challenges challenges={challenges} />);

    const title = screen.getByText("Challenges");
    expect(title).toBeInTheDocument();

    const subTitle = screen.getByText("Below are the challenges. Click the first one to start the track");
    expect(subTitle).toBeInTheDocument();

    const list = screen.getByRole("challenges-list");
    expect(list).toBeInTheDocument();

    const cards = await screen.findAllByRole("challenge-card");
    expect(cards).toHaveLength(4);
  });

  it("should render challenge cards properly", async () => {
    render(<Challenges challenges={challenges} />);

    const card1title = await screen.getByText(challenges[0].title);
    expect(card1title).toBeInTheDocument();

    const card1description = await screen.getByText(challenges[0].description);
    expect(card1description).toBeInTheDocument();

    const card2title = await screen.getByText(challenges[1].title);
    expect(card2title).toBeInTheDocument();

    const card2description = await screen.getByText(challenges[1].description);
    expect(card2description).toBeInTheDocument();
  });
});
