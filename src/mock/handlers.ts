import { rest } from "msw";
import { TrackShort } from "../model/track";
import { User } from "../model/user";

const USER_ID = "user-id";
const USER_NAME = "John Doe";

const TRACKS: {
  slug: string;
  durationSeconds: number;
  name: string;
  description: string;
  iconSrc: string;
  developers: {
    name: string;
    slug: string;
    profileSrc: string;
  }[];
  progress: {
    currentChallenge?: string;
  };
  challenges: {
    slug: string;
    title: string;
    description: string;
  }[];
}[] = [
    {
      slug: "kubernetes",
      durationSeconds: 500,
      name: "Kubernetes",
      description: `Learn how to build Kubernetes-based tracks with this template.

    This track demonstrates how to:
    
    Provision a single node k3s cluster on a virtual machine
    Deploy a webserver (NGINX) on Kubernetes`,
      iconSrc: "https://cncf-branding.netlify.app/img/projects/kubernetes/icon/color/kubernetes-icon-color.png",
      developers: [
        {
          name: "Victor Nielsen",
          slug: "vfn",
          profileSrc: "https://picsum.photos/64?random=2",
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
      ],
    },
    {
      slug: "helm",
      durationSeconds: 200,
      name: "Helm Chart",
      description: "",
      iconSrc:
        "https://cncf-branding.netlify.app/img/projects/helm/horizontal/color/helm-horizontal-color.png",
      developers: [
        {
          name: "Bruno",
          slug: "bruno",
          profileSrc: "https://picsum.photos/64?random=5",
        },
      ],
      progress: {
        currentChallenge: undefined,
      },
      challenges: [
        {
          slug: "check-helm-chart",
          title: "Check that the NGINX chart is installed",
          description:
            "A setup script has used helm to install an NGINX chart. Verify that it worked!",
        },
      ],
    },
    {
      slug: "vs-code",
      durationSeconds: 400,
      name: "VS Code & Typescript",
      iconSrc: "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png",
      description: `A basic track for editing a TypeScript application and running tests for it. The track checks are failing based on the test results.

    This track demonstrates how to:
    
    Add IDE code editor features to a track
    Use a code server container to serve a VSCode IDE
    Run a unit test suite in a check script`,
      developers: [
        {
          name: "Victor Nielsen",
          slug: "vfn",
          profileSrc: "https://picsum.photos/64?random=2",
        },
        {
          name: "Sufian",
          slug: "sufian",
          profileSrc: "https://picsum.photos/64?random=4",
        },
        {
          name: "Bruno",
          slug: "bruno",
          profileSrc: "https://picsum.photos/64?random=5",
        },
      ],
      progress: {
        currentChallenge: undefined,
      },
      challenges: [
        {
          slug: "passing-tests",
          title: "Passing tests",
          description: "Learn how to run and pass tests",
        },
      ],
    },
  ];

export const handlers = [
  rest.post("https://api.education-track.com/login", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ id: USER_ID, name: USER_NAME } as User)
    );
  }),

  rest.get("https://api.education-track.com/content", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        TRACKS.map<TrackShort>((track) => ({
          name: track.name,
          slug: track.slug,
          developers: track.developers,
          iconSrc: track.iconSrc,
        }))
      )
    );
  }),

  rest.get<any, { trackSlug: string }, any>(
    "https://api.education-track.com/track/:trackSlug",
    (req, res, ctx) => {
      const trackSlug = req.params.trackSlug;

      const foundTrack = TRACKS.find((x) => x.slug === trackSlug);

      if (foundTrack) {
        return res(ctx.status(200), ctx.json(foundTrack));
      } else {
        return res(ctx.status(404));
      }
    }
  ),
];
