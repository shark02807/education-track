import { ComponentMeta, ComponentStory } from "@storybook/react";
import TrackSidebar from "./TrackSidebar";

export default {
  title: "Play/Organisms/TrackSidebar",
  component: TrackSidebar,
  args: {
    authors: [
      {
        name: "Victor Nielsen",
        profileSrc: "https://picsum.photos/64?random=1",
        slug: "vfn",
      },
      {
        name: "Bruno Domingos",
        profileSrc: "https://picsum.photos/64?random=2",
        slug: "bruno",
      },
      {
        name: "Fredrik Jonnson",
        profileSrc: "https://picsum.photos/64?random=3",
        slug: "fred",
      },
    ],
  },
} as ComponentMeta<typeof TrackSidebar>;

const Template: ComponentStory<typeof TrackSidebar> = (args) => (
  <TrackSidebar {...args} />
);

export const Default = Template.bind({});
