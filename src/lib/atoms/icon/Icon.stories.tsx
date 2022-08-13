import { ComponentMeta, ComponentStory } from "@storybook/react";
import icon from "./assets/logo.svg";
import Icon from "./Icon";

export default {
  title: "Library/Atoms/Icon",
  component: Icon,
  args: {
    src: icon,
    alt: "An icon!",
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
