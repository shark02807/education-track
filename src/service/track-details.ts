import { Track } from "../model/track";

export interface ITrackDetailsService {
  /**
   * Requests track details from.
   * @returns The requested track.
   */
  getTrackDetails(trackSlug: string): Promise<Track>;
}

const getTrackDetails = async (trackSlug: string): Promise<Track> => {
  const response = await fetch(`https://api.education-track.com/track/${trackSlug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const trackDetails = await response.json();

  return trackDetails;
};

export default {
  getTrackDetails,
} as ITrackDetailsService;
