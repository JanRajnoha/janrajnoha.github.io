const SOCIALS = [
  { href: 'https://www.linkedin.com/in/jan-rajnoha-59116a64', icon: 'fab fa-linkedin-in', label: 'LinkedIn'   },
  { href: 'https://github.com/JanRajnoha/',                    icon: 'fab fa-github',       label: 'GitHub'    },
  { href: 'https://www.facebook.com/Jan.IT.Rajnoha',           icon: 'fab fa-facebook-f',   label: 'Facebook'  },
  { href: 'https://twitter.com/Jan_IT_Rajnoha',                icon: 'fab fa-twitter',      label: 'Twitter/X' },
];

export default function Footer() {
  return (
    <footer className="footer-section text-white text-center">
      <div className="container py-5">
        <div className="row g-4 justify-content-center">

          <div className="col-md-5">
            <h5 className="text-uppercase fw-bold mb-3">Location</h5>
            <p className="mb-0" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Czech Republic
            </p>
          </div>

          <div className="col-md-5">
            <h5 className="text-uppercase fw-bold mb-3">Find Me On</h5>
            <div className="d-flex justify-content-center gap-2 flex-wrap">
              {SOCIALS.map(({ href, icon, label }) => (
                <a
                  key={label}
                  className="btn-social"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="copyright-bar py-3">
        <small>
          &copy; {new Date().getFullYear()} Jan Rajnoha. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
