import { render, screen } from "@testing-library/react";
import ChallengeList from "./ChallengeList";
import { challenges } from "../../../mock/test-mocks";

describe("ChallengesList", () => {
  it("should render challenges list", async () => {
    render(<ChallengeList challenges={challenges} />);

    const list = screen.getByRole("challenges-list");
    expect(list).toBeInTheDocument();

    const cards = await screen.findAllByRole("challenge-card");
    expect(cards).toHaveLength(4);
  });

  it("should render challenge cards properly", async () => {
    render(<ChallengeList challenges={challenges} />);

    const card1title = await screen.getByText(challenges[0].title);
    expect(card1title).toBeInTheDocument();

    const card1description = await screen.getByText(challenges[0].description);
    expect(card1description).toBeInTheDocument();

    const card2title = await screen.getByText(challenges[1].title);
    expect(card2title).toBeInTheDocument();

    const card2description = await screen.getByText(challenges[1].description);
    expect(card2description).toBeInTheDocument();
  });

  it("should render list with no progress", async () => {
    render(<ChallengeList challenges={challenges} />);

    const locks = await screen.findAllByRole("lock");
    expect(locks).toHaveLength(4);

    expect(locks[0]).toHaveClass("bg-gray-50");
    expect(locks[1]).toHaveClass("bg-gray-50");
    expect(locks[2]).toHaveClass("bg-gray-50");
    expect(locks[3]).toHaveClass("bg-gray-50");
  });

  it("should render list with progress on first card", async () => {
    render(<ChallengeList challenges={challenges} currentChallenge={challenges[0].slug} />);

    const locks = await screen.findAllByRole("lock");
    expect(locks).toHaveLength(4);

    expect(locks[0]).toHaveClass("bg-purple-50");
    expect(locks[1]).toHaveClass("bg-gray-50");
    expect(locks[2]).toHaveClass("bg-gray-50");
    expect(locks[3]).toHaveClass("bg-gray-50");
  });

  it("should render list with progress on second card", async () => {
    render(<ChallengeList challenges={challenges} currentChallenge={challenges[1].slug} />);

    const locks = await screen.findAllByRole("lock");
    expect(locks).toHaveLength(4);

    expect(locks[0]).toHaveClass("bg-purple-50");
    expect(locks[1]).toHaveClass("bg-purple-50");
    expect(locks[2]).toHaveClass("bg-gray-50");
    expect(locks[3]).toHaveClass("bg-gray-50");
  });
});
