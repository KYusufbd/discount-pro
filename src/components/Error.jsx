import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-center p-6">
      <img
        src="/not-found.png"
        alt="404 Illustration"
        className="w-40 h-40 mb-4"
      />
      <h1 className="text-4xl font-bold text-primary mb-2">
        Oops! Page Not Found
      </h1>
      <p className="text-secondary mb-6">
        Looks like you took a wrong turn. But don&apos;t worry, we&apos;ve got
        plenty of deals for you!
      </p>

      <div className="flex space-x-4">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
        <Link to="/brands" className="btn btn-secondary">
          Browse Coupons
        </Link>
      </div>
    </div>
  );
};

export default Error;
