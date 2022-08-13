import { useEffect } from "react";
import { useContentContext } from "../../context/content/Content";
import ContentBanner from "../../molecules/content-banner/ContentBanner";
import ContentCard from "../../molecules/content-card/ContentCard";

const Content = () => {
  const { tracks, loadTracks } = useContentContext();

  useEffect(() => {
    loadTracks();
  }, [loadTracks]);

  return (
    <div className="flex flex-col w-full">
      <ContentBanner
        logoSrc="http://cdn.onlinewebfonts.com/svg/img_314828.png"
        title="Online interactive IT learning platform"
        subtitle="Create sandbox environments using real infrastructure to train your teams, customers and prospects. Define challenges to guide users and let them discover the true value of your product."
        className="mb-4"
      />
      <div className="grid grid-cols-3 gap-3">
        {tracks?.map((track) => {
          return <ContentCard track={track} />;
        })}
      </div>
    </div>
  );
};

export default Content;
