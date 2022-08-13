import ChallengeCard from "../challenge-card/ChallengeCard";
import { Challenge, createChallenge } from "../../../model/challenge";

interface IChallengeList {
  challenges: Challenge[];
  currentChallenge?: string | undefined;
}

const ChallengeList = ({ challenges, currentChallenge }: IChallengeList) => {
  const currentChallengeIndex = challenges.findIndex(challenge => challenge.slug === currentChallenge);
  return (
    <div className="flex flex-col gap-y-6" role="challenges-list">
      {challenges?.map((challenge, index) => (
        <ChallengeCard
          key={challenge.slug}
          challenge={createChallenge(challenge)}
          isBlocked={currentChallengeIndex === -1 || index > currentChallengeIndex}
        />
      ))}
    </div>
  );
};

export default ChallengeList;
