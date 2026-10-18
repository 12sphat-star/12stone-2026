
import "./LegalPages.css";

export default function TermsConditions() {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <a href="/" className="legal-logo">
          <img src="/images/12-stone-logo.png" alt="12 Stone Boost" />
        </a>
        <a href="/" className="legal-back">← Back to Website</a>
      </header>

      <main className="legal-container">
        <div className="legal-intro">
          <span className="legal-eyebrow">12 STONE BOOST / LEGAL</span>
          <h1>Terms &amp; <span>Conditions.</span></h1>
          <p>Effective Date: October 18, 2026</p>
        </div>

        <div className="legal-content">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              Welcome to 12 Stone Boost. These Terms and Conditions
              govern your use of https://12stoneboost.com and its
              related website features. By using our website, you
              agree to these Terms. If you disagree, please
              discontinue use of the website.
            </p>
          </section>

          <section>
            <h2>2. Our Services</h2>
            <p>
              12 Stone Boost provides business growth and technology
              solutions, including Smart Website Systems, AI-powered
              communication, CRM systems, customer follow-up
              automation, appointment scheduling, reputation
              management, and business consulting.
            </p>
            <p>
              Specific services, deliverables, pricing, and
              responsibilities are governed by separate written
              client agreements where applicable.
            </p>
          </section>

          <section>
            <h2>3. No Guaranteed Business Results</h2>
            <p>
              We do not guarantee specific revenue increases,
              lead volumes, customer acquisition results, search
              rankings, or other business outcomes. Results depend
              on implementation, market conditions, customer
              participation, and third-party services.
            </p>
          </section>

          <section>
            <h2>4. Discovery Consultations</h2>
            <p>
              Submitting a website inquiry or requesting a
              discovery consultation does not establish a client
              relationship or obligate either party to enter
              into a service agreement. Appointments are subject
              to availability and confirmation.
            </p>
          </section>

          <section>
            <h2>5. Acceptable Website Use</h2>
            <p>
              You agree not to submit fraudulent information,
              interfere with website operations, attempt
              unauthorized access, introduce malicious software,
              violate applicable laws, or misuse our intellectual
              property.
            </p>
          </section>

          <section>
            <h2>6. Intellectual Property</h2>
            <p>
              Unless otherwise indicated, website content,
              branding, original graphics, text, and other
              materials are owned by or licensed to 12 Stone Boost.
              Unauthorized commercial reproduction or distribution
              is prohibited.
            </p>
          </section>

          <section>
            <h2>7. Third-Party Services</h2>
            <p>
              Our website and business solutions may integrate
              with third-party hosting, CRM, communication,
              scheduling, and automation platforms. Those services
              may be governed by separate terms and policies.
            </p>
          </section>

          <section>
            <h2>8. SMS Messaging Terms</h2>
            <p>
              <strong>Program Name:</strong> 12 Stone Boost Business
              Communications.
            </p>
            <p>
              <strong>Program Description:</strong> Individuals who
              expressly opt in may receive text messages about
              business inquiries, appointment confirmations,
              appointment reminders, and follow-up regarding
              requested services. Individuals who separately
              consent to promotional messages may receive
              information about services and offers.
            </p>
            <p>
              <strong>Message Frequency:</strong> Message frequency
              varies based on your interactions and communication
              preferences.
            </p>
            <p>
              <strong>Fees:</strong> Message and data rates may apply.
            </p>
            <p>
              <strong>Opt-Out:</strong> Reply STOP to unsubscribe
              from applicable text messages. You may receive a
              final confirmation message.
            </p>
            <p>
              <strong>Help:</strong> Reply HELP for assistance,
              call <a href="tel:+17575307033">757-530-7033</a>,
              or email{" "}
              <a href="mailto:info@12stoneconsulting.com">
                info@12stoneconsulting.com
              </a>.
            </p>
            <p>
              SMS consent is voluntary and is not required to
              submit an inquiry or purchase services. Wireless
              carriers are not liable for delayed or undelivered
              messages. Message delivery is not guaranteed.
            </p>
            <p>
              For information about how we handle mobile
              information and consent, please review our{" "}
              <a href="/privacy-policy">Privacy Policy</a>.
            </p>
          </section>

          <section>
            <h2>9. Email Communications</h2>
            <p>
              We may send emails relating to requested services,
              appointments, and permitted business communications.
              Marketing emails will include an unsubscribe
              method where required.
            </p>
          </section>

          <section>
            <h2>10. Website Disclaimer</h2>
            <p>
              Website information is provided for general
              informational purposes and on an "as available"
              basis. To the extent permitted by law, we disclaim
              warranties not expressly stated in a separate
              written agreement.
            </p>
          </section>

          <section>
            <h2>11. Limitation of Liability</h2>
            <p>
              To the extent permitted by applicable law,
              12 Stone Boost is not liable for indirect,
              incidental, special, or consequential damages
              arising from use of this website. Nothing in
              these Terms excludes liability that cannot
              legally be excluded.
            </p>
          </section>

          <section>
            <h2>12. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the
              Commonwealth of Virginia, United States,
              subject to applicable mandatory legal protections.
            </p>
          </section>

          <section>
            <h2>13. Changes to These Terms</h2>
            <p>
              We may update these Terms periodically.
              Changes will be posted on this page with
              a revised effective date.
            </p>
          </section>

          <section className="legal-contact">
            <h2>14. Contact Us</h2>
            <p>
              <strong>12 Stone Boost</strong>
              <br />
              Email:{" "}
              <a href="mailto:info@12stoneconsulting.com">
                info@12stoneconsulting.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+17575307033">757-530-7033</a>
              <br />
              Website:{" "}
              <a href="https://12stoneboost.com">
                www.12stoneboost.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <div className="legal-bottom">
        <a href="/">← Return to 12 Stone Boost</a>
        <a href="/privacy-policy">← Privacy Policy</a>
      </div>
    </div>
  );
}
