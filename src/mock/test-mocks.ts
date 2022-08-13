export const track = {
  slug: "track-1",
  durationSeconds: 60,
  name: "Track 1",
  description: "description",
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
};

export const tabs = [
  {
    name: "Description",
    content: "Tab Description content"
  }, 
  {
    name: "Track details",
    content: "Tab Track details content"
  },
  {
    name: "Visibility",
    content: "Tab Visibility content"
  },
  {
    name: "Sandbox",
    content: "Tab Sandbox content"
  },
  {
    name: "Statistics",
    content: "Tab Statistics content"
  },
  {
    name: "Happiness",
    content: "Tab Happiness content"
  },
  {
    name: "Embed",
    content: "Tab Embed content"
  }
];

export const challenges = [
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
];
