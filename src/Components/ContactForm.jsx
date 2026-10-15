import { useState, useEffect, useMemo, useRef } from "react";
import "./contactform.css";

/* ============================ IKONE ============================ */
const ScopeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
    <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
  </svg>
);

const DeadlineIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v4l2.5 2" />
  </svg>
);

const ProposalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.4 7.2 16.9l.9-5.4L4.2 7.7l5.4-.8L12 2z" />
  </svg>
);

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const ArrowUpRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const VideoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="14" height="12" rx="2" />
    <path d="M22 8l-6 4 6 4V8z" fill="currentColor" stroke="none" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const CalendarEmptyIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
    <path d="M12 14v3M10.5 15.5h3" />
  </svg>
);

/* ============================ KONSTANTE ============================ */
const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/* ===================================================================
   GOOGLE BOOKING LINK — ovde ubaci svoj link
   =================================================================== */
const BOOKING_URL = "https://calendar.app.google/LnHZqhvm4r6Dx8CH7";

/* ============================ POMOĆNE ============================ */
const startOfDay = (d) => {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
};

/* Prosleđuje SAMO datum Google-u. Vreme bira korisnik na Google stranici. */
const buildBookingUrl = (baseUrl, date) => {
  if (!date) return baseUrl;

  const y = date.getFullYear();
  const mo = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const dateStr = `${y}-${mo}-${d}`;

  const sep = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${sep}date=${dateStr}`;
};

/* ============================ KOMPONENTA ============================ */
export default function ContactForm() {
  const today = useMemo(() => startOfDay(new Date()), []);

  const [viewMonth, setViewMonth] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [copied, setCopied] = useState(false);

  /* ---------- Lock body scroll + ESC ---------- */
  useEffect(() => {
    if (!modalOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") setModalOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [modalOpen]);

  /* ---------- kalendar ---------- */
  const calendarData = useMemo(() => {
    const y = viewMonth.getFullYear(); const m = viewMonth.getMonth();
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const firstDay = new Date(y, m, 1).getDay();
    const offset = (firstDay + 6) % 7;
    const cells = [];
    for (let i = 0; i < offset; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(y, m, d));
    return cells;
  }, [viewMonth]);

  const isPast = (date) => {
    if (!date) return false;
    return startOfDay(date).getTime() < today.getTime();
  };

  const isToday = (date) =>
    date && date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();

  const isSelected = (date) =>
    date && selectedDate && date.getDate() === selectedDate.getDate() && date.getMonth() === selectedDate.getMonth() && date.getFullYear() === selectedDate.getFullYear();

  const canGoPrev = viewMonth.getFullYear() > today.getFullYear() ||
    (viewMonth.getFullYear() === today.getFullYear() && viewMonth.getMonth() > today.getMonth());

  const handlePrev = () => { if (canGoPrev) setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1)); };
  const handleNext = () => setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1));

  const handleDateClick = (date) => {
    if (!date || isPast(date)) return;
    setSelectedDate(date);
    setConfirmed(false);
  };

  /* ===================================================================
     Otvara Google booking u modalu sa izabranim DATUMOM
     Vreme korisnik bira na Google stranici (jer samo Google zna šta je slobodno)
     =================================================================== */
  const handleConfirm = () => {
    if (!selectedDate) return;

    const url = buildBookingUrl(BOOKING_URL, selectedDate);
    setModalUrl(url);
    setModalOpen(true);
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    setSelectedDate(null);
    setModalUrl("");
  };

  const handleCopyEmail = () => {
    const email = "alex.gagic@tensilesecurity.com";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
  };

  const formattedDate = selectedDate
    ? `${MONTHS[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
    : "";

  return (
    <>
      <section className="bk-page" id="book-call">
        <div className="bk-grid">

          {/* ================= LEVI PANEL ================= */}
          <aside className="bk-info">
            <div className="bk-info-header">
              <span className="bk-tag">WHAT HAPPENS ON THIS CALL:</span>
            </div>

            <ul className="bk-features">
              <li className="bk-feature">
                <div className="bk-feature-icon"><ScopeIcon /></div>
                <div className="bk-feature-body">
                  <h3 className="bk-feature-title">SCOPE SIZING</h3>
                  <p className="bk-feature-text">
                    A few questions about your app: user roles, API endpoints, hosts in scope.
                    This sizes your engagement to the right scope band, no surprises later.
                  </p>
                </div>
              </li>

              <li className="bk-feature">
                <div className="bk-feature-icon"><DeadlineIcon /></div>
                <div className="bk-feature-body">
                  <h3 className="bk-feature-title">YOUR DEADLINE</h3>
                  <p className="bk-feature-text">
                    Tell us the date of the security review, audit or signature. We mirror it
                    against the cohort calendar and tell you honestly whether we can make it.
                  </p>
                </div>
              </li>

              <li className="bk-feature">
                <div className="bk-feature-icon"><ProposalIcon /></div>
                <div className="bk-feature-body">
                  <h3 className="bk-feature-title">PROPOSAL IN ONE WORKING DAY</h3>
                  <p className="bk-feature-text">
                    Your band, your price, your cohort slot, in writing.
                    50% deposit books the slot.
                  </p>
                </div>
              </li>
            </ul>

            <div className="bk-confidential">
              <div className="bk-conf-title">
                <LockIcon />
                <span>CONFIDENTIALITY GUARANTEED</span>
              </div>
              <p className="bk-conf-text">
                We are happy to sign your NDA before the call.
                Just email it to <strong>alex.gagic@tensilesecurity.com</strong> or bring it to the meeting.
              </p>
              <div className="bk-conf-actions">
                <a href="mailto:alex.gagic@tensilesecurity.com" className="bk-conf-email">
                  alex.gagic@tensilesecurity.com
                </a>
                <button type="button" className="bk-conf-arrow" onClick={handleCopyEmail} aria-label="Copy email">
                  {copied ? <CheckIcon /> : <ArrowUpRight />}
                </button>
              </div>
            </div>
          </aside>

          {/* ================= DESNI PANEL ================= */}
          <div className="bk-book">
            <span className="bk-book-tag">BOOK STRATEGY CALL</span>

            <div className="bk-card">
              <div className="bk-host">
                <div className="bk-avatar" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.4 7.2 17.9l.9-5.4L4.2 8.7l5.4-.8L12 3z" />
                  </svg>
                </div>
                <span className="bk-host-name">Alex Gagic</span>
              </div>

              <h2 className="bk-title">Consultation with Alex Gagic</h2>

              <ul className="bk-meta">
                <li><ClockIcon /> <span>Session duration 30 min</span></li>
                <li><VideoIcon /> <span>Google Meet link will be sent after booking</span></li>
              </ul>

              {/* ===== PICKER — samo kalendar za datum ===== */}
              <div className="bk-picker bk-picker--single">
                <div className="bk-calendar">
                  <div className="bk-cal-header">
                    <h3 className="bk-cal-title">Pick a date</h3>
                    <span className="bk-cal-region">Serbia</span>
                  </div>

                  <div className="bk-month">
                    <button type="button" className="bk-month-btn" onClick={handlePrev} disabled={!canGoPrev} aria-label="Previous month">
                      <ChevronLeft />
                    </button>
                    <span className="bk-month-label">{MONTHS[viewMonth.getMonth()]} {viewMonth.getFullYear()}</span>
                    <button type="button" className="bk-month-btn" onClick={handleNext} aria-label="Next month">
                      <ChevronRight />
                    </button>
                  </div>

                  <div className="bk-weekdays">
                    {WEEK_DAYS.map((d) => <span key={d} className="bk-weekday">{d}</span>)}
                  </div>

                  <div className="bk-days">
                    {calendarData.map((date, i) => {
                      if (!date) return <span key={i} className="bk-day bk-day--empty" />;
                      const disabled = isPast(date);
                      const selected = isSelected(date);
                      const today_ = isToday(date);
                      return (
                        <button key={i} type="button"
                          className={["bk-day", disabled && "is-disabled", selected && "is-selected", today_ && "is-today"].filter(Boolean).join(" ")}
                          onClick={() => handleDateClick(date)} disabled={disabled}>
                          {date.getDate()}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ===== INFO PANEL — umesto time slotova ===== */}
                <div className="bk-slots">
                  {selectedDate ? (
                    <div className="bk-date-info">
                      <div className="bk-slot-head">
                        <span className="bk-slot-day-num">{selectedDate.getDate()}</span>
                        <span className="bk-slot-day-name">{WEEK_DAYS[(selectedDate.getDay() + 6) % 7]}</span>
                      </div>
                      <p className="bk-date-info-text">
                        Click <strong>Continue</strong> to see live available time slots for this day
                        and confirm your booking.
                      </p>
                    </div>
                  ) : (
                    <div className="bk-slot-empty">
                      <CalendarEmptyIcon />
                      <p>Select a date to continue with the booking</p>
                    </div>
                  )}
                </div>
              </div>

              {!confirmed && selectedDate && (
                <button type="button" className="bk-confirm" onClick={handleConfirm}>
                  <span>Continue to booking — {formattedDate}</span>
                  <ArrowUpRight />
                </button>
              )}

              {confirmed && (
                <div className="bk-success">
                  <div className="bk-success-icon"><CheckIcon /></div>
                  <div className="bk-success-body">
                    <strong>Booking form opened</strong>
                    <span>Pick a time for {formattedDate} on the Google page in the popup.</span>
                  </div>
                  <button type="button" className="bk-success-reset" onClick={() => setModalOpen(true)}>
                    Open again
                  </button>
                </div>
              )}

              <div className="bk-card-footer">
                <span className="bk-foot-item"><ClockIcon /> AVG. CALL DURATION: 30 MIN</span>
                <span className="bk-foot-item">UTC TIMEZONE SYNC</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= MODAL ================= */}
      {modalOpen && (
        <div
          className="bk-modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
        >
          <div className="bk-modal">
            <button type="button" className="bk-modal-close" onClick={() => setModalOpen(false)} aria-label="Close">
              <CloseIcon />
            </button>
            <iframe src={modalUrl} title="Book a call" allow="camera; microphone" />
          </div>
        </div>
      )}
    </>
  );
}