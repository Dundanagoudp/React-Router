import { useLoaderData, useNavigate } from "react-router-dom";

export const MovieDetails = () => {
  const moviesData = useLoaderData();
  const navigate = useNavigate(); // For the go-back functionality

  const {
    Actors,
    Poster,
    Title,
    Runtime,
    Genre,
    Type,
    Year,
    Plot,
    BoxOffice,
    imdbID,
    Awards,
    imdbRating,
  } = moviesData;

  // Calculate hours and minutes for runtime
  const totalMinutes = parseInt(Runtime.replace("min", "").trim());
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const formattedTime = `${hours}hr ${minutes}min`;

  // Go back handler
  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2A2C30] to-[#4B4D52] text-white py-10 px-6">
      {/* Go Back Button */}
      

      {/* Main Container */}
      <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row gap-6 p-6">
        {/* Poster Section */}
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <img
            src={Poster}
            alt={Title}
            className="rounded-lg shadow-lg object-cover"
            style={{ width: '240px', height: '300px' }} // Fixed size
          />
        </div>

        {/* Movie Information Section */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-4xl font-bold mb-4 text-yellow-300">
            {Title} ({Year})
          </h2>

          {/* Movie Details */}
          <div className="flex flex-wrap gap-4 mb-4">
            <span className="bg-gray-700 text-gray-200 text-sm font-semibold px-3 py-1 rounded">
              Type: {Type}
            </span>
            <span className="bg-gray-700 text-gray-200 text-sm font-semibold px-3 py-1 rounded">
              IMDb Rating: {imdbRating}
            </span>
            <span className="bg-gray-700 text-gray-200 text-sm font-semibold px-3 py-1 rounded">
              Runtime: {formattedTime}
            </span>
            <span className="bg-gray-700 text-gray-200 text-sm font-semibold px-3 py-1 rounded">
              Genre: {Genre}
            </span>
          </div>

          {/* Plot Section */}
          <p className="text-gray-400 mb-4">
            <strong>Plot:</strong> <span className="text-gray-200">{Plot}</span>
          </p>

          <p className="text-gray-400 mb-4">
            <strong>Actors:</strong> <span className="text-gray-200">{Actors}</span>
          </p>

          <p className="text-gray-400 mb-4">
            <strong>Awards:</strong> <span className="text-gray-200">{Awards ? Awards : "N/A"}</span>
          </p>

          <p className="text-gray-400 mb-4">
            <strong>Box Office:</strong> <span className="text-gray-200">{BoxOffice ? BoxOffice : "N/A"}</span>
          </p>

          <button
        className="mb-6 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-500 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105"
        onClick={handleGoBack}
      >
        Go Back
      </button>       
       </div>
      </div>
    </div>
  );
};
