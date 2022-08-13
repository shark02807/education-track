import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TabbedContent from "./TabbedContent";
import { tabs } from "../../../mock/test-mocks";

describe("TabbedContent", () => {
  it("should render Tabbed Content component", async () => {
    render(<TabbedContent tabs={tabs} />);

    const tabbedContentComponent = screen.getByRole("tabbed-content");
    expect(tabbedContentComponent).toBeInTheDocument();

    const tabsNavigationComponent = screen.getByRole("tabs-navigation");
    expect(tabsNavigationComponent).toBeInTheDocument();

    const tabContent = await screen.findAllByRole("tab-content");
    expect(tabContent).toHaveLength(1);
  });

  it("should render Tabbed Content component with custom class", () => {
    const customClass = "custom-class"

    render(<TabbedContent tabs={tabs} className={customClass} />);

    const tabbedContent = screen.getByRole("tabbed-content");
    
    expect(tabbedContent).toHaveClass(customClass);
  });

  it("should render Tabbed Content component with Description tab active", () => {
    render(<TabbedContent tabs={tabs} />);

    const tab1content = screen.queryByText(tabs[0].content);
    expect(tab1content).toBeInTheDocument();

    const tab2content = screen.queryByText(tabs[1].content);
    expect(tab2content).toBeNull();

    const tab3content = screen.queryByText(tabs[2].content);
    expect(tab3content).toBeNull();

    const tab4content = screen.queryByText(tabs[3].content);
    expect(tab4content).toBeNull();

    const tab5content = screen.queryByText(tabs[4].content);
    expect(tab5content).toBeNull();

    const tab6content = screen.queryByText(tabs[5].content);
    expect(tab6content).toBeNull();

    const tab7content = screen.queryByText(tabs[6].content);
    expect(tab7content).toBeNull();
  });

  it("should render new Tabbed Content after tabs-navigation button clicked", async () => {
    render(<TabbedContent tabs={tabs} />);

    const tab1content = screen.queryByText(tabs[0].content);
    expect(tab1content).toBeInTheDocument();

    const tab2content = screen.queryByText(tabs[1].content);
    expect(tab2content).toBeNull();

    fireEvent.click(screen.getByText(tabs[1].name));

    const tab1contentNew = await waitFor(() => screen.queryByText(tabs[0].content));
    expect(tab1contentNew).toBeNull();
    
    const tab2contentNew = await waitFor(() => screen.queryByText(tabs[1].content));
    expect(tab2contentNew).toBeInTheDocument();
  });
});
