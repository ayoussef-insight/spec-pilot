export interface WidgetProps {
  className?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  timestamp: Date;
  content: string;
}

export interface QuickLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}
