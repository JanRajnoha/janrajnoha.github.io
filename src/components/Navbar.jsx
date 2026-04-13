import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const navH = document.getElementById('mainNav')?.offsetHeight ?? 70;
  window.scrollTo({ top: el.offsetTop - navH, behavior: 'smooth' });
}

export default function AppNavbar() {
  const [shrink,   setShrink]   = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    setExpanded(false);
    scrollToSection(id);
  };

  return (
    <Navbar
      id="mainNav"
      variant="dark"
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={shrink ? 'navbar-shrink' : ''}
    >
      <Container>
        <Navbar.Brand href="#page-top" onClick={(e) => handleNav(e, 'page-top')}>
          Jan Rajnoha
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto">
            {['portfolio', 'about', 'contact'].map((id) => (
              <Nav.Item key={id}>
                <Nav.Link
                  href={`#${id}`}
                  className="text-uppercase"
                  onClick={(e) => handleNav(e, id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
