import { render, screen } from "@testing-library/react";
import DescriptionContent from "./DescriptionContent";
import { track } from "../../../../mock/test-mocks";

describe("DescriptionContent", () => {
  it("should not render Description Content component if no track", () => {
    render(<DescriptionContent track={undefined} />);

    const descriptionContentComponent = screen.queryByRole("description-content");
    expect(descriptionContentComponent).toBeNull();
  });

  it("should render Description Content component with track", () => {
    render(<DescriptionContent track={track} />);

    const descriptionContentComponent = screen.queryByRole("description-content");
    expect(descriptionContentComponent).toBeInTheDocument();
  });

  it("should render Description component", () => {
    render(<DescriptionContent track={track} />);

    const descriptionComponent = screen.queryByRole("description");
    expect(descriptionComponent).toBeInTheDocument();

    const title = screen.queryByText("Description");
    expect(title).toBeInTheDocument();

    const descriptionElement = screen.queryByText(track.description);
    expect(descriptionElement).toBeInTheDocument();

    const trackShortInfo = screen.queryByRole("track-short-info");
    expect(trackShortInfo).toBeInTheDocument();

    const duration = screen.queryByText("1 minutes");
    expect(duration).toBeInTheDocument();

    const challenges = screen.queryByText("4 challenges");
    expect(challenges).toBeInTheDocument();
  });

  it("should render Challenges component", async () => {
    render(<DescriptionContent track={track} />);

    const challengesComponent = screen.queryByRole("challenges");
    expect(challengesComponent).toBeInTheDocument();

    const title = screen.queryByText("Challenges");
    expect(title).toBeInTheDocument();

    const subTitle = screen.getByText("Below are the challenges. Click the first one to start the track");
    expect(subTitle).toBeInTheDocument();

    const list = screen.getByRole("challenges-list");
    expect(list).toBeInTheDocument();

    const cards = await screen.findAllByRole("challenge-card");
    expect(cards).toHaveLength(4);
  });

  it("should render Track Sidebar component", async () => {
    render(<DescriptionContent track={track} />);

    const trackSidebarComponent = screen.getByRole("track-sidebar");
    expect(trackSidebarComponent).toBeInTheDocument();

    const title = screen.getByText("Track Authors");
    expect(title).toBeInTheDocument();

    const cards = await screen.findAllByRole("track-author");
    expect(cards).toHaveLength(3);
  });

  it("should render buttons", async () => {
    render(<DescriptionContent track={track} />);

    const changeButtons = await screen.findAllByRole("change-order");
    expect(changeButtons).toHaveLength(1);

    const addButtons = await screen.findAllByRole("add-challenge");
    expect(addButtons).toHaveLength(1);
  });
});
