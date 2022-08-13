import { BrowserRouter } from "react-router-dom";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ContentCard from "./ContentCard";

export default {
  title: "Play/Molecules/ContentCard",
  component: ContentCard,
  args: {
    track: {
      name: "Track 1",
      slug: "track-1",
      developers: [
        {
          name: "John",
          slug: "john",
          profileSrc: "https://picsum.photos/64?random=1",
        },
        {
          name: "Jack",
          slug: "jack",
          profileSrc: "https://picsum.photos/64?random=1",
        },
        {
          name: "Jane",
          slug: "jane",
          profileSrc: "https://picsum.photos/64?random=1",
        },
      ],
    },
  },
} as ComponentMeta<typeof ContentCard>;

const Template: ComponentStory<typeof ContentCard> = (args) => (
  <ContentCard {...args} />
);

export const Default = Template.bind({});
Default.decorators = [(Story) => <BrowserRouter>{Story()}</BrowserRouter>];
