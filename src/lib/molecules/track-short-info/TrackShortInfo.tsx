import cn from "classnames";
import Icon from "../../../lib/atoms/icon/Icon";
import ClockSVG from "./assets/clock.svg";
import FlagDiagonalSVG from "./assets/flag-diagonal.svg";
import { secondsToMinutes } from "../../../helper/utils";

interface ITrackShortInfo {
  durationSeconds: number;
  challengesAmount: number;
  className?: string;
}

const TrackShortInfo = ({ durationSeconds, challengesAmount, className }: ITrackShortInfo) => {
  const minutes = secondsToMinutes(durationSeconds);
  return (
    <span className={cn("h-11 px-2 bg-gray-50 flex items-center rounded-lg", className)} role="track-short-info">
      <Icon src={ClockSVG} alt="" className="h4 w-4 mr-2" role="clock-icon" />
      <span className="text-sm font-courier mr-5">{minutes} minutes</span>
      <Icon src={FlagDiagonalSVG} alt="" className="h4 w-4 mr-2" role="flag-icon" />
      <span className="text-sm font-courier">{challengesAmount} challenges</span>
    </span>
  );
};

export default TrackShortInfo;
