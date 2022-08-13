import Profile from "../../atoms/profile/Profile";

interface IAuthors {
  srcList: string[];
}

const Authors = ({ srcList }: IAuthors) => {
  return (
    <span className="flex" role="authors">
      {srcList?.map((src, index) => (
        <Profile key={index} src={src} alt="" className={`${index && "-mr-2"}`} />
      ))}
    </span>
  );
};

export default Authors;
