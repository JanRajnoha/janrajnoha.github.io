export default function Contact() {
  return (
    <section className="section-padding" id="contact">
      <div className="container">
        <h2 className="section-heading text-center text-uppercase">Contact Me</h2>
        <div className="section-divider mx-auto mb-5" />

        <div className="row g-4 justify-content-center">
          <div className="col-sm-4 col-lg-3">
            <div className="contact-info-card h-100">
              <ContactItem icon="fa-envelope" label="Email">
                <a href="mailto:janrajnoha@outlook.com" className="contact-link">
                  janrajnoha@outlook.com
                </a>
              </ContactItem>
            </div>
          </div>
          <div className="col-sm-4 col-lg-3">
            <div className="contact-info-card h-100">
              <ContactItem icon="fa-phone" label="Phone">
                <a href="tel:+420721107980" className="contact-link">
                  +420 721 107 980
                </a>
              </ContactItem>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, children }) {
  return (
    <div className="text-center">
      <i className={`fas ${icon} fa-2x mb-3`} style={{ color: 'var(--primary)' }} />
      <h5 className="fw-bold mb-1">{label}</h5>
      <p className="mb-0">{children}</p>
    </div>
  );
}
