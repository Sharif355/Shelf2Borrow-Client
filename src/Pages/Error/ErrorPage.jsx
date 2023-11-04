import Lottie from "lottie-react";
import error from "../../../public/error.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-40 space-y-2">
      <Lottie
        className="w-96 md:w-[500px] lg:w-[1000px] lg:h-[500px]"
        animationData={error}
      ></Lottie>
      <h1 className="text-lg font-semibold">
        The Page You Looking Doesn&apos;t Exist.
      </h1>
      <Link to="/">
        <button className="btn normal-case rounded-lg">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
