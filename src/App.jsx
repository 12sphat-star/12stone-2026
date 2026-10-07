import { useState } from 'react'
import './App.css'

function App() {
    const industries = [
    {
      id: 'home',
      name: 'Home Services',
      category: 'HVAC · PLUMBING · ELECTRICAL · ROOFING',
      eyebrow: '12 STONE INDUSTRY CONCEPT',
      title: 'RIVERSIDE HOME SERVICES',
      headline: 'Comfort starts here.',
      text: 'Turn local searches into conversations, scheduled service and customers.',
      action: 'Schedule Service',
    },
    {
      id: 'realty',
      name: 'Realty',
      category: 'AGENTS · TEAMS · BROKERAGES',
      eyebrow: '12 STONE INDUSTRY CONCEPT',
      title: 'HARBOUR & MAIN REALTY',
      headline: 'Find more than a house.',
      text: 'Create a property experience that moves buyers and sellers toward the next conversation.',
      action: 'Explore Properties',
    },
    {
      id: 'medical',
      name: 'Medical & Healthcare',
      category: 'PRACTICES · DENTAL · WELLNESS',
      eyebrow: '12 STONE INDUSTRY CONCEPT',
      title: 'COASTAL HEALTH PARTNERS',
      headline: 'Care starts with access.',
      text: 'Help patients understand their options, get answers and take the next appropriate step.',
      action: 'Request Appointment',
    },
    {
      id: 'legal',
      name: 'Legal',
      category: 'LAW FIRMS · ATTORNEYS · LEGAL SERVICES',
      eyebrow: '12 STONE INDUSTRY CONCEPT',
      title: 'WILLIAMSBURG LEGAL GROUP',
      headline: 'When it matters, be ready.',
      text: 'Build trust quickly and make it easier for prospective clients to begin the conversation.',
      action: 'Request Consultation',
    },
    {
      id: 'financial',
      name: 'Financial Services',
      category: 'INSURANCE · MORTGAGE · FINANCIAL',
      eyebrow: '12 STONE INDUSTRY CONCEPT',
      title: 'HARBOR FINANCIAL',
      headline: 'Clarity builds confidence.',
      text: 'Create a trust-driven experience that turns questions into qualified conversations.',
      action: 'Start a Conversation',
    },
    {
      id: 'professional',
      name: 'Professional Services',
      category: 'ACCOUNTING · CONSULTING · ADVISORY',
      eyebrow: '12 STONE INDUSTRY CONCEPT',
      title: 'MERIDIAN ADVISORY',
      headline: 'Expertise should look like it.',
      text: 'Present your value clearly and give serious prospects an easy path to engage.',
      action: 'Schedule Consultation',
    },
    {
      id: 'beauty',
      name: 'Beauty & Aesthetics',
      category: 'SALONS · STUDIOS · AESTHETICS',
      eyebrow: '12 STONE INDUSTRY CONCEPT',
      title: 'ÉLAN AESTHETICS',
      headline: 'Look good. Feel exceptional.',
      text: 'Turn visual interest into appointments, relationships and repeat visits.',
      action: 'Book Experience',
    },
  ]

  const [activeIndustry, setActiveIndustry] = useState('home')

  const currentIndustry =
    industries.find((industry) => industry.id === activeIndustry) ||
    industries[0]
  return (
    <main className="site">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="site-header">
        <a className="brand" href="/" aria-label="12 Stone home">
          <span className="brand-number">12</span>
          <span className="brand-name">STONE</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#smart-websites">Smart Websites</a>
          <a href="#systems">Business Systems</a>
          <a href="#industries">Industries</a>
          <a href="#about">About</a>
        </nav>

        <a className="header-cta" href="#snapshot">
          Business Snapshot
          <span>↗</span>
        </a>
      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero-section">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-copy">
          <p className="eyebrow">
            SMART WEBSITES <span>+</span> CONNECTED BUSINESS SYSTEMS
          </p>

          <h1>
            YOU DON'T NEED
            <br />
            TO BE A BIG COMPANY
            <br />
            <span>TO COMPETE LIKE ONE.</span>
          </h1>

          <p className="hero-description">
            We build the digital experience and connected systems that help
            small businesses look stronger, respond faster and turn more
            opportunities into customers.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#smart-websites">
              See What's Possible
              <span>↗</span>
            </a>

            <a className="text-link" href="#snapshot">
              Get Your Business Snapshot
              <span>→</span>
            </a>
          </div>
        </div>


        {/* HERO WEBSITE SHOWCASE */}

        <div
          className="hero-showcase"
          aria-label="12 Stone Smart Website concept"
        >
          <div className="showcase-orbit showcase-orbit-one" />
          <div className="showcase-orbit showcase-orbit-two" />

          <div className="desktop-browser">
            <div className="browser-top">
              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="browser-address">
                riversidehomeservices.com
              </div>

              <div className="browser-menu">•••</div>
            </div>

            <div className="concept-site">
              <div className="concept-nav">

                <div className="concept-logo">
                  <span>R</span>

                  <div>
                    <strong>RIVERSIDE</strong>
                    <small>HOME SERVICES</small>
                  </div>
                </div>

                <div className="concept-links">
                  <span>Services</span>
                  <span>About</span>
                  <span>Reviews</span>
                </div>

                <button type="button">Book Service</button>
              </div>


              <div className="concept-hero">
                <div className="concept-overlay" />

                <div className="concept-content">
                  <span className="concept-kicker">
                    SERVING HAMPTON ROADS
                  </span>

                  <h2>
                    COMFORT
                    <br />
                    STARTS HERE.
                  </h2>

                  <p>
                    Trusted home service when you need it.
                  </p>

                  <button type="button">
                    Schedule Service
                  </button>
                </div>

                <div className="concept-rating">
                  <strong>4.9</strong>
                  <span>★★★★★</span>
                  <small>
                    Local homeowners trust Riverside
                  </small>
                </div>
              </div>
            </div>
          </div>


          {/* MOBILE WEBSITE */}

          <div className="phone">
            <div className="phone-speaker" />

            <div className="phone-screen">
              <div className="phone-brand">
                RIVERSIDE
              </div>

              <div className="phone-image">
                <span>24/7</span>
              </div>

              <div className="phone-copy">
                <small>NEED SERVICE?</small>

                <strong>
                  We're ready
                  <br />
                  when you are.
                </strong>

                <button type="button">
                  Schedule
                </button>
              </div>
            </div>
          </div>


          {/* ACTIVITY */}

          <div className="activity activity-conversation">
            <span className="activity-icon">●</span>

            <div>
              <small>NEW CONVERSATION</small>
              <strong>Can someone come tomorrow?</strong>
            </div>
          </div>

          <div className="activity activity-booked">
            <span className="activity-check">✓</span>

            <div>
              <small>APPOINTMENT BOOKED</small>
              <strong>Tomorrow · 10:30 AM</strong>
            </div>
          </div>

          <div className="showcase-caption">
            <span>12 STONE SMART WEBSITE™</span>
            <strong>Designed around the business.</strong>
          </div>
        </div>


        <div className="hero-scroll">
          <span>EXPLORE</span>
          <div />
        </div>
      </section>


      {/* =====================================================
          SMART WEBSITE BUSINESS SECTION
      ===================================================== */}

      <section
        className="business-section"
        id="smart-websites"
      >

        <div className="business-intro">
          <p className="eyebrow">
            A SMART WEBSITE™ SHOULD WORK
          </p>

          <h2>
            YOUR WEBSITE SHOULD DO
            <br />
            MORE THAN LOOK GOOD.
            <span> IT SHOULD DO BUSINESS.</span>
          </h2>

          <p className="business-lead">
            When someone is ready to do business, your website should
            give them a clear way forward — whether they start online
            or pick up the phone.
          </p>
        </div>


        {/* =================================================
            CUSTOMER JOURNEY
        ================================================= */}

        <div className="customer-experience">

          {/* 01 */}

          <article className="experience-step">
            <span className="step-number">01</span>

            <div className="journey-visual journey-website">
              <div className="mini-browser-bar">
                <i />
                <i />
                <i />

                <span>
                  riversidehomeservices.com
                </span>
              </div>

              <div className="mini-site">
                <small>
                  RIVERSIDE HOME SERVICES
                </small>

                <strong>
                  Comfort starts here.
                </strong>

                <span>
                  Schedule Service
                </span>
              </div>
            </div>

            <h3>They find you.</h3>

            <p>
              A strong first impression turns attention into interest.
            </p>
          </article>


          {/* 02 */}

          <article className="experience-step">
            <span className="step-number">02</span>

            <div className="journey-visual journey-chat">

              <div className="mini-chat-header">
                <span className="mini-online" />

                <div>
                  <strong>
                    Riverside Concierge
                  </strong>

                  <small>
                    Online
                  </small>
                </div>
              </div>

              <div className="mini-message mini-message-customer">
                My AC isn't cooling.
              </div>

              <div className="mini-message mini-message-business">
                I can help. Let's find a service time.
              </div>
            </div>

            <h3>
              They start a conversation.
            </h3>

            <p>
              Your business is ready when the customer is.
            </p>
          </article>


          {/* 03 */}

          <article className="experience-step">
            <span className="step-number">03</span>

            <div className="journey-visual journey-schedule">
              <small>
                AVAILABLE APPOINTMENT
              </small>

              <strong>
                Tomorrow
              </strong>

              <div className="schedule-time">
                <span>10:30</span>
                <small>AM</small>
              </div>

              <button type="button">
                Confirm Appointment
              </button>
            </div>

            <h3>
              They take the next step.
            </h3>

            <p>
              Interest becomes an actual appointment.
            </p>
          </article>


          {/* 04 */}

          <article className="experience-step">
            <span className="step-number">04</span>

            <div className="journey-visual journey-opportunity">

              <div className="opportunity-top">
                <small>
                  NEW SERVICE REQUEST
                </small>

                <span>
                  CONFIRMED
                </span>
              </div>

              <strong>
                Sarah M.
              </strong>

              <p>
                AC Repair
              </p>

              <div className="opportunity-detail">
                <span>
                  Tomorrow
                </span>

                <b>
                  10:30 AM
                </b>
              </div>

              <div className="opportunity-status">
                <i />
                Appointment booked
              </div>
            </div>

            <h3>
              You get the opportunity.
            </h3>

            <p>
              The website has helped move the customer forward.
            </p>
          </article>

        </div>


        {/* =================================================
            PHONE / AI EMPLOYEE
        ================================================= */}

        <div className="phone-experience">

          <div className="phone-experience-copy">
            <p className="eyebrow">
              AND WHEN THEY CALL INSTEAD...
            </p>

            <h3>
              YOUR BUSINESS
              <br />
              CAN STILL ANSWER.
            </h3>

            <p>
              An AI-powered phone employee can answer calls,
              understand what the customer needs and help move
              the conversation forward — 24/7 or whenever your
              business needs coverage.
            </p>

            <span className="powered-note">
              CONNECTED TO THE SAME CUSTOMER EXPERIENCE
            </span>
          </div>


          <div className="incoming-call">

            <div className="call-top">
              <span className="call-status">
                INCOMING CUSTOMER
              </span>

              <span className="call-live">
                LIVE
              </span>
            </div>

            <div className="caller">
              <div className="caller-avatar">
                <span />
              </div>

              <div>
                <small>
                  CALLING RIVERSIDE HOME SERVICES
                </small>

                <strong>
                  Homeowner
                </strong>
              </div>
            </div>

            <div
              className="voice-wave"
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="call-response">
              <small>
                RIVERSIDE VIRTUAL TEAM
              </small>

              <p>
                “Thanks for calling Riverside.
                How can I help you today?”
              </p>
            </div>

            <div className="call-actions">
              <span>UNDERSTAND</span>
              <i />
              <span>ASSIST</span>
              <i />
              <span>NEXT STEP</span>
            </div>

          </div>
        </div>

      </section>
  {/* PASTE INDUSTRIES SECTION HERE */}
  <section className="industries-section" id="industries">

  <div className="industries-heading">
    <p className="eyebrow">BUILT AROUND THE BUSINESS</p>

    <h2>
      DIFFERENT BUSINESS.
      <br />
      <span>DIFFERENT EXPERIENCE.</span>
    </h2>

    <p className="industries-intro">
      <strong>
        Your business isn't off-the-shelf. Your system shouldn't be either.
      </strong>
      <br />
      We design the website, customer experience and connected system
      around how your business actually works.
    </p>
  </div>


  <div className="industry-selector">
    {industries.map((industry) => (
      <button
        key={industry.id}
        type="button"
        className={
          activeIndustry === industry.id
            ? 'industry-tab industry-tab--active'
            : 'industry-tab'
        }
        onClick={() => setActiveIndustry(industry.id)}
      >
        {industry.name}
      </button>
    ))}
  </div>


  <div className="industry-website-stage">

    <div className="industry-stage-top">

      <div>
        <span className="industry-concept-label">
          12 STONE INDUSTRY CONCEPT
        </span>

        <strong>
          {currentIndustry.name}
        </strong>
      </div>

      <span className="industry-stage-note">
        SMART WEBSITE™ EXPERIENCE
      </span>

    </div>


    <div className="industry-browser">

      <div className="industry-browser-top">

        <div className="industry-browser-dots">
          <i />
          <i />
          <i />
        </div>

        <div className="industry-browser-address">
          <span />
          12 Stone Smart Website™ Concept
        </div>

        <div className="industry-browser-menu">
          •••
        </div>

      </div>


      <div
        key={currentIndustry.id}
        className="industry-website-image-wrap"
      >

        <img
          className="industry-website-image"
          src={
            currentIndustry.id === 'home'
              ? '/images/home-services-website.png'
              : currentIndustry.id === 'realty'
              ? '/images/realty-website.png'
              : currentIndustry.id === 'medical'
              ? '/images/medical-website.png'
              : currentIndustry.id === 'legal'
              ? '/images/legal-website.png'
              : currentIndustry.id === 'financial'
              ? '/images/financial-services-website.png'
              : currentIndustry.id === 'professional'
              ? '/images/professional-services-website.png'
              : '/images/beauty-aesthetics-website.png'
          }
          alt={`${currentIndustry.name} Smart Website concept by 12 Stone`}
        />

      </div>

    </div>


    <div className="industry-stage-bottom">

      <div>
        <span>DESIGNED AROUND</span>
        <strong>{currentIndustry.name}</strong>
      </div>

      <p>
        Not a template with different colors.
        <br />
        A different experience for a different business.
      </p>

    </div>

  </div>


  <div className="industry-philosophy">

    <span>
      12 STONE SMART WEBSITE SYSTEM™
    </span>

    <h3>
      WE BUILD THE SYSTEM AROUND YOUR BUSINESS.
      <br />
      <strong>NOT YOUR BUSINESS AROUND THE SYSTEM.</strong>
    </h3>

  </div>

</section>

{/* =====================================================
    12 STONE CONNECTED CUSTOMER SYSTEM
===================================================== */}

<section className="workflow-section" id="systems">

  <div className="workflow-heading">
    <p className="eyebrow">THE CONNECTED CUSTOMER JOURNEY</p>

    <h2>
      YOUR WEBSITE STARTS
      <br />
      THE CONVERSATION.
      <span> YOUR SYSTEM KEEPS IT MOVING.</span>
    </h2>

    <p>
      From the first conversation through follow-up, customer care
      and the next opportunity — the experience stays connected.
    </p>
  </div>


  <div className="workflow-canvas">

    {/* =================================================
        ROW 1 — CAPTURE + CRM + NEXT STEP
    ================================================= */}

    <div className="workflow-row workflow-row-one">

      <div className="flow-node flow-website">
        <span className="flow-step">01</span>

        <div className="flow-browser">
          <div className="flow-browser-top">
            <i /><i /><i />
          </div>

          <div className="flow-browser-body">
            <small>SMART WEBSITE™</small>
            <strong>Ready to help.</strong>
            <span>Start Conversation</span>
          </div>
        </div>

        <p>Visitor arrives</p>
      </div>


      <div className="flow-arrow">
        <span>→</span>
      </div>


      <div className="flow-node flow-conversation">
        <span className="flow-step">02</span>

        <div className="flow-chat">
          <small>CONVERSATION CONCIERGE</small>

          <div className="flow-chat-customer">
            I'd like more information.
          </div>

          <div className="flow-chat-business">
            Absolutely. I can help.
          </div>
        </div>

        <p>Conversation begins</p>
      </div>


      <div className="flow-arrow">
        <span>→</span>
      </div>


      <div className="flow-node flow-capture">
        <span className="flow-step">03</span>

        <div className="capture-card">
          <small>LEAD CAPTURED</small>

          <div>
            <span>Name</span>
            <b>✓</b>
          </div>

          <div>
            <span>Email</span>
            <b>✓</b>
          </div>

          <div>
            <span>Phone</span>
            <b>✓</b>
          </div>
        </div>

        <p>Contact information captured</p>
      </div>


      <div className="flow-arrow">
        <span>→</span>
      </div>


      <div className="flow-node flow-crm">
        <span className="flow-step">04</span>

        <div className="crm-card">
          <div className="crm-top">
            <span className="crm-dot" />
            <small>CRM</small>
          </div>

          <strong>New Contact</strong>

          <div className="crm-contact">
            <span className="crm-avatar">KR</span>

            <div>
              <b>Prospect</b>
              <small>Contact Created</small>
            </div>
          </div>

          <div className="crm-opportunity">
            <span>OPPORTUNITY</span>
            <b>CREATED ✓</b>
          </div>
        </div>

        <p>Automatically placed in CRM</p>
      </div>


      <div className="flow-arrow">
        <span>→</span>
      </div>


      <div className="flow-node flow-scheduled">
        <span className="flow-step">05</span>

        <div className="scheduled-card">
          <small>NEXT STEP</small>

          <strong>Scheduled</strong>

          <div className="scheduled-types">
            <span>Appointment</span>
            <span>Consultation</span>
            <span>Meeting</span>
            <span>Showing</span>
          </div>
        </div>

        <p>Customer chooses the next step</p>
      </div>

    </div>


    {/* TURN DOWN */}

    <div className="workflow-turn workflow-turn-right">
      <span>↓</span>
    </div>


    {/* =================================================
        ROW 2 — CALENDAR + CONFIRMATION + REMINDERS
        RIGHT TO LEFT
    ================================================= */}

    <div className="workflow-row workflow-row-two">

      <div className="flow-node flow-day">
        <span className="flow-step">10</span>

        <div className="day-card">
          <small>SCHEDULED DAY</small>
          <strong>Today</strong>
          <span>10:30 AM</span>
        </div>

        <p>They're expected</p>
      </div>


      <div className="flow-arrow flow-arrow-reverse">
        <span>←</span>
      </div>


      <div className="flow-node">
        <span className="flow-step">09</span>

        <div className="message-card sms-card">
          <div className="message-icon">SMS</div>

          <small>DAY-OF REMINDER</small>

          <strong>Sent ✓</strong>

          <p>
            We're looking forward to seeing you today.
          </p>
        </div>

        <p>Day-of communication</p>
      </div>


      <div className="flow-arrow flow-arrow-reverse">
        <span>←</span>
      </div>


      <div className="flow-node">
        <span className="flow-step">08</span>

        <div className="message-card">
          <div className="message-icon">@</div>

          <small>EMAIL + SMS</small>

          <strong>Reminder Sequence ✓</strong>

          <p>
            Helpful reminders leading up to the scheduled time.
          </p>
        </div>

        <p>Follow-up before appointment</p>
      </div>


      <div className="flow-arrow flow-arrow-reverse">
        <span>←</span>
      </div>


      <div className="flow-node">
        <span className="flow-step">07</span>

        <div className="message-card">
          <div className="message-icon">✓</div>

          <small>CONFIRMATION</small>

          <strong>Email + SMS</strong>

          <p>
            Your appointment has been confirmed.
          </p>
        </div>

        <p>Immediate confirmation</p>
      </div>


      <div className="flow-arrow flow-arrow-reverse">
        <span>←</span>
      </div>


      <div className="flow-node">
        <span className="flow-step">06</span>

        <div className="calendar-card">
          <div className="calendar-top">
            <span>OCT</span>
            <strong>14</strong>
          </div>

          <div className="calendar-body">
            <small>CALENDAR</small>
            <strong>10:30 AM</strong>
            <span>Added ✓</span>
          </div>
        </div>

        <p>Calendar entry created</p>
      </div>

    </div>


    {/* OPTIONAL EXECUTIVE UPGRADE */}

    <div className="executive-callout">
      <span>EXECUTIVE UPGRADE</span>

      <div className="executive-callout-icon">
        ☎
      </div>

      <div>
        <strong>Optional AI Outbound Call</strong>
        <p>
          Add voice follow-up where it makes sense for the business.
        </p>
      </div>
    </div>


    {/* TURN DOWN */}

    <div className="workflow-turn workflow-turn-left">
      <span>↓</span>
    </div>


    {/* =================================================
        ROW 3 — OUTCOME + CUSTOMER RELATIONSHIP
    ================================================= */}

    <div className="workflow-row workflow-row-three">

      <div className="flow-node flow-decision">
        <span className="flow-step">11</span>

        <div className="decision-diamond">
          <span>DID THEY</span>
          <strong>ATTEND?</strong>
        </div>
      </div>


      <div className="decision-branches">

        <div className="missed-branch">
          <span className="branch-label">NO</span>

          <div className="branch-card">
            <small>MISSED</small>
            <strong>Reschedule</strong>

            <span>
              SMS + Email
            </span>

            <b>
              New date →
            </b>
          </div>

          <div className="branch-return">
            ↗ BACK TO SCHEDULE
          </div>
        </div>


        <div className="completed-branch">
          <span className="branch-label branch-label-yes">YES</span>

          <div className="branch-card branch-card-complete">
            <small>COMPLETED</small>
            <strong>Customer Outcome</strong>

            <span>
              Customer · Client · Patient
            </span>
          </div>
        </div>

      </div>


      <div className="flow-arrow">
        <span>→</span>
      </div>


      <div className="flow-node">
        <span className="flow-step">12</span>

        <div className="review-card">
          <div className="review-stars">
            ★★★★★
          </div>

          <small>GOOGLE REVIEW</small>

          <strong>Request Sent</strong>

          <span>
            SMS
          </span>
        </div>

        <p>Turn experience into reputation</p>
      </div>


      <div className="flow-arrow">
        <span>→</span>
      </div>


      <div className="flow-node">
        <span className="flow-step">13</span>

        <div className="nurture-card">
          <small>STAY CONNECTED</small>

          <strong>
            Continue Providing Value
          </strong>

          <div>
            <span>Email</span>
            <span>SMS</span>
            <span>Updates</span>
            <span>Reminders</span>
          </div>
        </div>

        <p>Nurture the relationship</p>
      </div>


      <div className="flow-arrow">
        <span>→</span>
      </div>


      <div className="flow-node flow-returning">
        <span className="flow-step">14</span>

        <div className="returning-card">
          <div className="returning-ring">
            <span>↻</span>
          </div>

          <small>THE RELATIONSHIP CONTINUES</small>

          <strong>
            Return
            <br />
            + Refer
          </strong>

          <p>
            The next opportunity begins.
          </p>
        </div>
      </div>

    </div>


    <div className="workflow-loopback">
      <span>↺</span>

      <strong>
        THE CUSTOMER JOURNEY CONTINUES
      </strong>
    </div>

  </div>


  <div className="workflow-footer">

    <div>
      <span>12 STONE SMART WEBSITE SYSTEM™</span>

      <strong>
        Built around how your business works.
      </strong>
    </div>

    <p>
      The technology works behind the scenes.
      Your customer experiences one connected business.
    </p>

  </div>

</section>
    </main>
  )
}

export default App