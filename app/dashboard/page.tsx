import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

const DashboardPage: React.FC = () => {
  return (
    <div className="w-full h-full p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <h3>
        Go to <b>Adventures</b> to check out the first feature!
      </h3>
    </div>
  );
};

export default DashboardPage;
