import { mockNews } from '../../../data/mockNews';
import './NewsWidget.css';

export function NewsWidget() {
  const getTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - timestamp.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else if (diffHours > 0) {
      return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    } else if (diffMins > 0) {
      return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
    } else {
      return 'Just now';
    }
  };

  return (
    <div className="news-widget">
      <h2 className="widget-title">Latest News</h2>
      <div className="news-list">
        {mockNews.slice(0, 5).map((item) => (
          <div key={item.id} className="news-item">
            <h3 className="news-title">{item.title}</h3>
            <p className="news-content">{item.content}</p>
            <span className="news-time">{getTimeAgo(item.timestamp)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
