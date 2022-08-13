import { ComponentMeta, ComponentStory } from "@storybook/react";
import TabsNavigation from "./TabsNavigation";
import { tabs } from "../../../mock/test-mocks";

export default {
  title: "Play/Molecules/TabsNavigation",
  component: TabsNavigation,
  args: { tabs }
} as ComponentMeta<typeof TabsNavigation>;

const Template: ComponentStory<typeof TabsNavigation> = (args) => (
  <TabsNavigation {...args} />
);

export const Default = Template.bind({});

export const FirstTabActive = Template.bind({});
FirstTabActive.args = {
  activeTab: "Description"
};

export const MiddleTabActive = Template.bind({});
MiddleTabActive.args = {
  activeTab: "Sandbox"
};

export const LastTabActive = Template.bind({});
LastTabActive.args = {
  activeTab: "Embed"
};
