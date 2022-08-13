interface IMainTemplate {
  children: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const MainTemplate = ({ children, left, right }: IMainTemplate) => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      {left && <aside>{left}</aside>}
      <main className="flex flex-1 items-center w-full max-w-5xl m-auto px-5 lg:px-0">
        {children}
      </main>
      {right && <aside>{right}</aside>}
    </div>
  );
};

export default MainTemplate;
