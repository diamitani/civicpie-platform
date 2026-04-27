import { Calendar, MapPin, ExternalLink, Tag, Clock } from 'lucide-react';

const catColors = {
  'Community Meeting': 'badge-blue',
  'Infrastructure': 'badge-amber',
  'Civic Participation': 'badge-green',
  'Volunteer': 'badge-purple',
  'Voting': 'badge-teal',
};

function formatDate(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });
}

function EventCard({ event }) {
  const isPast = new Date(event.endDate || event.date) < new Date();

  return (
    <div className="glass-card event-card">
      <div className="event-top">
        <span className={`badge ${catColors[event.category] || 'badge-blue'}`}>{event.category}</span>
        {event.recurring && <span className="badge badge-teal" style={{ fontSize: '0.625rem' }}>Recurring</span>}
      </div>
      <h4 style={{ margin: '0.75rem 0 0.5rem', fontSize: '1rem' }}>{event.title}</h4>
      <p style={{ fontSize: '0.8125rem', marginBottom: '0.75rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        {event.description}
      </p>
      <div className="event-meta">
        <span><Calendar size={13} /> {formatDate(event.date)}{event.endDate ? ` — ${formatDate(event.endDate)}` : ''}</span>
        {event.time && <span><Clock size={13} /> {event.time}</span>}
        {event.location && <span><MapPin size={13} /> {event.location}</span>}
      </div>
      {event.link && (
        <a href={event.link} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ marginTop: '0.75rem', fontSize: '0.75rem' }}>
          Learn More <ExternalLink size={12} />
        </a>
      )}

      <style>{`
        .event-card { padding: 1.25rem; display: flex; flex-direction: column; }
        .event-top { display: flex; gap: 0.375rem; flex-wrap: wrap; }
        .event-meta {
          display: flex; flex-direction: column; gap: 0.375rem;
          font-size: 0.75rem; color: var(--cp-gray-600);
        }
        .event-meta span { display: flex; align-items: center; gap: 6px; }
      `}</style>
    </div>
  );
}

export default function EventsSection({ events }) {
  return (
    <section id="events" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="icon"><Calendar size={18} /></div>
            <h2>Events & Deadlines</h2>
          </div>
          <a href="https://www.the48thward.org/calendar" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Full Calendar <ExternalLink size={14} />
          </a>
        </div>
        <div className="grid-3">
          {events.map(e => <EventCard key={e.id} event={e} />)}
        </div>
      </div>
    </section>
  );
}
