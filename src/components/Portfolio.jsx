import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { projects } from '../data/projects.js';

export default function Portfolio() {
  const [active, setActive] = useState(null);

  return (
    <section className="section-padding" id="portfolio">
      <div className="container">
        <h2 className="section-heading text-center text-uppercase">Portfolio</h2>
        <div className="section-divider mx-auto mb-5" />

        <div className="row g-4">
          {projects.map((p) => (
            <div key={p.id} className="col-sm-6 col-lg-4">
              <PortfolioCard project={p} onClick={() => setActive(p)} />
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onHide={() => setActive(null)} />
    </section>
  );
}

/* ── Card ─────────────────────────────────────────── */
function PortfolioCard({ project, onClick }) {
  return (
    <div
      className="portfolio-card"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      aria-label={`${project.title} – view details`}
    >
      <img src={project.thumbnail ?? project.image} alt={project.title} loading="lazy" />
      <div className="portfolio-overlay">
        <i className="fas fa-magnifying-glass-plus fa-2x mb-2" />
        <span className="portfolio-card-title">{project.title}</span>
        <span className="portfolio-card-tag">{project.tags.join(' · ')}</span>
      </div>
    </div>
  );
}

/* ── Modal ────────────────────────────────────────── */
function ProjectModal({ project, onHide }) {
  return (
    <Modal
      show={!!project}
      onHide={onHide}
      size="xl"
      centered
      scrollable
      contentClassName="portfolio-modal-content"
    >
      {project && (
        <>
          <Modal.Header className="border-0 pb-0" closeButton closeVariant="white" />
          <Modal.Body className="text-center px-4 pb-5">
            <h2 className="modal-project-title text-uppercase mb-1">
              {project.title}
            </h2>
            <div className="modal-divider mx-auto mb-4" />
            <img
              className="img-fluid rounded mb-4"
              src={project.image}
              alt={project.title}
            />
            {project.description.map((para, i) => (
              <p
                key={i}
                className="mb-3"
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
            <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
              <Button variant="secondary" onClick={onHide}>
                <i className="fas fa-times me-2" />Close
              </Button>
              {project.links.map((link) => (
                <a
                  key={link.label}
                  className={`btn btn-${link.variant}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`${link.iconClass} me-2`} />
                  {link.label}
                </a>
              ))}
            </div>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
}
