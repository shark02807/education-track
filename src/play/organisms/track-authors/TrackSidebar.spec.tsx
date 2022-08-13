import { render, screen } from "@testing-library/react";
import TrackSidebar from "./TrackSidebar";

const authors = [
  {
    name: "John",
    slug: "john",
    profileSrc: "https://picsum.photos/64?random=1",
  },
  {
    name: "Jack",
    slug: "jack",
    profileSrc: "https://picsum.photos/64?random=1",
  },
  {
    name: "Jane",
    slug: "jane",
    profileSrc: "https://picsum.photos/64?random=1",
  },
];

describe("TrackSidebar", () => {
  it("should render Track Sidebar component", async () => {
    render(<TrackSidebar authors={authors} />);

    const trackSidebarComponent = screen.getByRole("track-sidebar");
    expect(trackSidebarComponent).toBeInTheDocument();

    const title = screen.getByText("Track Authors");
    expect(title).toBeInTheDocument();

    const cards = await screen.findAllByRole("track-author");
    expect(cards).toHaveLength(3);
  });

  it("should render Track Sidebar component with custom class", () => {
    const customClass = "custom-class"

    render(<TrackSidebar authors={authors} className={customClass} />);

    const trackSidebarComponent = screen.getByRole("track-sidebar");
    
    expect(trackSidebarComponent).toHaveClass(customClass);
  });
});
