import cn from "classnames";
import { LockStatus } from "./Lock.types";
import lockOpen from "./assets/lock-open.svg";
import lockClosed from "./assets/lock-closed.svg";

interface ILock {
  status?: LockStatus;
  className?: string;
}

const statusIconMap = {
  [LockStatus.Open]: lockOpen,
  [LockStatus.Closed]: lockClosed
}

const Lock = ({ status = LockStatus.Closed, className }: ILock) => {
  return (
    <div
      className={cn("w-12 h-12 px-3 py-3 rounded-xl", className, {
        ["bg-gray-50"]: status === LockStatus.Closed,
        ["bg-purple-50"]: status === LockStatus.Open
      })}
      role="lock"
    >
      <img src={statusIconMap[status]} alt="" />
    </div>
  );
};

export default Lock;
