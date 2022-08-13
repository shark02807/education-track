import React, { useState } from "react";
import TabsNavigation from "../../molecules/tabs-navigation/TabsNavigation";

export type Tab = {
  name: string;
  content: React.ReactNode;
}

interface ITabbedContent {
  tabs: Tab[];
  className?: string;
}

const TabbedContent = ({ tabs, className }: ITabbedContent) => {
  const [activeTab, setActiveTab] = useState(tabs?.[0].name || "");

  const onTabClickHandler = (tabName: string): void => {
    setActiveTab(tabName);
  }

  return (
    <div className={className} role="tabbed-content">
      <div className="overflow-x-scroll w-full p-px">
        <TabsNavigation tabs={tabs} activeTab={activeTab} onTabClickHandler={onTabClickHandler} />
      </div>
      <div className="mt-6">
        {tabs?.map(({ name, content }) => name === activeTab ? (
          <div key={name} role="tab-content">
            {content}
          </div>
        ) : null )}
      </div>
    </div>
  );
 };

export default TabbedContent;
