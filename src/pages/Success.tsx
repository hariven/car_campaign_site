import type { FC } from "react";
import { Link } from "react-router-dom";

const SuccessPage: FC = () => {
  return (
    <main 
      className="h-screen flex flex-col justify-center items-center bg-green-50 px-4" 
      role="main" 
      aria-labelledby="success-title"
    >
      <h1 
        id="success-title" 
        className="text-4xl font-bold text-green-600 text-center"
      >
        🎉 Registration Successful!
      </h1>

      <p className="mt-4 text-gray-700 text-lg text-center">
        Thank you for joining our car sale campaign.
      </p>

      {/* Accessible link */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        aria-label="Go back to the home page"
      >
        Back to Home
      </Link>
    </main>
  );
};

export default SuccessPage;
