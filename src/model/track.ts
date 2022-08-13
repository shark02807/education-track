import { Challenge } from "./challenge";

export interface Track {
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
    currentChallenge: string | undefined;
  };
  challenges: Challenge[];
}

export type TrackShort = Omit<Track, "durationSeconds" | "description" | "progress" | "challenges">

// Remove this for the assessment
export function createTrack(track: any): Track {
  const { slug, durationSeconds, name, description, iconSrc, developers, progress, challenges } = track;

  return { slug, durationSeconds, name, description, iconSrc, developers, progress, challenges };
}
