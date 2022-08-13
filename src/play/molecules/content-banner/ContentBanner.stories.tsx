import { ComponentMeta, ComponentStory } from "@storybook/react";
import ContentBanner from "./ContentBanner";
import logo from "./assets/logo_white.svg";

export default {
  title: "Play/Molecules/ContentBanner",
  component: ContentBanner,
  args: {
    logoSrc: logo,
    title: "Online interactive IT learning platform",
    subtitle:
      "Create sandbox environments using real infrastructure to train your teams, customers and prospects. Define challenges to guide users and let them discover the true value of your product.",
  },
} as ComponentMeta<typeof ContentBanner>;

const Template: ComponentStory<typeof ContentBanner> = (args) => (
  <ContentBanner {...args} />
);

export const Default = Template.bind({});
