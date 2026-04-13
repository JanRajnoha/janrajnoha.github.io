export default function Hero() {
  return (
    <header className="masthead" id="page-top">
      <div className="masthead-overlay" />
      <div className="container text-center text-white">
        <img
          className="masthead-avatar rounded-circle mb-4"
          src="/img/prof6.jpg"
          alt="Jan Rajnoha"
        />
        <h1 className="masthead-heading gradient-text text-uppercase mb-0">Jan Rajnoha</h1>
        <div className="masthead-divider mx-auto my-3" />
        <p className="masthead-subheading mb-5">
          Developer &middot; Entrepreneur &middot; Lecturer
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a className="btn btn-primary btn-lg px-4" href="#portfolio">
            View Portfolio
          </a>
          <a className="btn btn-outline-light btn-lg px-4" href="#about">
            About Me
          </a>
        </div>
      </div>
      <a className="scroll-indicator" href="#portfolio" aria-label="Scroll to portfolio">
        <i className="fas fa-chevron-down" />
      </a>
    </header>
  );
}
