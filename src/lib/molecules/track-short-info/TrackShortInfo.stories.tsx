import { ComponentMeta, ComponentStory } from "@storybook/react";
import TrackShortInfo from "./TrackShortInfo";

export default {
  title: "Library/Molecules/TrackShortInfo",
  component: TrackShortInfo,
  args: {
    durationSeconds: 50,
    challengesAmount: 4
  },
} as ComponentMeta<typeof TrackShortInfo>;

const Template: ComponentStory<typeof TrackShortInfo> = (args) => (
  <TrackShortInfo {...args} />
);

export const Default = Template.bind({});
