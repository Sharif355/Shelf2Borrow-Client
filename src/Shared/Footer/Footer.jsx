const Footer = () => {
  return (
    <div>
      <footer className="footer text-base  lg:p-10 bg-base-200 dark:bg-black text-base-content dark:text-white">
        <nav>
          <img
            className="w-60 "
            src="https://i.ibb.co/H4cPk8b/final-Copy.png"
            alt=""
          />
          <p>Shelf2Borrow Pvt.Ltd, Reliable Since 2000.</p>
          <p>All right reserved to &copy;Shelf2Borrow.</p>
        </nav>
        <nav className="font-medium">
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="font-medium">
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
