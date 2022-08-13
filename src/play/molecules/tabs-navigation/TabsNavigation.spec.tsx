import { render, screen, fireEvent } from "@testing-library/react";
import TabsNavigation from "./TabsNavigation";
import { tabs } from "../../../mock/test-mocks";

describe("TabsNavigation", () => {
  it("should render Tabs Navigation buttons", async () => {
    const handleClick = jest.fn();

    render(<TabsNavigation tabs={tabs} activeTab={tabs[0].name} onTabClickHandler={handleClick} />);

    const tabsNavigationComponent = screen.getByRole("tabs-navigation");
    expect(tabsNavigationComponent).toBeInTheDocument();

    const tabsButtons = await screen.findAllByRole("tabs-navigation-button");
    expect(tabsButtons).toHaveLength(7);

    // all buttons are rendered
    const tabsButton1 = screen.getByText(tabs[0].name);
    expect(tabsButton1).toBeInTheDocument();

    const tabsButton2 = screen.getByText(tabs[1].name);
    expect(tabsButton2).toBeInTheDocument();

    const tabsButton3 = screen.getByText(tabs[2].name);
    expect(tabsButton3).toBeInTheDocument();

    const tabsButton4 = screen.getByText(tabs[3].name);
    expect(tabsButton4).toBeInTheDocument();

    const tabsButton5 = screen.getByText(tabs[4].name);
    expect(tabsButton5).toBeInTheDocument();

    const tabsButton6 = screen.getByText(tabs[5].name);
    expect(tabsButton6).toBeInTheDocument();

    const tabsButton7 = screen.getByText(tabs[6].name);
    expect(tabsButton7).toBeInTheDocument();
  });

  it("should render Tabs Navigation buttons with active Description button", () => {
    const handleClick = jest.fn();
    
    render(<TabsNavigation tabs={tabs} activeTab={tabs[0].name} onTabClickHandler={handleClick} />);

    // only first button have white text
    const tabsButton1 = screen.getByText(tabs[0].name);
    expect(tabsButton1).toHaveClass("text-white");

    const tabsButton2 = screen.getByText(tabs[1].name);
    expect(tabsButton2).toHaveClass("text-gray-700");

    const tabsButton3 = screen.getByText(tabs[2].name);
    expect(tabsButton3).toHaveClass("text-gray-700");

    const tabsButton4 = screen.getByText(tabs[3].name);
    expect(tabsButton4).toHaveClass("text-gray-700");

    const tabsButton5 = screen.getByText(tabs[4].name);
    expect(tabsButton5).toHaveClass("text-gray-700");

    const tabsButton6 = screen.getByText(tabs[5].name);
    expect(tabsButton6).toHaveClass("text-gray-700");
    
    const tabsButton7 = screen.getByText(tabs[6].name);
    expect(tabsButton7).toHaveClass("text-gray-700");
  });

  it("should render Tabs Navigation buttons with active Sandbox button", () => {
    const handleClick = jest.fn();
    
    render(<TabsNavigation tabs={tabs} activeTab={tabs[3].name} onTabClickHandler={handleClick} />);

    // only 4th button have white text
    const tabsButton1 = screen.getByText(tabs[0].name);
    expect(tabsButton1).toHaveClass("text-gray-700");

    const tabsButton2 = screen.getByText(tabs[1].name);
    expect(tabsButton2).toHaveClass("text-gray-700");

    const tabsButton3 = screen.getByText(tabs[2].name);
    expect(tabsButton3).toHaveClass("text-gray-700");

    const tabsButton4 = screen.getByText(tabs[3].name);
    expect(tabsButton4).toHaveClass("text-white");

    const tabsButton5 = screen.getByText(tabs[4].name);
    expect(tabsButton5).toHaveClass("text-gray-700");

    const tabsButton6 = screen.getByText(tabs[5].name);
    expect(tabsButton6).toHaveClass("text-gray-700");
    
    const tabsButton7 = screen.getByText(tabs[6].name);
    expect(tabsButton7).toHaveClass("text-gray-700");
  });

  test("should calls onTabClickHandler when clicked", () => {
    const handleClick = jest.fn();

    render(<TabsNavigation tabs={tabs} activeTab={tabs[0].name} onTabClickHandler={handleClick} />);

    // on button click should be fired 7 times
    fireEvent.click(screen.getByText(tabs[0].name));
    fireEvent.click(screen.getByText(tabs[1].name));
    fireEvent.click(screen.getByText(tabs[2].name));
    fireEvent.click(screen.getByText(tabs[3].name));
    fireEvent.click(screen.getByText(tabs[4].name));
    fireEvent.click(screen.getByText(tabs[5].name));
    fireEvent.click(screen.getByText(tabs[6].name));

    expect(handleClick).toHaveBeenCalledTimes(7);
  });
});
