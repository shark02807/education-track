import { ComponentMeta, ComponentStory } from "@storybook/react";
import TabbedContent from "./TabbedContent";
import { tabs } from "../../../mock/test-mocks";

export default {
  title: "Play/Organisms/TabbedContent",
  component: TabbedContent,
  args: { tabs },
} as ComponentMeta<typeof TabbedContent>;

const Template: ComponentStory<typeof TabbedContent> = (args) => (
  <TabbedContent {...args} />
);

export const Default = Template.bind({});
