const ExpeditionsPage: React.FC = () => {
  const items = Array.from({ length: 6 }, (_, i) => `Item ${i + 1}`);
  return (
    <div className="w-full h-full p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-full h-full bg-black flex justify-center items-center shadow-md rounded-lg md:cursor-pointer"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default ExpeditionsPage;
