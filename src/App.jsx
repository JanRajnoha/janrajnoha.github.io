import AppNavbar    from './components/Navbar.jsx';
import Hero         from './components/Hero.jsx';
import Portfolio    from './components/Portfolio.jsx';
import About        from './components/About.jsx';
import Contact      from './components/Contact.jsx';
import Footer       from './components/Footer.jsx';
import ScrollToTop  from './components/ScrollToTop.jsx';

export default function App() {
  return (
    <>
      <AppNavbar />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}
