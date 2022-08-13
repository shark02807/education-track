import { ComponentMeta, ComponentStory } from "@storybook/react";
import Lock from "./Lock";
import { LockStatus } from "./Lock.types";

export default {
  title: "Library/Atoms/Lock",
  component: Lock,
} as ComponentMeta<typeof Lock>;

const Template: ComponentStory<typeof Lock> = (args) => <Lock {...args} />;

export const Closed = Template.bind({});
Closed.args = {
  status: LockStatus.Closed
};

export const Open = Template.bind({});
Open.args = {
  status: LockStatus.Open
};
