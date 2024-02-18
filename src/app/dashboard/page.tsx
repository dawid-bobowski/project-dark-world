"use client";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-blue-500 text-white p-4 text-lg font-semibold">
        Dashboard
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4">
        {/* Content goes here */}
        <p>Welcome to your Dashboard</p>
        {/* Add more content as needed */}
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-800 text-white p-4 flex justify-around">
        <button>Home</button>
        <button>Settings</button>
        <button>Profile</button>
      </div>
    </div>
  );
};

export default Page;
