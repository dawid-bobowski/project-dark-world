import { EXPEDITIONS } from "@/lib/constants";

const ExpeditionsPage: React.FC = () => {
  return (
    <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {EXPEDITIONS.map(({ title, description, time }) => (
        <div
          key={title}
          className="w-full h-40 p-4 bg-black flex flex-col justify-between shadow-md rounded-lg"
        >
          <div className="w-full flex justify-between">
            <p>{title}</p>
            <p>time: {time / 60}h</p>
          </div>
          <div className="w-full flex">{description}</div>
          <button className="py-1 px-4 self-end text-black bg-white rounded sm:hover:bg-gray-300">
            Begin
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExpeditionsPage;
