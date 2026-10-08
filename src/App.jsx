import { useState, useEffect, useRef } from 'react'
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
  const [displayIndustry, setDisplayIndustry] = useState(activeIndustry)
const [outgoingIndustry, setOutgoingIndustry] = useState(null)
const [slideDirection, setSlideDirection] = useState(1)
const carouselTimer = useRef(null)

useEffect(() => {
  return () => clearTimeout(carouselTimer.current)
}, [])

const changeIndustry = (id) => {
  if (id === displayIndustry || outgoingIndustry !== null) return

  const previousIndex = industries.findIndex(
    (industry) => industry.id === displayIndustry
  )
  const nextIndex = industries.findIndex(
    (industry) => industry.id === id
  )

  setSlideDirection(nextIndex >= previousIndex ? 1 : -1)
  setOutgoingIndustry(displayIndustry)
  setDisplayIndustry(id)
  setActiveIndustry(id)

  clearTimeout(carouselTimer.current)
  carouselTimer.current = setTimeout(() => {
    setOutgoingIndustry(null)
  }, 760)
}

const showroomImage = (id) => {
  const images = {
    home: '/images/home-services-website.png',
    realty: '/images/realty-website.png',
    medical: '/images/medical-website.png',
    legal: '/images/legal-website.png',
    financial: '/images/financial-services-website.png',
    professional: '/images/professional-services-website.png',
    beauty: '/images/beauty-aesthetics-website.png',
  }

  return images[id]
}
const [journeyActive, setJourneyActive] = useState(false)
const journeyRef = useRef(null)

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setJourneyActive(true)
      } else {
        setJourneyActive(false)
      }
    },
    { threshold: 0.25 }
  )

  const section = journeyRef.current

  if (section) {
    observer.observe(section)
  }

  return () => observer.disconnect()
}, [])

const [commandActive, setCommandActive] = useState(false)
const commandRef = useRef(null)

useEffect(() => {
  const section = commandRef.current
  if (!section) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      setCommandActive(entry.isIntersecting)
    },
    { threshold: 0.25 }
  )

  observer.observe(section)
  return () => observer.disconnect()
}, [])

const [discoveryActive, setDiscoveryActive] = useState(false)
const discoveryRef = useRef(null)

useEffect(() => {
  const section = discoveryRef.current
  if (!section) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      setDiscoveryActive(entry.isIntersecting)
    },
    { threshold: 0.15 }
  )

  observer.observe(section)

  return () => observer.disconnect()
}, [])

const [methodActive, setMethodActive] = useState(false)
const methodRef = useRef(null)

useEffect(() => {
  const section = methodRef.current
  if (!section) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      setMethodActive(entry.isIntersecting)
    },
    { threshold: 0.12 }
  )

  observer.observe(section)
  return () => observer.disconnect()
}, [])

const [executiveActive, setExecutiveActive] = useState(false)
const executiveRef = useRef(null)

useEffect(() => {
  const section = executiveRef.current
  if (!section) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      setExecutiveActive(entry.isIntersecting)
    },
    { threshold: 0.2 }
  )

  observer.observe(section)

  return () => observer.disconnect()
}, [])
    return (
    <main className="site">

  {/* =====================================================
    HEADER
===================================================== */}

<header className="site-header">

  <a className="brand brand-logo-lockup" href="/" aria-label="12 Stone home">
    <img
      src="/images/12-stone-logo.png"
      alt=""
      className="header-brand-logo"
    />

    <span className="header-brand-name">12 STONE</span>
  </a>


  <nav className="main-nav" aria-label="Main navigation">
    <a href="#smart-websites">Smart Websites</a>
    <a href="#systems">Business Systems</a>
    <a href="#industries">Industries</a>
    <a href="#about">About</a>
  </nav>


  <a className="header-cta" href="#start-discovery">
  Get Started
  <span>→</span>
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
  <a
    className="button button-primary hero-primary-cta"
    href="#start-discovery"
  >
    See What 12 Stone Could Build For My Business
    <span>→</span>
  </a>

  <a
    className="text-link hero-secondary-cta"
    href="#smart-websites"
  >
    See What's Possible
    <span>↓</span>
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

               <div className="concept-logo riverside-brand">
  <span className="riverside-mark">
    <i>R</i>
  </span>

  <div className="riverside-wordmark">
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

                  <div className="concept-trust">
  <div className="concept-stars">★★★★★</div>

  <div>
    <strong>4.9 CUSTOMER RATING</strong>
    <span>Trusted across Hampton Roads</span>
  </div>
</div>

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
  className="business-section smart-system-v2"
  id="smart-websites"
>

  {/* =====================================================
      INTRO
  ===================================================== */}

  <div className="business-intro smart-intro">

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
      help move them forward — from the first visit to the next
      real opportunity.
    </p>

  </div>


  {/* =====================================================
      CONNECTED CUSTOMER EXPERIENCE
  ===================================================== */}

  <div className="smart-journey">

    <div className="smart-journey-heading">

      <div>
        <span>ONE CONNECTED EXPERIENCE</span>
        <strong>WATCH THE OPPORTUNITY MOVE.</strong>
      </div>

      <p>
        The customer sees a simple experience.
        Your business gets a connected next step.
      </p>

    </div>


    <div className="smart-journey-track">

      <div className="journey-line">
        <span />
      </div>


      {/* 01 — WEBSITE */}

      <article className="smart-stage">

        <div className="smart-stage-top">
          <span>01</span>
          <small>WEBSITE</small>
        </div>

        <div className="smart-stage-screen stage-website">

          <div className="stage-browser">
            <i />
            <i />
            <i />

            <span>riversidehomeservices.com</span>
          </div>

          <div className="stage-site-content">

            <small>SERVING HAMPTON ROADS</small>

            <strong>
              COMFORT
              <br />
              STARTS HERE.
            </strong>

            <button type="button">
              Schedule Service
            </button>

          </div>

        </div>

        <div className="smart-stage-copy">
          <span>VISITOR ARRIVES</span>
          <h3>They find you.</h3>

          <p>
            A professional experience gives them
            a reason to stay and take action.
          </p>
        </div>

      </article>


      {/* 02 — CONVERSATION */}

      <article className="smart-stage">

        <div className="smart-stage-top">
          <span>02</span>
          <small>CONVERSATION</small>
        </div>

        <div className="smart-stage-screen stage-conversation">

          <div className="conversation-header">

            <span className="conversation-avatar">
              R
            </span>

            <div>
              <strong>Riverside Concierge</strong>
              <small>Online now</small>
            </div>

          </div>


          <div className="conversation-thread">

            <div className="message customer-message">
              My AC stopped cooling this afternoon.
            </div>

            <div className="message business-message">
              I can help with that. Would you like
              to see the next available service time?
            </div>

            <div className="message customer-message short-message">
              Yes, please.
            </div>

          </div>

        </div>

        <div className="smart-stage-copy">
          <span>INTENT CAPTURED</span>
          <h3>They start a conversation.</h3>

          <p>
            The customer gets help while their
            interest is still active.
          </p>
        </div>

      </article>


      {/* 03 — APPOINTMENT */}

      <article className="smart-stage">

        <div className="smart-stage-top">
          <span>03</span>
          <small>NEXT STEP</small>
        </div>

        <div className="smart-stage-screen stage-appointment">

          <span className="available-label">
            NEXT AVAILABLE
          </span>

          <strong className="appointment-day">
            Tomorrow
          </strong>

          <div className="appointment-time">
            10:30
            <small>AM</small>
          </div>

          <button type="button">
            ✓ Appointment Confirmed
          </button>

        </div>

        <div className="smart-stage-copy">
          <span>ACTION TAKEN</span>
          <h3>They take the next step.</h3>

          <p>
            Interest becomes a real appointment
            instead of another missed opportunity.
          </p>
        </div>

      </article>


      {/* 04 — OPPORTUNITY */}

      <article className="smart-stage">

        <div className="smart-stage-top">
          <span>04</span>
          <small>CRM OPPORTUNITY</small>
        </div>

        <div className="smart-stage-screen stage-opportunity">

          <div className="opportunity-header">
            <span>NEW OPPORTUNITY</span>
            <b>LIVE</b>
          </div>

          <div className="opportunity-person">

            <div className="opportunity-avatar">
              SM
            </div>

            <div>
              <strong>Sarah M.</strong>
              <small>AC Repair</small>
            </div>

          </div>


          <div className="opportunity-data">

            <div>
              <span>APPOINTMENT</span>
              <strong>Tomorrow · 10:30 AM</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong className="status-booked">
                ● Appointment Booked
              </strong>
            </div>

          </div>

        </div>

        <div className="smart-stage-copy">
          <span>OPPORTUNITY CREATED</span>
          <h3>Your business gets the opportunity.</h3>

          <p>
            The next step is captured and connected
            to the customer record.
          </p>
        </div>

      </article>

    </div>

  </div>


  {/* =====================================================
      AI PHONE EMPLOYEE
  ===================================================== */}

  <div className="ai-employee-experience">

    <div className="ai-employee-copy">

      <p className="eyebrow">
        AND WHEN THEY CALL INSTEAD...
      </p>

      <h3>
        YOUR BUSINESS
        <br />
        CAN STILL
        <span> ANSWER.</span>
      </h3>

      <p className="ai-employee-lead">
        Your AI Phone Employee can answer the call,
        understand what the customer needs, capture
        important details and help move the conversation
        toward the right next step.
      </p>


      <div className="ai-employee-path">

        <span>ANSWER</span>
        <i>→</i>
        <span>UNDERSTAND</span>
        <i>→</i>
        <span>CAPTURE</span>
        <i>→</i>
        <span>NEXT STEP</span>

      </div>

      <small className="ai-coverage">
        AVAILABLE 24/7 OR WHENEVER YOUR BUSINESS NEEDS COVERAGE
      </small>

    </div>


    {/* LIVE CALL EXPERIENCE */}

    <div className="ai-call-stage">

      <div className="ai-call-glow" />

      <div className="ai-call-window">

        <div className="ai-call-header">

          <div className="ai-call-live">
            <span />
            LIVE CUSTOMER CALL
          </div>

          <small>00:47</small>

        </div>


        <div className="ai-caller">

          <div className="ai-caller-avatar">
            H
          </div>

          <div>
            <small>INCOMING CUSTOMER</small>
            <strong>Homeowner</strong>
            <span>Calling Riverside Home Services</span>
          </div>

        </div>


        <div className="ai-wave" aria-hidden="true">
          <span />
          <span />
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


        <div className="ai-call-conversation">

          <div className="ai-transcript customer">

            <span>CUSTOMER</span>

            <p>
              “My AC stopped cooling this afternoon.”
            </p>

          </div>


          <div className="ai-transcript employee">

            <span>RIVERSIDE AI PHONE EMPLOYEE</span>

            <p>
              “I can help with that. Let me get a few
              details and check the next available service time.”
            </p>

          </div>

        </div>


        <div className="ai-call-capture">

          <div>
            <small>NEED IDENTIFIED</small>
            <strong>AC Repair</strong>
          </div>

          <div>
            <small>CUSTOMER</small>
            <strong>Details Captured</strong>
          </div>

          <div>
            <small>NEXT STEP</small>
            <strong>Check Availability</strong>
          </div>

        </div>


        <div className="ai-call-status">

          <span>
            <i />
            Conversation in progress
          </span>

          <strong>
            CONNECTED TO THE CUSTOMER SYSTEM
          </strong>

        </div>

      </div>

    </div>

  </div>

</section>
{/* =====================================================
    INDUSTRY SHOWROOM
===================================================== */}

<section className="industries-section industries-luxury" id="industries">

  <div className="industries-heading">

    <p className="eyebrow">BUILT AROUND THE BUSINESS</p>

    <h2>
      DIFFERENT BUSINESS.
      <br />
      <span>DIFFERENT EXPERIENCE.</span>
    </h2>

    <p className="industries-intro">
      <strong>
        Your business isn't off-the-shelf.
        Your system shouldn't be either.
      </strong>

      <span>
        We design the website, customer experience and connected
        system around how your business actually works.
      </span>
    </p>

  </div>


  {/* =====================================================
      SHOWROOM CONTROLS
  ===================================================== */}

  <div className="showroom-controls">

    <div className="showroom-instruction">

      <span className="showroom-instruction-mark">↘</span>

      <div>
        <strong>EXPLORE THE EXPERIENCE</strong>
        <span>
          Choose an industry and watch the experience change.
        </span>
      </div>

    </div>


    <div className="industry-selector">

      {industries.map((industry, index) => (

        <button
          key={industry.id}
          type="button"
          className={
            activeIndustry === industry.id
              ? 'industry-tab industry-tab--active'
              : 'industry-tab'
          }
         onClick={() => changeIndustry(industry.id)}
        >
          <span className="industry-tab-number">
            {String(index + 1).padStart(2, '0')}
          </span>

          {industry.name}
        </button>

      ))}

    </div>

  </div>


  {/* =====================================================
      WEBSITE SHOWROOM
  ===================================================== */}

  <div className="showroom-stage">

    <div className="showroom-ambient showroom-ambient-one" />
    <div className="showroom-ambient showroom-ambient-two" />


    <div className="showroom-meta">

      <div>

        <span>12 STONE INDUSTRY CONCEPT</span>

        <strong>
          {currentIndustry.name}
        </strong>

      </div>


      <div className="showroom-counter">

        <span>
          {String(
            industries.findIndex(
              (industry) => industry.id === activeIndustry
            ) + 1
          ).padStart(2, '0')}
        </span>

        <i />

        <small>
          {String(industries.length).padStart(2, '0')}
        </small>

      </div>


      <span className="showroom-meta-right">
        SMART WEBSITE™ EXPERIENCE
      </span>

    </div>


    {/* WEBSITE ROTATION STAGE */}

  <div
  className={`showroom-perspective showroom-carousel ${
    slideDirection === -1 ? 'showroom-carousel--reverse' : ''
  }`}
>
  {outgoingIndustry && (
    <div
      key={`out-${outgoingIndustry}`}
      className="showroom-browser showroom-slide-out"
      aria-hidden="true"
    >
      <div className="showroom-browser-top">
        <div className="showroom-browser-dots">
          <i /><i /><i />
        </div>

        <div className="showroom-browser-address">
          <span className="showroom-secure-dot" />
          <strong>12 Stone Smart Website™ Concept</strong>
        </div>

        <div className="showroom-browser-menu">•••</div>
      </div>

      <div className="showroom-image-wrap">
        <img
          className="showroom-image"
          src={showroomImage(outgoingIndustry)}
          alt=""
        />
      </div>
    </div>
  )}

  <div
    key={`in-${displayIndustry}`}
    className={`showroom-browser ${
      outgoingIndustry ? 'showroom-slide-in' : ''
    }`}
  >
    <div className="showroom-browser-top">
      <div className="showroom-browser-dots">
        <i /><i /><i />
      </div>

      <div className="showroom-browser-address">
        <span className="showroom-secure-dot" />
        <strong>12 Stone Smart Website™ Concept</strong>
      </div>

      <div className="showroom-browser-menu">•••</div>
    </div>

    <div className="showroom-image-wrap">
      <img
        className="showroom-image"
        src={showroomImage(displayIndustry)}
        alt={`${industries.find((i) => i.id === displayIndustry)?.name} Smart Website concept`}
      />
    </div>
  </div>
</div>


    {/* SHOWROOM FOOTER */}

    <div className="showroom-bottom">

      <div>

        <span>DESIGNED AROUND</span>

        <strong>
          {currentIndustry.name}
        </strong>

      </div>


      <div className="showroom-statement">

        <span>NOT A TEMPLATE.</span>

        <p>
          A different business deserves
          <strong> a different experience.</strong>
        </p>

      </div>

    </div>

  </div>


  {/* =====================================================
      PHILOSOPHY
  ===================================================== */}

  <div className="industry-philosophy industry-philosophy-luxury">

    <div className="industry-philosophy-copy">

      <span>12 STONE SMART WEBSITE SYSTEM™</span>

      <h3>
        BUILT AROUND
        <br />
        YOUR BUSINESS.
        <br />
        <strong>
          NOT THE OTHER
          <br />
          WAY AROUND.
        </strong>
      </h3>

      <p>
        Different businesses need different customer experiences,
        workflows and capabilities. We connect the right pieces
        around how your business actually works.
      </p>

    </div>


    <div className="philosophy-flow">

      <div className="philosophy-flow-line">
        <span />
      </div>


      <div className="philosophy-node">

        <span>01</span>

        <div>
          <small>START HERE</small>
          <strong>YOUR BUSINESS</strong>
        </div>

      </div>


      <div className="philosophy-node">

        <span>02</span>

        <div>
          <small>DESIGN AROUND</small>
          <strong>YOUR CUSTOMER JOURNEY</strong>
        </div>

      </div>


      <div className="philosophy-node philosophy-node-final">

        <span>03</span>

        <div>
          <small>BUILD</small>
          <strong>YOUR SYSTEM</strong>
        </div>

      </div>

    </div>

  </div>

</section>

{/* =====================================================
    12 STONE CONNECTED CUSTOMER SYSTEM
===================================================== */}

<section
  className={`workflow-section ${journeyActive ? 'journey-animated' : ''}`}
  id="systems"
  ref={journeyRef}
>

  <div className="workflow-heading">
    <p className="eyebrow">THE CONNECTED CUSTOMER JOURNEY</p>

    <h2>
      YOUR WEBSITE STARTS
      <br />
      THE CONVERSATION.
      <span> YOUR SYSTEM KEEPS IT MOVING.</span>
    </h2>

    <p>
      From the first conversation through follow-up and the next
      opportunity, your customer experience stays connected.
    </p>
  </div>


  <div className="journey-stage">

    <div className="journey-path">

      <div className="journey-step">
        <span className="journey-number">01</span>

        <div className="journey-icon journey-icon-chat">
          <span>•••</span>
        </div>

        <strong>CONVERSATION</strong>

        <small>
          Website + Concierge
        </small>
      </div>


      <div className="journey-connector">
        <span>→</span>
      </div>


      <div className="journey-step">
        <span className="journey-number">02</span>

        <div className="journey-icon journey-icon-lead">
          <span>✓</span>
        </div>

        <strong>LEAD CAPTURED</strong>

        <small>
          Name · Email · Phone
        </small>
      </div>


      <div className="journey-connector">
        <span>→</span>
      </div>


      <div className="journey-step">
        <span className="journey-number">03</span>

        <div className="journey-icon journey-icon-next">
          <span>14</span>
        </div>

        <strong>NEXT STEP</strong>

        <small>
          Appointment · Consultation · Meeting
        </small>
      </div>


      <div className="journey-connector">
        <span>→</span>
      </div>


      <div className="journey-step">
        <span className="journey-number">04</span>

        <div className="journey-icon journey-icon-follow">
          <span>↗</span>
        </div>

        <strong>FOLLOW-UP</strong>

        <small>
          Confirmation · SMS · Email
        </small>
      </div>


      <div className="journey-connector">
        <span>→</span>
      </div>


      <div className="journey-step journey-step-customer">
        <span className="journey-number">05</span>

        <div className="journey-icon journey-icon-customer">
          <span>✓</span>
        </div>

        <strong>CUSTOMER</strong>

        <small>
          Client · Patient · Buyer
        </small>
      </div>


      <div className="journey-connector">
        <span>→</span>
      </div>


      <div className="journey-step">
        <span className="journey-number">06</span>

        <div className="journey-icon journey-icon-connected">
          <span>+</span>
        </div>

        <strong>STAY CONNECTED</strong>

        <small>
          Reviews · Value · Reminders
        </small>
      </div>


      <div className="journey-connector">
        <span>→</span>
      </div>


      <div className="journey-step journey-step-return">
        <span className="journey-number">07</span>

        <div className="journey-icon journey-icon-return">
          <span>↻</span>
        </div>

        <strong>RETURN + REFER</strong>

        <small>
          The next opportunity begins.
        </small>
      </div>

    </div>


    <div className="journey-understory">

      <div className="journey-understory-label">
        <span>WORKING BEHIND THE EXPERIENCE</span>
      </div>

      <div className="journey-signals">

        <span>CRM</span>
        <i />

        <span>CALENDAR</span>
        <i />

        <span>AUTOMATION</span>
        <i />

        <span>SMS + EMAIL</span>
        <i />

        <span>REVIEWS</span>
        <i />

        <span>NURTURE</span>

      </div>

    </div>


    <div className="journey-loop">

      <span className="journey-loop-arrow">↺</span>

      <div>
        <small>THE SALE ISN'T THE FINISH LINE</small>

        <strong>
          Winning the customer is only the beginning.
        </strong>
      </div>

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

{/* =========================================================
    BUSINESS COMMAND CENTER
========================================================= */}

<section className="command-section" id="business-system">

  <div className="command-heading">
    <p className="eyebrow">BEHIND THE EXPERIENCE</p>

    <h2>
      THE WEBSITE IS
      <br />
      THE FRONT DOOR.
      <br />
      <span>THE SYSTEM KEEPS THE BUSINESS MOVING.</span>
    </h2>

    <p>
      Your customers experience one connected business.
      Behind the scenes, your Smart Website System™ can connect
      the tools that help you capture opportunities, communicate,
      follow up and manage what happens next.
    </p>
  </div>


  <div className="command-experience">

    {/* LEFT OPERATING SIGNALS */}

    <div className="command-signals command-signals-left">

      <div className="command-signal">
        <span>CRM</span>
        <strong>Know where every opportunity stands.</strong>
      </div>

      <div className="command-signal">
        <span>WORKFLOWS</span>
        <strong>Keep the next step moving.</strong>
      </div>

      <div className="command-signal">
        <span>EMAIL + SMS</span>
        <strong>Stay connected without chasing every message.</strong>
      </div>

      <div className="command-signal">
        <span>CALENDAR</span>
        <strong>Turn conversations into scheduled next steps.</strong>
      </div>

    </div>


    {/* CENTER COMMAND CENTER */}

   <div
  ref={commandRef}
  className={`command-center ${commandActive ? 'command-active' : ''}`}
>

      <div className="command-browser">

        <div className="command-browser-top">

         <div className="command-browser-brand">
           
  <img
    src="/images/12-stone-logo.png"
    alt="12 Stone"
    className="command-brand-logo"
  />

  <span>BUSINESS COMMAND CENTER</span>

</div>

          <div className="command-live">
            <i />
            LIVE
          </div>

        </div>


        <div className="command-dashboard">

          <div className="command-dashboard-header">
            <div>
              <small>TODAY</small>
              <strong>Your Business at a Glance</strong>
            </div>

            <span>Wednesday · October 7</span>
          </div>


          <div className="command-metrics">

            <div>
              <span>NEW LEADS</span>
              <strong>18</strong>
              <small>New opportunities</small>
            </div>

            <div>
              <span>APPOINTMENTS</span>
              <strong>7</strong>
              <small>Scheduled next steps</small>
            </div>

            <div>
              <span>OPEN OPPORTUNITIES</span>
              <strong>12</strong>
              <small>Moving through pipeline</small>
            </div>

          </div>


          <div className="command-dashboard-main">

            <div className="command-pipeline">

              <div className="command-panel-title">
                <span>OPPORTUNITY PIPELINE</span>
                <small>LIVE ACTIVITY</small>
              </div>

              <div className="pipeline-row">
                <span>NEW LEAD</span>
                <div><i style={{ width: '82%' }} /></div>
                <strong>8</strong>
              </div>

              <div className="pipeline-row">
                <span>CONTACTED</span>
                <div><i style={{ width: '67%' }} /></div>
                <strong>6</strong>
              </div>

              <div className="pipeline-row">
                <span>SCHEDULED</span>
                <div><i style={{ width: '52%' }} /></div>
                <strong>4</strong>
              </div>

              <div className="pipeline-row">
                <span>CUSTOMER</span>
                <div><i style={{ width: '38%' }} /></div>
                <strong>3</strong>
              </div>

            </div>


            <div className="command-activity">

              <div className="command-panel-title">
                <span>SYSTEM ACTIVITY</span>
                <small>WORKING NOW</small>
              </div>

              <div className="activity-item">
                <i />
                <div>
                  <strong>Lead captured</strong>
                  <span>CRM updated automatically</span>
                </div>
                <small>NOW</small>
              </div>

              <div className="activity-item">
                <i />
                <div>
                  <strong>Appointment confirmed</strong>
                  <span>SMS + email sent</span>
                </div>
                <small>2M</small>
              </div>

              <div className="activity-item">
                <i />
                <div>
                  <strong>Review request sent</strong>
                  <span>Customer follow-up</span>
                </div>
                <small>8M</small>
              </div>

            </div>

          </div>

        </div>

      </div>


      <div className="command-center-caption">
        <span>12 STONE SMART WEBSITE SYSTEM™</span>
        <strong>See what's happening in your business.</strong>
      </div>

    </div>


    {/* RIGHT OPERATING SIGNALS */}

    <div className="command-signals command-signals-right">

      <div className="command-signal">
        <span>INVOICING + PAYMENTS</span>
        <strong>Make it easier to move from work to payment.</strong>
      </div>

      <div className="command-signal">
        <span>REVIEWS</span>
        <strong>Turn great experiences into reputation.</strong>
      </div>

      <div className="command-signal">
        <span>REACTIVATION</span>
        <strong>Reconnect with opportunities already in your business.</strong>
      </div>

      <div className="command-signal">
        <span>REPORTING</span>
        <strong>See what's working and where attention is needed.</strong>
      </div>

    </div>

  </div>


  <div className="command-bottom">

    <span>BUILT AROUND WHAT YOUR BUSINESS NEEDS</span>

    <p>
      Not every business needs every capability.
      We connect the right pieces around how your business operates.
    </p>

  </div>

</section>

{/* =========================================================
    GET FOUND — SEO / AEO / GEO
========================================================= */}

<section
  ref={discoveryRef}
  className={`discovery-section ${discoveryActive ? 'discovery-active' : ''}`}
  id="visibility"
>

  <div className="discovery-intro">

    <p className="eyebrow">BEING BUILT TO CONVERT ISN'T ENOUGH</p>

    <h2>
      FIRST, THEY HAVE
      <br />
      TO <span>FIND YOU.</span>
    </h2>

    <p className="discovery-lead">
      Your Smart Website should be built to help people — and the
      platforms they use — understand who you are, what you do,
      who you serve and where you serve them.
    </p>

  </div>


  <div className="discovery-experience">

    {/* SEARCH / QUESTION */}

    <div className="discovery-question">

      <span className="discovery-step">01 / THEY SEARCH OR ASK</span>

      <div className="search-window">

        <div className="search-bar">
          <span className="search-icon">⌕</span>

          <div>
            <small>SEARCH</small>
            <strong>
              Who can help me with this near me?
            </strong>
          </div>
        </div>

        <div className="search-suggestions">

          <span>Search engines</span>
          <span>AI assistants</span>
          <span>Maps + local search</span>

        </div>

      </div>

    </div>


    {/* CONNECTION PATH */}

    <div className="discovery-path" aria-hidden="true">

      <span />
      <i />
      <span />

    </div>


    {/* BUSINESS DISCOVERED */}

    <div className="discovery-result">

      <span className="discovery-step">02 / YOUR BUSINESS IS DISCOVERED</span>

      <div className="result-card">

        <div className="result-top">

          <img
            src="/images/12-stone-logo.png"
            alt=""
          />

          <div>
            <small>RELEVANT BUSINESS</small>
            <strong>Your Business</strong>
          </div>

        </div>

        <h3>
          The right business.
          <br />
          At the right moment.
        </h3>

        <p>
          Clear services, useful answers, strong local signals
          and a website structured to be understood.
        </p>

        <div className="result-actions">
          <span>VISIT WEBSITE</span>
          <span>START CONVERSATION →</span>
        </div>

      </div>

    </div>

  </div>


  {/* VISIBILITY FOUNDATION */}

  <div className="visibility-foundation">

    <div className="visibility-copy">

      <span>BUILT INTO THE FOUNDATION</span>

      <h3>
        DIFFERENT WAYS TO SEARCH.
        <br />
        <strong>ONE BUSINESS TO FIND.</strong>
      </h3>

      <p>
        We build discoverability into the structure of the
        experience — so your business is positioned for the
        ways customers search today and the ways discovery
        continues to evolve.
      </p>

    </div>


    <div className="visibility-layers">

      <div className="visibility-layer">
        <span>SEO</span>

        <div>
          <strong>SEARCH</strong>
          <p>
            Help search engines understand your pages,
            services and relevance.
          </p>
        </div>
      </div>


      <div className="visibility-layer">
        <span>AEO</span>

        <div>
          <strong>ANSWERS</strong>
          <p>
            Structure useful information around the
            questions customers are asking.
          </p>
        </div>
      </div>


      <div className="visibility-layer">
        <span>GEO</span>

        <div>
          <strong>AI + LOCAL DISCOVERY</strong>
          <p>
            Strengthen the signals that help platforms
            understand your business, services and market.
          </p>
        </div>
      </div>

    </div>

  </div>


  <div className="discovery-close">

    <span>GET FOUND</span>
    <i>→</i>
    <span>GET VISITED</span>
    <i>→</i>
    <span>START THE CONVERSATION</span>

  </div>

</section>

{/* =========================================================
    HOW WE BUILD IT — 12 STONE METHOD
========================================================= */}

<section
  ref={methodRef}
  className={`method-section ${methodActive ? 'method-active' : ''}`}
  id="method"
>

  <div className="method-intro">

    <p className="eyebrow">THE 12 STONE METHOD</p>

    <h2>
      WE DON'T START
      <br />
      WITH THE WEBSITE.
      <br />
      <span>WE START WITH YOUR BUSINESS.</span>
    </h2>

    <p>
      Before we decide what to build, we understand how your
      business works — how customers find you, what happens next,
      where opportunities may be getting lost and what should
      stay connected.
    </p>

  </div>


  {/* =======================================================
      CIRCULAR METHOD
  ======================================================== */}

  <div className="method-experience">

    <div className="method-orbit">

      <div className="method-orbit-ring" aria-hidden="true" />

      <div className="method-center">

        <img
          src="/images/12-stone-logo.png"
          alt=""
        />

        <span>BUILT AROUND</span>
        <strong>YOUR BUSINESS</strong>

      </div>


      <div className="method-stage method-discover">
        <small>01</small>
        <strong>DISCOVER</strong>
        <span>Understand the business.</span>
      </div>


      <div className="method-stage method-design">
        <small>02</small>
        <strong>DESIGN</strong>
        <span>Shape the experience.</span>
      </div>


      <div className="method-stage method-build">
        <small>03</small>
        <strong>BUILD</strong>
        <span>Create the system.</span>
      </div>


      <div className="method-stage method-connect">
        <small>04</small>
        <strong>CONNECT</strong>
        <span>Connect what happens next.</span>
      </div>


      <div className="method-stage method-optimize">
        <small>05</small>
        <strong>OPTIMIZE</strong>
        <span>Learn. Improve. Repeat.</span>
      </div>


      <div className="method-orbit-dot" aria-hidden="true" />

    </div>


    {/* =====================================================
        DISCOVER — TOOLS / PROCESS
    ====================================================== */}

    <div className="method-discover-panel">

      <div className="discover-panel-heading">

        <span>01 / DISCOVER</span>

        <h3>
          BEFORE WE BUILD,
          <br />
          <strong>WE LEARN.</strong>
        </h3>

        <p>
          The right system starts with understanding the business,
          not choosing software.
        </p>

      </div>


      <div className="discover-tools">


        {/* BUSINESS SNAPSHOT */}

        <div className="discover-tool">

          <span className="discover-tool-number">01</span>

          <div>
            <small>DIAGNOSTIC</small>

            <h4>BUSINESS SNAPSHOT™</h4>

            <p>
              A high-level look at the customer experience,
              response, follow-up, retention and connected
              capabilities of the business.
            </p>
          </div>

        </div>


        <div className="discover-tool-arrow" aria-hidden="true">
          →
        </div>


        {/* DISCOVERY SESSION */}

        <div className="discover-tool">

          <span className="discover-tool-number">02</span>

          <div>
            <small>DEEPER DISCOVERY</small>

            <h4>DISCOVERY SESSION</h4>

            <p>
              We go deeper into how customers find you,
              how leads are handled, what happens after contact
              and where opportunities may be falling through.
            </p>
          </div>

        </div>


        <div className="discover-tool-arrow" aria-hidden="true">
          →
        </div>


        {/* PLAYBOOK */}

        <div className="discover-tool discover-tool-playbook">

          <span className="discover-tool-number">03</span>

          <div>
            <small>STRATEGY</small>

            <h4>12 STONE PLAYBOOK™</h4>

            <p>
              What we learn becomes the strategy for the
              experience, systems and connections we recommend.
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>


  {/* =======================================================
      METHOD DETAILS
  ======================================================== */}

  <div className="method-details">

    <div>
      <span>01</span>

      <p>
        <strong>DISCOVER</strong>
        Understand the business, customer journey,
        priorities and capability gaps.
      </p>
    </div>


    <div>
      <span>02</span>

      <p>
        <strong>DESIGN</strong>
        Shape the website, customer experience and
        system around how the business actually works.
      </p>
    </div>


    <div>
      <span>03</span>

      <p>
        <strong>BUILD</strong>
        Create the Smart Website™ and the experiences
        customers will actually use.
      </p>
    </div>


    <div>
      <span>04</span>

      <p>
        <strong>CONNECT</strong>
        Connect the appropriate CRM, communication,
        scheduling, follow-up and business systems.
      </p>
    </div>


    <div>
      <span>05</span>

      <p>
        <strong>OPTIMIZE</strong>
        Learn from what happens and continue improving
        the experience as the business evolves.
      </p>
    </div>

  </div>


  {/* =======================================================
      CLOSE
  ======================================================== */}

  <div className="method-close">

    <span>DISCOVER → DESIGN → BUILD → CONNECT → OPTIMIZE</span>

    <h3>
      YOUR BUSINESS ISN'T STATIC.
      <br />
      <strong>YOUR SYSTEM SHOULDN'T BE EITHER.</strong>
    </h3>

    <p>
      What we learn feeds what we improve.
      The process continues as your business grows.
    </p>

  </div>

</section>

{/* =========================================================
    EXECUTIVE UPGRADE
========================================================= */}

<section
  ref={executiveRef}
  className={`executive-section ${executiveActive ? 'executive-active' : ''}`}
  id="executive-upgrade"
>

  <div className="executive-intro">

    <div className="executive-heading">

      <p className="eyebrow">EXECUTIVE UPGRADE™</p>

      <h2>
        FOR BUSINESSES
        <br />
        READY TO
        <br />
        <span>GO FURTHER.</span>
      </h2>

    </div>

    <div className="executive-copy">

      <p>
        Some businesses need more than the core system.
        Executive Upgrade™ adds advanced visibility,
        communication and automation around the way
        your business operates.
      </p>

      <span>
        ADVANCED CAPABILITY. BUILT AROUND THE BUSINESS.
      </span>

    </div>

  </div>


  {/* =====================================================
      EXECUTIVE COMMAND VISUAL
  ====================================================== */}

  <div className="executive-experience">

    <div className="executive-core">

      <div className="executive-core-top">

        <img
          src="/images/12-stone-logo.png"
          alt=""
        />

        <div>
          <span>EXECUTIVE VIEW</span>
          <strong>BUSINESS COMMAND CENTER</strong>
        </div>

      </div>


      <div className="executive-core-main">

        <div className="executive-status">

          <small>BUSINESS PULSE</small>

          <strong>
            See more.
            <br />
            Know more.
            <br />
            <span>Respond faster.</span>
          </strong>

        </div>


        <div className="executive-pulse">

          <span />
          <span />
          <span />
          <span />
          <span />

        </div>

      </div>

    </div>


    {/* ADVANCED CAPABILITIES */}

    <div className="executive-capabilities">


      <div className="executive-capability">

        <span>01</span>

        <div>
          <small>VISIBILITY</small>
          <strong>EXECUTIVE DASHBOARD</strong>

          <p>
            Bring important business activity and
            performance indicators into one view.
          </p>
        </div>

      </div>


      <div className="executive-capability">

        <span>02</span>

        <div>
          <small>COMMUNICATION</small>
          <strong>ADVANCED AI PHONE EMPLOYEE</strong>

          <p>
            Expand how your business can respond,
            route conversations and support customers.
          </p>
        </div>

      </div>


      <div className="executive-capability">

        <span>03</span>

        <div>
          <small>FOLLOW-UP</small>
          <strong>AI OUTBOUND FOLLOW-UP</strong>

          <p>
            Add intelligent outbound communication
            where it makes sense for the customer journey.
          </p>
        </div>

      </div>


      <div className="executive-capability">

        <span>04</span>

        <div>
          <small>PERSONAL CONNECTION</small>
          <strong>VOICE MESSAGING</strong>

          <p>
            Record and send voice messages that keep
            important conversations moving.
          </p>
        </div>

      </div>


      <div className="executive-capability">

        <span>05</span>

        <div>
          <small>OPERATIONS</small>
          <strong>ADVANCED AUTOMATION</strong>

          <p>
            Connect more complex processes and reduce
            repetitive manual steps.
          </p>
        </div>

      </div>


      <div className="executive-capability">

        <span>06</span>

        <div>
          <small>INSIGHT</small>
          <strong>ADVANCED REPORTING</strong>

          <p>
            Turn connected business activity into
            clearer operational insight.
          </p>
        </div>

      </div>


    </div>

  </div>


  <div className="executive-close">

    <div>
      <span>NOT MORE SOFTWARE.</span>

      <h3>
        MORE CAPABILITY
        <br />
        <strong>WHERE IT MATTERS.</strong>
      </h3>
    </div>

    <p>
      Executive Upgrade™ is configured around the business.
      Capabilities vary based on the systems, workflows and
      outcomes the business actually needs.
    </p>

  </div>

</section>

{/* =========================================================
    START THE CONVERSATION — LEAD CAPTURE
========================================================= */}

<section className="start-section" id="start-discovery">

  <div className="start-shell">

    <div className="start-copy">

      <p className="eyebrow">YOUR BUSINESS. YOUR SYSTEM.</p>

      <h2>
        WHAT COULD
        <br />
        12 STONE BUILD
        <br />
        <span>FOR YOUR BUSINESS?</span>
      </h2>

      <p className="start-lead">
        You've seen what's possible. Now let's start with your
        business and what you want to accomplish.
      </p>

      <div className="start-promise">

        <span>01</span>
        <p>
          <strong>Tell us who you are.</strong>
          Just the basics to get the conversation started.
        </p>

        <span>02</span>
        <p>
          <strong>Choose what happens next.</strong>
          You decide whether to tell us more or talk with us first.
        </p>

        <span>03</span>
        <p>
          <strong>No long questionnaire just to get started.</strong>
          We'll earn the next step.
        </p>

      </div>

    </div>


    <div className="start-form-wrap">

      <div className="start-form-heading">

        <span>LET'S START WITH YOUR BUSINESS.</span>

        <h3>
          Tell us where to reach you.
          <br />
          <strong>We'll take it from there.</strong>
        </h3>

      </div>


  <form
  className="start-form"
  name="12-Stone-Discovery"
 
onSubmit={async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const submitButton = form.querySelector('button[type="submit"]');
  const formData = new FormData(form);

  const lead = {
    name: formData.get("name"),
    business: formData.get("business"),
    email: formData.get("email"),
    phone: formData.get("phone"),
  };

  submitButton.disabled = true;

  try {
    const response = await fetch("/api/discovery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.error || "Submission failed.");
    }

    window.alert(
      "Thank you! Your information has been received. We'll be in touch soon."
    );

    form.reset();
  } catch (error) {
    console.error("12 STONE submission error:", error);
    window.alert(
      "We couldn't submit your information. Please try again."
    );
  } finally {
    submitButton.disabled = false;
  }
}}

>

        <div className="start-field">
          <label htmlFor="lead-name">YOUR NAME</label>

          <input
            id="lead-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </div>


        <div className="start-field">
          <label htmlFor="lead-business">BUSINESS NAME</label>

          <input
            id="lead-business"
            name="business"
            type="text"
            autoComplete="organization"
            placeholder="Business name"
            required
          />
        </div>


        <div className="start-field">
          <label htmlFor="lead-email">EMAIL</label>

          <input
            id="lead-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@yourbusiness.com"
            required
          />
        </div>


        <div className="start-field">
          <label htmlFor="lead-phone">MOBILE NUMBER</label>

          <input
            id="lead-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(757) 555-1234"
            required
          />
        </div>


        <button className="start-submit" type="submit">
          <span>SHOW ME WHAT'S NEXT</span>
          <i>→</i>
        </button>


        <p className="start-form-note">
          Takes less than a minute to get started.
        </p>

      </form>

    </div>

  </div>

</section>
    </main>
  )
}

export default App