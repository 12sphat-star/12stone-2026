
import "./LegalPages.css";

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <a href="/" className="legal-logo">
          <img src="/images/12-stone-logo.png" alt="12 Stone Boost" />
        </a>
        <a href="/" className="legal-back">
          ← Back to Website
        </a>
      </header>

      <main className="legal-container">
        <div className="legal-intro">
          <span className="legal-eyebrow">12 STONE BOOST / LEGAL</span>
          <h1>Privacy <span>Policy.</span></h1>
          <p>Effective Date: October 18, 2026</p>
        </div>

        <div className="legal-content">
          <section>
            <h2>1. Introduction</h2>
            <p>
              12 Stone Boost ("we," "us," or "our") respects your
              privacy. This Privacy Policy explains how we collect,
              use, disclose, and protect information through
              12stoneboost.com, our contact forms, appointment
              scheduling, and business communications.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>We may collect information you provide, including:</p>
            <ul>
              <li>First and last name</li>
              <li>Business or company name</li>
              <li>Email address and telephone number</li>
              <li>Business inquiries and service interests</li>
              <li>Appointment and scheduling information</li>
              <li>Messages and communication preferences</li>
              <li>SMS consent selections and related records</li>
            </ul>
            <p>
              Depending on the technologies enabled, we may also
              collect IP addresses, device information, browser
              information, website usage data, and cookies.
            </p>
          </section>

          <section>
            <h2>3. How We Use Information</h2>
            <p>We may use information to:</p>
            <ul>
              <li>Respond to inquiries and requests</li>
              <li>Schedule and manage consultations</li>
              <li>Provide information about requested services</li>
              <li>Maintain customer and prospect records</li>
              <li>Deliver customer support</li>
              <li>Improve website performance and services</li>
              <li>Send permitted business communications</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>4. Email and SMS Communications</h2>
            <p>
              We may communicate with you about inquiries and
              appointments using the contact information you provide,
              as permitted by applicable law.
            </p>
            <p>
              If you separately opt in to text messaging, you may
              receive SMS communications according to your selected
              consent preferences.
            </p>
            <p>
              Message frequency varies. Message and data rates may
              apply. Reply STOP to unsubscribe from applicable text
              messages or HELP for assistance.
            </p>
            <p>
              Consent to marketing text messages is not required
              to submit an inquiry or purchase services.
            </p>
          </section>

          <section>
            <h2>5. Mobile Information and Consent</h2>
            <p>
              We do not sell, rent, or share mobile phone numbers
              or SMS opt-in information with third parties or
              affiliates for their own marketing or promotional
              purposes.
            </p>
            <p>
              Text messaging originator opt-in data and consent
              information will not be shared with third parties
              for marketing or promotional purposes.
            </p>
            <p>
              We may use service providers to deliver communications
              on our behalf, subject to appropriate data protection
              obligations.
            </p>
          </section>

          <section>
            <h2>6. Service Providers</h2>
            <p>
              We may use technology providers to support website
              hosting, customer relationship management, appointment
              scheduling, communications, analytics, and automation.
              These providers may process information as necessary
              to deliver services on our behalf.
            </p>
          </section>

          <section>
            <h2>7. Cookies and Analytics</h2>
            <p>
              Our website may use cookies or similar technologies
              to support functionality, understand performance,
              and improve user experience. You can manage cookies
              through your browser settings. Additional choices
              will be provided where required by law.
            </p>
          </section>

          <section>
            <h2>8. Information Security</h2>
            <p>
              We use reasonable administrative, technical, and
              organizational safeguards intended to protect personal
              information. However, no electronic transmission or
              storage method is completely secure.
            </p>
          </section>

          <section>
            <h2>9. Data Retention</h2>
            <p>
              We retain information as reasonably necessary to
              respond to requests, provide services, maintain
              business records, comply with legal requirements,
              and resolve disputes.
            </p>
          </section>

          <section>
            <h2>10. Your Privacy Choices</h2>
            <p>
              You may contact us to request access to, correction
              of, or deletion of your personal information, subject
              to applicable law. Marketing emails may be unsubscribed
              from using the instructions provided in those messages.
              For SMS opt-out, reply STOP.
            </p>
          </section>

          <section>
            <h2>11. Third-Party Websites</h2>
            <p>
              Our website may link to third-party services.
              We are not responsible for their independent
              privacy practices.
            </p>
          </section>

          <section>
            <h2>12. Children's Privacy</h2>
            <p>
              Our website and services are intended for adults and
              business representatives. We do not knowingly collect
              personal information from children under 13.
            </p>
          </section>

          <section>
            <h2>13. Policy Updates</h2>
            <p>
              We may update this Privacy Policy periodically.
              Changes will be posted here with a revised effective
              date.
            </p>
          </section>

          <section className="legal-contact">
            <h2>14. Contact Us</h2>
            <p>
              For questions about this policy or your information,
              contact:
            </p>
            <p>
              <strong>12 Stone Boost</strong>
              <br />
              Email: <a href="mailto:info@12stoneconsulting.com">
                info@12stoneconsulting.com
              </a>
              <br />
              Phone: <a href="tel:+17575307033">
                757-530-7033
              </a>
              <br />
              Website: <a href="https://12stoneboost.com">
                www.12stoneboost.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <div className="legal-bottom">
        <a href="/">← Return to 12 Stone Boost</a>
        <a href="/terms-and-conditions">Terms &amp; Conditions →</a>
      </div>
    </div>
  );
}
