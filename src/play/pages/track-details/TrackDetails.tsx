import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTrackDetailsContext } from "../../context/track-details/TrackDetails";
import Button from "../../../lib/atoms/button/Button";
import { ButtonType } from "../../../lib/atoms/button/Button.types";
import TabbedContent from "../../organisms/tabbed-content/TabbedContent";
import DescriptionContent from "./tabbed-content/DescriptionContent"
import Banner from "./assets/banner.png";

const TrackDetails = () => {
  let { trackSlug } = useParams();

  const { track, isLoading, loadTrack } = useTrackDetailsContext();

  useEffect(() => {
    loadTrack(trackSlug || "");
  }, [loadTrack, trackSlug]);

  const tabs = [
    {
      name: "Description",
      content: <DescriptionContent track={track} />
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
  ]

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex flex-col w-full pb-28" role="track-details">
      <img src={Banner} alt="" className="w-full-extend max-w-fit -ml-10" />
      <div className="flex">
        <div className="w-40 h-40 -mt-10 mr-4 flex items-center justify-center ring-1 ring-gray-200 rounded-lg bg-white">
          <img src={track?.iconSrc} alt="" className="h-16" role="track-icon" />
        </div>
        <div className="flex flex-col grow sm:flex-row">
          <div className="flex flex-col justify-center grow">
            <p className="text-xl	font-medium">{track?.name}</p>
            {/* <p className="text-lg font-light">{track?.description}</p> */}
          </div>
          <div className="flex items-center justify-end">
            <Button type={ButtonType.Default} className="text-sm font-semibold">Share track</Button>
            <Button type={ButtonType.Filled} className="text-sm font-semibold ml-4">Start track</Button>
          </div>
        </div>
      </div>
      <TabbedContent tabs={tabs} className="mt-6" />
    </div>
  );
};

export default TrackDetails;
