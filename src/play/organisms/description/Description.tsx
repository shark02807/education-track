import TrackShortInfo from "../../../lib/molecules/track-short-info/TrackShortInfo";

interface IDescription {
  durationSeconds: number;
  challengesAmount: number;
  description: string;
}

const Description = ({ durationSeconds, challengesAmount, description }: IDescription) => {
  return (
    <div className="flex flex-col ring-1 ring-gray-200 p-4 rounded-lg gap-3 bg-white" role="description">
      <h2 className="font-medium text-xl leading-7">Description</h2>
      <TrackShortInfo
        durationSeconds={durationSeconds}
        challengesAmount={challengesAmount}
        className="my-2"
      />
      <p className="text-gray-700 mb-1 leading-7">{description}</p>
    </div>
  );
};

export default Description;
