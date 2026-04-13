const SKILLS = [
  '.NET / C#', 'Windows App SDK', 'ASP.NET Core', 'Azure',
  'REST API', 'Blazor', 'UWP / WPF', 'MS SQL Server',
  'DevOps / YAML', 'CI/CD', 'Python',
];

export default function About() {
  return (
    <section className="section-padding" id="about">
      <div className="container">
        <h2 className="section-heading gradient-text text-uppercase mb-2">About</h2>
        <div className="section-divider mb-5" />

        <div className="row align-items-start g-5">

          {/* Left col — photo + skills */}
          <div className="col-lg-4 text-center text-lg-start">
            <img
              className="about-photo mb-4"
              src="/img/prof6.jpg"
              alt="Jan Rajnoha"
              loading="lazy"
            />
            <div className="skills-wrap">
              {SKILLS.map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>

          {/* Right col — bio + CV */}
          <div className="col-lg-8">
            <p className="lead mb-4">
              My name is Jan Rajnoha and I am the creator of{' '}
              <strong>Cloud Cash</strong> — a Point of Sale system originally
              built for my gastronomic project that grew into a full management
              suite for any gastronomic establishment.
            </p>
            <p className="lead mb-4">
              I am co-founder of <strong>Para Bellum Lounge</strong>, a shisha
              bar in Brno. In 2021 my friend and I founded the bar, specialising
              in hookah, fresh drinks, and homemade cakes.
            </p>
            <p className="lead mb-4">
              As a full-time <strong>.NET developer</strong> I focus on desktop
              and web apps (.NET / Blazor), Azure cloud solutions, MS SQL Server,
              and DevOps / YAML. I have worked at IT Spektrum, CHAPS Ltd,
              Alza.cz, Kiwi.com (Python), and Itixo s.r.o. (Team Leader).
              Currently contributing as a Software Developer at{' '}
              <strong>Notino</strong>.
            </p>
            <p className="lead mb-5">
              Alongside my professional career I have lectured at the{' '}
              <strong>Brno University of Technology</strong>, teaching
              Personality Psychology and Communication Skills.
            </p>

            <div className="d-flex align-items-center gap-3 flex-wrap">
              <span className="cv-label text-uppercase fw-bold">Download CV</span>
              <a
                className="btn btn-outline-light"
                href="/docs/CV-cz.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-download me-2" />Czech
              </a>
              <a
                className="btn btn-outline-light"
                href="/docs/CV-en.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-download me-2" />English
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
