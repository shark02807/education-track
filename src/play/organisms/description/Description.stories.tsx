import { ComponentMeta, ComponentStory } from "@storybook/react";
import Description from "./Description";

export default {
  title: "Play/Organisms/Description",
  component: Description,
  args: {
    durationSeconds: 3000,
    challengesAmount: 4,
    description: `Learn how to build Kubernetes-based tracks with this template.

    This track demonstrates how to:
    
    Provision a single node k3s cluster on a virtual machine
    Deploy a webserver (NGINX) on Kubernetes`
  },
} as ComponentMeta<typeof Description>;

const Template: ComponentStory<typeof Description> = (args) => (
  <Description {...args} />
);

export const Default = Template.bind({});
