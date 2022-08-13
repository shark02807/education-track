import { ComponentMeta, ComponentStory } from "@storybook/react";
import Challenges from "./Challenges";
import { challenges } from "../../../mock/test-mocks";

export default {
  title: "Play/Organisms/Challenges",
  component: Challenges,
  args: {
    challenges
  },
} as ComponentMeta<typeof Challenges>;

const Template: ComponentStory<typeof Challenges> = (args) => (
  <Challenges {...args} />
);

export const Default = Template.bind({});

export const FirstChallengeAvailable = Template.bind({});
FirstChallengeAvailable.args = {
  challenges,
  currentChallenge: "deploy-nginx"
};
