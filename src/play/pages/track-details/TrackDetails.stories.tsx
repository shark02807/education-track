import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Track } from "../../../model/track";
import { TrackDetailsContextProvider } from "../../context/track-details/TrackDetails";
import TrackDetails from "./TrackDetails";

export default {
  title: "Play/Pages/TrackDetails",
  component: TrackDetails,
  decorators: [
    (stories) => (
      <div className="flex flex-1 items-center w-full max-w-5xl m-auto">
        <TrackDetailsContextProvider
          trackDetailsService={{
            getTrackDetails: () =>
              Promise.resolve<Track>(
                {
                  slug: "track-1",
                  durationSeconds: 500,
                  name: "Track 1",
                  description: `Learn how to build Kubernetes-based tracks with this template.

      This track demonstrates how to:
      
      Provision a single node k3s cluster on a virtual machine
      Deploy a webserver (NGINX) on Kubernetes`,
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
                  progress: {
                    currentChallenge: undefined,
                  },
                  challenges: [
                    {
                      slug: "deploy-nginx",
                      title: "Deploy NGINX",
                      description: "Everything starts with a web server",
                    },
                    {
                      slug: "expose-nginx",
                      title: "Expose the NGINX service",
                      description: "Use a NodePort to expose the NGINX web server",
                    },
                    {
                      slug: "viewing-nginx",
                      title: "Viewing NGINX",
                      description: "View the service in an embedded tab",
                    },
                    {
                      slug: "kubernetes-dashboard",
                      title: "Kubernetes Dashboard",
                      description: "Expose the kubernetes dashboard in a tab",
                    },
                  ]
                }
              ),
          }}
        >
          {stories()}
        </TrackDetailsContextProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof TrackDetails>;

const Template: ComponentStory<typeof TrackDetails> = () => <TrackDetails />;

export const Default = Template.bind({});
