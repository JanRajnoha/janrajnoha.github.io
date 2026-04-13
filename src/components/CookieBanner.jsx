import { useState } from 'react';

export default function CookieBanner() {
  const [visible,  setVisible]  = useState(() => !localStorage.getItem('cookies-accepted'));
  const [closing, setClosing] = useState(false);

  if (!visible) return null;

  const dismiss = () => {
    setClosing(true);
    setTimeout(() => {
      localStorage.setItem('cookies-accepted', '1');
      setVisible(false);
    }, 350);
  };

  return (
    <div className={`cookie-banner${closing ? ' cookie-banner--closing' : ''}`}>
      <p className="cookie-text mb-0">
        This site uses cookies for analytics (Google Analytics) to help improve
        the experience. No personal data is collected or shared.
      </p>
      <button className="cookie-dismiss" onClick={dismiss} aria-label="Dismiss cookie notice">
        Got it
      </button>
    </div>
  );
}
