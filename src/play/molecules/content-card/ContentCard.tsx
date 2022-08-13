import { useMemo } from "react";
import { Link } from "react-router-dom";
import Button from "../../../lib/atoms/button/Button";
import Card from "../../../lib/atoms/card/Card";
import Icon from "../../../lib/atoms/icon/Icon";
import Authors from "../../../lib/molecules/authors/Authors";
import { TrackShort } from "../../../model/track";
import horizontalDots from "./assets/horizontal-dots.svg";

interface IContentCard {
  track: TrackShort;
}

const ContentCard = ({ track }: IContentCard) => {
  const developersSrc = useMemo(
    () => track.developers.map((developer) => developer.profileSrc),
    [track]
  );

  return (
    <Card>
      <div className="flex justify-between mb-2">
        <span className="flex justify-center items-center h-8 w-8 bg-gray-200 rounded-md">
          <Icon className="p-1" src={track.iconSrc} alt="" />
        </span>

        <span className="flex justify-center items-center cursor-pointer ring-1 h-8 w-8 ring-gray-200 rounded-md">
          <Icon src={horizontalDots} alt="" />
        </span>
      </div>
      <div className="mb-10">
        <h1 className="text-xl font-semibold">{track.name}</h1>
        <p className="text-md">/{track.slug}</p>
      </div>
      <div className="flex justify-between">
        <span>
          <Authors srcList={developersSrc} />
        </span>
        <Button>
          <Link to={`/track/${track.slug}`}>View details</Link>
        </Button>
      </div>
    </Card>
  );
};

export default ContentCard;
