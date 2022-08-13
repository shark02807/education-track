import Lock from "../../../lib/atoms/lock/Lock";
import Button from "../../../lib/atoms/button/Button";
import { ButtonType } from "../../../lib/atoms/button/Button.types";
import { LockStatus } from "../../../lib/atoms/lock/Lock.types";
import { Challenge } from "../../../model/challenge";

interface IChallengeCard {
  challenge: Challenge;
  isBlocked?: boolean;
  className?: string;
}

const ChallengeCard = ({ challenge, isBlocked = true, className }: IChallengeCard) => {
  return (
    <div className={`flex ring-1 ring-gray-200 rounded-lg p-4 h-28 ${className}`} role="challenge-card">
      <div className="flex items-center">
        <Lock className="mr-6" status={isBlocked ? LockStatus.Closed : LockStatus.Open} />
      </div>
      <div className="flex flex-col justify-center grow pr-6">
        <p className="text-base font-semibold text-ellipsis overflow-hidden w-full max-h-6">{challenge.title}</p>
        <p className="text-sm leading-7 font-normal text-ellipsis overflow-hidden w-full max-h-14">{challenge.description}</p>
      </div>
      <div className="flex items-center">
        <Button type={ButtonType.Text} className="text-sm font-normal">Edit</Button>
        <Button
          type={isBlocked ? ButtonType.Default : ButtonType.Filled}
          className="text-sm font-semibold"
        >
          {isBlocked ? "Skip to" : "Restart"}
        </Button>
      </div>
    </div>
  );
};

export default ChallengeCard;
