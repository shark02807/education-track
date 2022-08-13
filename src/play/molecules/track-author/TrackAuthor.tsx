import Profile from "../../../lib/atoms/profile/Profile";

interface ITrackAuthor {
  author: { name: string; slug?: string; profileSrc: string };
  className?: string;
}

const TrackAuthor = ({ author, className }: ITrackAuthor) => {
  return (
    <div className={`flex ring-1 ring-gray-200 rounded-lg p-4 ${className}`} role="track-author">
      <Profile
        src={author.profileSrc}
        alt={author.name}
        className="h-10 w-10 mr-4"
      />

      <div className="flex flex-col justify-center">
        <p>{author.name}</p>
        {author.slug && <p className="text-blue-700">@{author.slug}</p>}
      </div>
    </div>
  );
};

export default TrackAuthor;
