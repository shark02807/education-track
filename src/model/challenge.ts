export interface Challenge {
  slug: string;
  title: string;
  description: string;
}

export function createChallenge(challenge: any): Challenge {
  const { slug, title, description } = challenge;

  return { slug, title, description };
}
