const NewsLetter = () => {
  return (
    <div className="flex items-center gap-10 my-10 relative">
      <div className="absolute inset-0 bg-yellow-500 opacity-90"></div>

      <div
        className="hero  min-h-[50vh] relative"
        style={{
          backgroundImage: "url(https://i.ibb.co/tZxMPp4/newsletter-bg2.png)",
        }}
      >
        <div className=""></div>
      </div>

      <div className="w-full hero-content text-neutral-content ">
        <form className="">
          <header className="footer-title text-4xl font-bold text-black">
            Join Our Newsletter
          </header>
          <fieldset className="form-control max-w-md">
            <label className="label">
              <span className="label-text py-3 text-base font-medium text-justify">
                A lectus ac pulvinar tincidunt accumsan. Ullamcorper dolor at
                lectus sed facilisis hac. Molestie aliquam ut blandit nibh
                vulputate.
              </span>
            </label>
            <div className="space-y-2 ">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="input input-bordered w-full pr-16 rounded-none"
              />
              <button className="btn text-white btn-primary    w-full rounded-none">
                Subscribe Now
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
