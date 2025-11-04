import { mockQuickLinks } from '../../../data/mockQuickLinks';
import './QuickLinksWidget.css';

export function QuickLinksWidget() {
  return (
    <div className="quick-links-widget">
      <h2 className="widget-title">Quick Links</h2>
      <div className="quick-links-grid">
        {mockQuickLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className="quick-link-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="quick-link-icon">{link.icon}</span>
            <span className="quick-link-name">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
