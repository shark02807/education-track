interface ICard {
  children: React.ReactNode;
}

const Card = ({ children }: ICard) => {
  return (
    <div className="flex flex-col p-4 bg-white ring-1 ring-gray-300 rounded-lg">
      {children}
    </div>
  );
};

export default Card;
