import { SearchBox } from '../../components/SearchBox/SearchBox';
import { WeatherWidget } from '../../components/widgets/WeatherWidget/WeatherWidget';
import { MapWidget } from '../../components/widgets/MapWidget/MapWidget';
import { ClockWidget } from '../../components/widgets/ClockWidget/ClockWidget';
import { NewsWidget } from '../../components/widgets/NewsWidget/NewsWidget';
import { QuickLinksWidget } from '../../components/widgets/QuickLinksWidget/QuickLinksWidget';
import './HomeScreen.css';

export function HomeScreen() {
  return (
    <div className="home-screen">
      <div className="home-screen-container">
        <SearchBox />
        <div className="widgets-grid">
          <WeatherWidget />
          <ClockWidget />
          <MapWidget />
          <NewsWidget />
          <QuickLinksWidget />
        </div>
      </div>
    </div>
  );
}
