import { render, screen } from "@testing-library/react";
import ChallengeCard from "./ChallengeCard";

const challenge = {
  slug: "slug",
  title: "title",
  description: "description",
};

describe("ChallengeCard", () => {
  it("should render challenge card properly", () => {
    render(<ChallengeCard challenge={challenge} />);

    // rendered challenge data
    const title = screen.getByText(challenge.title);
    expect(title).toHaveClass("text-base");

    const description = screen.getByText(challenge.description);
    expect(description).toHaveClass("text-sm");
    
    // rendered lock
    expect(screen.getByRole("lock")).toBeInTheDocument();

    // rendered buttons
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Skip to")).toBeInTheDocument();
  });

  it("should render challenge card with custom class", () => {
    const customClass = "custom-class"

    render(<ChallengeCard challenge={challenge} className={customClass} />);

    const challengeCard = screen.getByRole("challenge-card");
    
    expect(challengeCard).toHaveClass(customClass);
  });

  it("should render challenge card for blocked challenge", () => {
    render(<ChallengeCard challenge={challenge} isBlocked={true} />);

    const lock = screen.getByRole("lock");
    expect(lock).toHaveClass("bg-gray-50");

    const restartButton = screen.queryByText("Restart");
    expect(restartButton).toBeNull();

    const skipToButton = screen.getByText("Skip to");
    expect(skipToButton).toBeInTheDocument();
  });

  it("should render challenge card for available challenge", () => {
    render(<ChallengeCard challenge={challenge} isBlocked={false} />);

    const lock = screen.getByRole("lock");
    expect(lock).toHaveClass("bg-purple-50");

    const skipToButton = screen.queryByText("Skip to");
    expect(skipToButton).toBeNull();

    const restartButton = screen.getByText("Restart");
    expect(restartButton).toBeInTheDocument();
  });
});
