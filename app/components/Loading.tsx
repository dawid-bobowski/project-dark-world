import { ScaleLoader } from "react-spinners";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-dvh z-50 bg-opacity-70 bg-black">
      <ScaleLoader color="#fff" height={32} />
    </div>
  );
};

export default Loading;
