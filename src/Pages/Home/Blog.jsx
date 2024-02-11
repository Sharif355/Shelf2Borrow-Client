import { Link } from "react-router-dom";
import { WiDirectionRight } from "react-icons/wi";

const Blog = () => {
  return (
    <div className="my-10 ">
      <div className="flex flex-col justify-center items-center my-5">
        <p className="p-2  font-medium border uppercase bg-[#F8F9FA] dark:bg-black">
          READ MORE
        </p>
        <h2 className="text-3xl font-bold">Shelf2Borrow Blogs</h2>
        <p className="text-lg text-gray-600 dark:text-gray-100 mb-4">
          Read More Daily, Know More!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {/* Card1 */}
        <div className="max-w-md bg-white border rounded-2xl">
          <Link>
            <img
              className="max-w-md rounded-t-2xl"
              src="https://i.ibb.co/XjxdzX9/blog9.jpg"
              alt="blog-1"
            />
          </Link>
          <Link>
            <h4 className="font-semibold text-2xl px-5 py-3 text-black  ">
              Ullamcorper dolor lectus accumsan
            </h4>
          </Link>
          <p className="pl-5 pb-4 text-base text-stone-400">
            Wahyulloh - July 2, 2021 - No Comments
          </p>
        </div>
        {/* Card2 */}
        <div className="max-w-md bg-white border rounded-2xl">
          <Link>
            <img
              className="max-w-md rounded-t-2xl"
              src="https://i.ibb.co/wJYzXQs/blog8.jpg"
              alt="blog-1"
            />
            <h4 className="font-semibold text-2xl px-5 py-3 text-black ">
              Rutrum sit vestibulum quisque velit.
            </h4>
          </Link>
          <p className="pl-5 pb-4 text-base text-stone-400">
            Wahyulloh - July 2, 2021 - No Comments
          </p>
        </div>
        {/* Card3 */}
        <div className="max-w-md bg-white border rounded-2xl">
          <Link>
            <img
              className="max-w-md rounded-t-2xl"
              src="https://i.ibb.co/CV8FQJ5/blog7.jpg"
              alt="blog-1"
            />
            <h4 className="font-semibold text-2xl px-5 py-3 text-black  ">
              Sed elit sed dolor nulla volutpat .
            </h4>
          </Link>
          <p className="pl-5 pb-4 text-base text-stone-400">
            Wahyulloh - July 2, 2021 - No Comments
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <Link to="/">
          <button className="btn mt-5 flex items-center justify-center gap-1 border-none btn-outline ">
            View All Blogs
            <WiDirectionRight className="text-5xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
