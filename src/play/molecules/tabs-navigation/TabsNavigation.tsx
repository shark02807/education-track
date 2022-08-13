import cn from "classnames";
import { Tab } from "../../organisms/tabbed-content/TabbedContent";

interface ITabsNavigation {
  tabs: Tab[];
  activeTab: string;
  onTabClickHandler: (tab: string) => void;
}

const TabsNavigation = ({ tabs, activeTab, onTabClickHandler }: ITabsNavigation) => {
  return (
    <div
      className="h-10 inline-flex flex-nowrap items-center justify-start ring-1 ring-gray-200 rounded-lg leading-10 font-semibold bg-white"
      role="tabs-navigation"
    >
      {tabs?.map(({ name: tabName }) => (
        <div
          key={tabName}
          className={cn("px-4 border-r-2 border-r-gray-200 first:rounded-l-lg last:rounded-r-lg last:border-r-transparent cursor-pointer whitespace-nowrap", {
            ["bg-sky-500 text-white ring-1 ring-sky-500 border-r-sky-500"]: activeTab === tabName,
            ["text-gray-700"]: activeTab !== tabName
          })}
          onClick={() => onTabClickHandler(tabName)}
          role="tabs-navigation-button"
        >
          {tabName}
        </div>
      ))}
    </div>
  );
};

export default TabsNavigation;
