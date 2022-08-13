import { BrowserRouter } from "react-router-dom";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TrackShort } from "../../../model/track";
import { ContentContextProvider } from "../../context/content/Content";
import Content from "./Content";
import logo from "./assets/logo_white.svg";

export default {
  title: "Play/Pages/Content",
  component: Content,
  args: {
    team: {
      logoSrc: logo,
      title: "Online interactive IT learning platform",
      subtitle:
        "Create sandbox environments using real infrastructure to train your teams, customers and prospects.",
    },
  },
  decorators: [
    (stories) => (
      <BrowserRouter>
        <ContentContextProvider
          contentService={{
            getContent: () =>
              Promise.resolve<TrackShort[]>([
                {
                  slug: "track-1",
                  name: "Track 1",
                  iconSrc: "https://picsum.photos/64?random=5",
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
                {
                  slug: "track-2",
                  name: "Track 2",
                  iconSrc: "https://picsum.photos/64?random=5",
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
                {
                  slug: "track-3",
                  name: "Track 3",
                  iconSrc: "https://picsum.photos/64?random=5",
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
                {
                  slug: "track-4",
                  name: "Track 4",
                  iconSrc: "https://picsum.photos/64?random=5",
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
              ]),
          }}
        >
          {stories()}
        </ContentContextProvider>
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = () => <Content />;

export const Default = Template.bind({});
