import { ComponentMeta, ComponentStory } from "@storybook/react";
import Authors from "./Authors";

export default {
  title: "Library/Molecules/Authors",
  component: Authors,
  args: {
    srcList: [
      "https://picsum.photos/64?random=1",
      "https://picsum.photos/64?random=2",
      "https://picsum.photos/64?random=3",
      "https://picsum.photos/64?random=4",
    ],
  },
} as ComponentMeta<typeof Authors>;

const Template: ComponentStory<typeof Authors> = (args) => (
  <Authors {...args} />
);

export const Default = Template.bind({});
