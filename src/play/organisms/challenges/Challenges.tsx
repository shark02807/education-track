import ChallengeList from "../../molecules/challenge-list/ChallengeList";
import { Challenge } from "../../../model/challenge";

interface IChallenges {
  challenges: Challenge[];
  currentChallenge?: string | undefined;
}

const Challenges = ({ challenges, currentChallenge }: IChallenges) => {
  return (
    <div className="flex flex-col ring-1 ring-gray-200 p-4 rounded-lg gap-3 bg-white" role="challenges">
      <h2 className="font-medium text-xl leading-7">Challenges</h2>
      <p className="text-gray-700 mb-1">
        Below are the challenges. Click the first one to start the track
      </p>
      <ChallengeList challenges={challenges} currentChallenge={currentChallenge} />
    </div>
  );
};

export default Challenges;
