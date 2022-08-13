import { TrackShort } from "../model/track";

export interface IContentService {
  /**
   * Requests all content from.
   * @returns The requested tracks.
   */
  getContent(): Promise<TrackShort[]>;
}

const getContent = async (): Promise<TrackShort[]> => {
  const response = await fetch("https://api.education-track.com/content", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const content = await response.json();

  return content;
};

export default {
  getContent,
} as IContentService;
