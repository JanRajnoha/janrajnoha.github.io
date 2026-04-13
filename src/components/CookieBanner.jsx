import { useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(
    () => !localStorage.getItem('cookies-accepted')
  );

  if (!visible) return null;

  const dismiss = () => {
    localStorage.setItem('cookies-accepted', '1');
    setVisible(false);
  };

  return (
    <div className="cookie-banner">
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
