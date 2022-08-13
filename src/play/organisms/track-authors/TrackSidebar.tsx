import cn from "classnames";
import Button from "../../../lib/atoms/button/Button";
import TrackAuthor from "../../molecules/track-author/TrackAuthor";

interface ITrackSidebar {
  authors: { name: string; slug?: string; profileSrc: string }[];
  className?: string;
}

const TrackSidebar = ({ authors, className }: ITrackSidebar) => {
  return (
    <div
      className={cn("flex flex-col ring-1 ring-gray-200 p-4 rounded-lg gap-3 bg-white", className)}
      role="track-sidebar"
    >
      <h2 className="font-medium text-xl leading-7">Track Authors</h2>
      {authors?.map((author) => (
        <TrackAuthor author={author} key={author.name} />
      ))}

      <div className="flex justify-end">
        <Button>Add author</Button>
      </div>

      <hr />

      <h2 className="font-medium text-xl leading-7">Deploy track</h2>
      <p className="text-gray-700">
        After every change to the track environment or the lifecycle scripts,
        you will need to re-build the track once again.
      </p>

      <div className="flex justify-end">
        <Button>Rebuild track</Button>
      </div>
    </div>
  );
};

export default TrackSidebar;
