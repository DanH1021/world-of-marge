import { Link } from 'react-router-dom';
import { WEEK, hours, hoursNote, groupHours, todayKey } from '../data/hours';
import './Hours.css';

/** Compact grouped lines, e.g. "Tue – Thu  6pm – midnight". Used on concept cards. */
export function HoursSummary({ conceptKey }) {
  const schedule = hours[conceptKey];
  if (!schedule) {
    return hoursNote[conceptKey] ? <p className="hours-summary hours-summary-note">{hoursNote[conceptKey]}</p> : null;
  }
  return (
    <dl className="hours-summary">
      {groupHours(schedule).map((g) => (
        <div key={g.days} className="hours-summary-row">
          <dt>{g.days}</dt>
          <dd>{g.time}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Full Monday–Sunday list with today highlighted. Used in each concept's Visit panel. */
export function HoursWeek({ conceptKey }) {
  const schedule = hours[conceptKey];
  if (!schedule) {
    return (
      <div className="hours-week">
        <h4 className="hours-week-title">Hours</h4>
        <p className="hours-week-note">{hoursNote[conceptKey] || 'Hours coming soon'}</p>
      </div>
    );
  }
  const today = todayKey();
  return (
    <div className="hours-week">
      <h4 className="hours-week-title">Hours</h4>
      <table className="hours-week-table">
        <caption className="visually-hidden">Weekly hours</caption>
        <tbody>
          {WEEK.map((day) => {
            const time = schedule[day.key];
            const isToday = day.key === today;
            return (
              <tr key={day.key} className={`${isToday ? 'is-today' : ''} ${time ? '' : 'is-closed'}`}>
                <th scope="row">
                  {day.long}
                  {isToday && <span className="hours-today-tag">Today</span>}
                </th>
                <td>{time || 'Closed'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/** Every concept × every day, for the Eat & Drink page. */
export function HoursAtAGlance({ concepts }) {
  const today = todayKey();
  return (
    <>
    <ul className="hours-glance-list">
      {concepts.map(({ key, concept }) => (
        <li key={key}>
          <Link to={concept.path} className="hours-glance-list-name">{concept.name}</Link>
          <span className="hours-glance-place">{concept.place}</span>
          <HoursSummary conceptKey={key} />
        </li>
      ))}
    </ul>
    <div className="hours-glance-wrap" role="region" aria-label="Hours at a glance" tabIndex={0}>
      <table className="hours-glance">
        <thead>
          <tr>
            <th scope="col" className="hours-glance-corner"><span className="visually-hidden">Location</span></th>
            {WEEK.map((d) => (
              <th scope="col" key={d.key} className={d.key === today ? 'is-today' : ''}>
                <abbr title={d.long}>{d.short}</abbr>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {concepts.map(({ key, concept }) => {
            const schedule = hours[key];
            return (
              <tr key={key}>
                <th scope="row">
                  <Link to={concept.path}>{concept.name}</Link>
                  <span className="hours-glance-place">{concept.place}</span>
                </th>
                {schedule
                  ? WEEK.map((d) => (
                      <td key={d.key} className={`${schedule[d.key] ? 'is-open' : 'is-closed'} ${d.key === today ? 'is-today' : ''}`}>
                        {schedule[d.key] || <span aria-label="Closed">—</span>}
                      </td>
                    ))
                  : <td colSpan={7} className="hours-glance-note">{hoursNote[key] || 'Hours coming soon'}</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
}
