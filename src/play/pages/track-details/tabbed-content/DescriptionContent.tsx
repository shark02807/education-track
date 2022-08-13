import { Track } from "../../../../model/track";
import Description from "../../../organisms/description/Description";
import Challenges from "../../../organisms/challenges/Challenges";
import Button from "../../../../lib/atoms/button/Button";
import { ButtonType } from "../../../../lib/atoms/button/Button.types";
import TrackSidebar from "../../../organisms/track-authors/TrackSidebar";

interface IDescriptionContent {
  track: Track | undefined;
}

const DescriptionContent = ({ track }: IDescriptionContent) => {
  return (
    <>
      {
        track ? (
          <div className="flex w-full gap-x-4 flex-col md:flex-row" role="description-content">
            <div className="flex flex-col gap-y-4">
              <Description
                durationSeconds={track.durationSeconds}
                challengesAmount={track.challenges.length}
                description={track.description}
              />
              <Challenges
                challenges={track.challenges}
                currentChallenge={track.progress.currentChallenge}
              />
              <div className="justify-end flex">
                <Button
                  type={ButtonType.Default}
                  className="text-sm font-semibold"
                  role="change-order"
                >
                  Change challenge order
                </Button>
                <Button
                  type={ButtonType.Filled}
                  className="text-sm font-semibold ml-4"
                  role="add-challenge"
                >
                  Add new challenges
                </Button>
              </div>
            </div>
            <TrackSidebar authors={track.developers} className="min-w-89 w-full h-fit my-4 md:my-0 md:w-89" />
          </div>
        ) : null
      }
    </>
  );
};

export default DescriptionContent;
