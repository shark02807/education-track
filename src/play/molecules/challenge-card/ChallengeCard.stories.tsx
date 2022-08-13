import { ComponentMeta, ComponentStory } from "@storybook/react";
import ChallengeCard from "./ChallengeCard";

export default {
  title: "Play/Molecules/ChallengeCard",
  component: ChallengeCard,
  args: {
    challenge: {
      title: "Deploy NGINX",
      description: "Enable HashiCorp repos in a Unbutu VM and a CentOS VM. Explore our first challenge",
    },
  },
} as ComponentMeta<typeof ChallengeCard>;

const Template: ComponentStory<typeof ChallengeCard> = (args) => (
  <ChallengeCard {...args} />
);

export const Blocked = Template.bind({});
Blocked.args = {
  isBlocked: true
};

export const Available = Template.bind({});
Available.args = {
  isBlocked: false
};
