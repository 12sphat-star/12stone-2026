
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="stone-footer">
      <div className="stone-footer-inner">
        <div className="stone-footer-top">
          <div className="stone-footer-brand">
            <img
              src="/images/12-stone-logo.png"
              alt="12 Stone Boost"
              className="stone-footer-logo"
            />
            <h2>YOUR BUSINESS DESERVES MORE THAN A WEBSITE.</h2>
            <p>
              Smart Website Systems. Intelligent communication.
              Connected business growth solutions.
            </p>
            <a className="stone-footer-cta" href="/#start-discovery">
              LET'S BUILD SOMETHING SMARTER <span>↗</span>
            </a>
          </div>

          <div className="stone-footer-column">
            <h3>EXPLORE</h3>
            <a href="/">Home</a>
            <a href="/#visibility">Get Found</a>
            <a href="/#method">The 12 Stone Method</a>
            <a href="/#executive-upgrade">Executive Upgrade</a>
            <a href="/#start-discovery">Start a Conversation</a>
          </div>

          <div className="stone-footer-column">
            <h3>THE 12 STONE ECOSYSTEM</h3>
            <a href="https://12stoneboost.com">12 Stone Boost</a>
            <a
              href="https://12stoneAI.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              12 Stone AI ↗
            </a>
            <a
              href="https://12stoneconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              12 Stone Consulting ↗
            </a>
          </div>

          <div className="stone-footer-column">
            <h3>LET'S CONNECT</h3>
            <a href="mailto:info@12stoneconsulting.com">
              info@12stoneconsulting.com
            </a>
            <a href="tel:+17575307033">757-530-7033</a>
            <a href="/#start-discovery">Request a Discovery Session</a>
          </div>
        </div>

        <div className="stone-footer-bottom">
          <span>© {new Date().getFullYear()} 12 Stone Boost. All rights reserved.</span>
          <div className="stone-footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
