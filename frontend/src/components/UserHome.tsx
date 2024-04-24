import { Link } from "react-router-dom";
import { FaLaptop, FaMapMarkerAlt, FaUsersCog } from "react-icons/fa";

const UserHome = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center py-12">
      <h1 className="text-4xl font-bold text-white mb-10">User Home Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Link
          to="/marsRover"
          className="rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 hover:scale-105"
        >
          <div className="p-8 flex flex-col items-center">
            <img
              src={
                "data:image/jpeg;base64,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"
              }
              alt="Mars Rover"
              className="w-32 h-32 object-cover rounded-full mb-6"
            />
            <FaLaptop className="text-6xl text-indigo-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Mars Rover Photos
            </h2>
            <p className="text-gray-600 text-center">
              Explore stunning photos captured by NASA's Mars rovers.
            </p>
          </div>
        </Link>
        <Link
          to="/cmeAnalysis"
          className="rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 hover:scale-105"
        >
          <div className="p-8 flex flex-col items-center">
            <img
              src={
                "data:image/png;base64,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"
              }
              alt="CME Analysis"
              className="w-32 h-32 object-cover rounded-full mb-6"
            />
            <FaMapMarkerAlt className="text-6xl text-indigo-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              CME Analysis
            </h2>
            <p className="text-gray-600 text-center">
              Analyze and monitor coronal mass ejections from the sun.
            </p>
          </div>
        </Link>
        <Link
          to="/apodViewer"
          className="rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 hover:scale-105"
        >
          <div className="p-8 flex flex-col items-center">
            <img
              src={
                "data:image/jpeg;base64,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"
              }
              alt="APOD Viewer"
              className="w-32 h-32 object-cover rounded-full mb-6"
            />
            <FaUsersCog className="text-6xl text-indigo-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Astronomy Picture of the Day
            </h2>
            <p className="text-gray-600 text-center">
              Explore breathtaking astronomical images and videos.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserHome;
