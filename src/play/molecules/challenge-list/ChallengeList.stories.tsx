import { ComponentMeta, ComponentStory } from "@storybook/react";
import ChallengeList from "./ChallengeList";
import { challenges } from "../../../mock/test-mocks";

export default {
  title: "Play/Molecules/ChallengeList",
  component: ChallengeList,
  args: {
    challenges
  },
} as ComponentMeta<typeof ChallengeList>;

const Template: ComponentStory<typeof ChallengeList> = (args) => (
  <ChallengeList {...args} />
);

export const Default = Template.bind({});

export const FirstChallengeAvailable = Template.bind({});
FirstChallengeAvailable.args = {
  challenges,
  currentChallenge: "deploy-nginx"
};

export const SecondChallengeAvailable = Template.bind({});
SecondChallengeAvailable.args = {
  challenges,
  currentChallenge: "expose-nginx"
};
