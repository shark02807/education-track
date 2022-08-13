import { render, screen } from "@testing-library/react";
import Authors from "./Authors";

const srcList = [
  "https://picsum.photos/64?random=1",
  "https://picsum.photos/64?random=2",
  "https://picsum.photos/64?random=3",
  "https://picsum.photos/64?random=4",
];

describe("Authors", () => {
  it("should render Authors list", async () => {
    render(<Authors srcList={srcList} />);

    const list = screen.getByRole("authors");
    expect(list).toBeInTheDocument();

    const profiles = await screen.findAllByRole("profile");
    expect(profiles).toHaveLength(4);
    
    expect(profiles[0]).toHaveAttribute("src", srcList[0]);
  });
});
