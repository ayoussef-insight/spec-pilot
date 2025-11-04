import { useState, useEffect } from 'react';
import './ClockWidget.css';

export function ClockWidget() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeString = currentTime.toLocaleTimeString('en-AU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const dateString = currentTime.toLocaleDateString('en-AU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="clock-widget">
      <h2 className="widget-title">Time</h2>
      <div className="clock-content">
        <div className="clock-time">{timeString}</div>
        <div className="clock-date">{dateString}</div>
      </div>
    </div>
  );
}
