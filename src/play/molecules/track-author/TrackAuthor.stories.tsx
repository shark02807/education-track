import { ComponentMeta, ComponentStory } from "@storybook/react";
import TrackAuthor from "./TrackAuthor";

export default {
  title: "Play/Molecules/TrackAuthor",
  component: TrackAuthor,
  args: {
    author: {
      name: "Victor Nielsen",
      profileSrc: "https://picsum.photos/64?random=2",
      slug: "vfn",
    },
  },
} as ComponentMeta<typeof TrackAuthor>;

const Template: ComponentStory<typeof TrackAuthor> = (args) => (
  <TrackAuthor {...args} />
);

export const Default = Template.bind({});
