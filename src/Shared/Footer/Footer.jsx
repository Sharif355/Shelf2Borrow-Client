const Footer = () => {
  return (
    <div>
      <footer className="footer lg:p-10 bg-base-200 dark:bg-black text-base-content dark:text-white">
        <nav>
          <img
            className="w-60 "
            src="https://i.ibb.co/H4cPk8b/final-Copy.png"
            alt=""
          />
          <p>Shelf2Borrow Pvt.Ltd, Reliable Since 2000.</p>
          <p>All right reserved to &copy;Shelf2Borrow.</p>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
