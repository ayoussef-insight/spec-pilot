# Home Screen Implementation Plan

## Objective
Implement a home screen with search functionality and interactive widgets (weather, map, and additional informational widgets) for the React Vite Starter application.

## 1. Dependencies and Setup

### Install Required Packages
```bash
npm install react-leaflet leaflet
npm install -D @types/leaflet
```

### Environment Configuration
- Create `.env` file in project root
- Add `VITE_WEATHER_API_KEY=your_api_key_here`
- Update `.gitignore` to exclude `.env` (add `.env.local`)
- Create `.env.example` with placeholder values for documentation

### TypeScript Types
Create type definitions:
- `src/types/weather.ts` - Weather API response and display types
- `src/types/search.ts` - Search result types
- `src/types/widget.ts` - Common widget props and state types

## 2. Mock Data

Create mock data files:
- `src/data/mockSearchResults.ts` - Array of sample search results with titles, descriptions, URLs
- `src/data/mockNews.ts` - Array of mock news items with titles, timestamps, content
- `src/data/mockQuickLinks.ts` - Array of quick link objects with names, URLs, icons

## 3. Utility Functions

### `src/utils/weatherApi.ts`
- Create async function to fetch weather data from OpenWeatherMap API
- Handle API errors and return typed response
- Include error handling and fallback data

### `src/utils/debounce.ts`
- Implement generic debounce function for search input
- Use TypeScript generics for type safety

## 4. Component Structure

### Directory Layout
```
src/
├── pages/
│   └── HomeScreen/
│       ├── HomeScreen.tsx
│       └── HomeScreen.css
└── components/
    ├── SearchBox/
    │   ├── SearchBox.tsx
    │   └── SearchBox.css
    └── widgets/
        ├── WeatherWidget/
        │   ├── WeatherWidget.tsx
        │   └── WeatherWidget.css
        ├── MapWidget/
        │   ├── MapWidget.tsx
        │   └── MapWidget.css
        ├── ClockWidget/
        │   ├── ClockWidget.tsx
        │   └── ClockWidget.css
        ├── NewsWidget/
        │   ├── NewsWidget.tsx
        │   └── NewsWidget.css
        └── QuickLinksWidget/
            ├── QuickLinksWidget.tsx
            └── QuickLinksWidget.css
```

## 5. SearchBox Component

### Implementation Details
- Controlled input using `useState` for search query
- Debounce search input (300ms delay) using custom hook or utility
- Filter mock search results based on query
- Display results in a responsive list below input (similar to Google search results)
- Show "No results" state when query returns empty
- Clear results when input is cleared
- Implement keyboard navigation (optional enhancement)

### State Management
- `searchQuery: string` - Current input value
- `searchResults: SearchResult[]` - Filtered results
- `isSearching: boolean` - Loading state during debounce

### Search Results Display
- Each result should display:
  - Title (clickable link, larger text)
  - URL/breadcrumb (smaller, green/muted text)
  - Description/snippet (2 lines, truncated with ellipsis)
- Results displayed in vertical list format
- Full-width results container
- Spacing between each result item

### Styling
- Search input: Full width with border, padding, and search icon
- Results container: Full width, white/card background, subtle shadow
- Each result item:
  - Padding around content
  - Hover state with background colour change
  - Title: Larger font, primary colour, underline on hover
  - URL: Smaller font, green or muted colour
  - Description: Regular font size, grey text, line clamp to 2 lines
- Apply theme CSS variables for colours and spacing
- Ensure mobile responsiveness with proper spacing
- Add divider between results (subtle border or spacing)

## 6. WeatherWidget Component

### Implementation Details
- Fetch weather data using OpenWeatherMap API on component mount
- Use `useState` for weather data and loading/error states
- Use `useEffect` to fetch data once on mount
- Display temperature, weather condition, location, and icon
- Handle API errors gracefully with error message display
- Show loading spinner while fetching

### State Management
- `weatherData: WeatherData | null` - API response data
- `loading: boolean` - Loading state
- `error: string | null` - Error message

### API Integration
- Use `fetch` or `axios` to call OpenWeatherMap current weather endpoint
- Parse response and extract relevant fields
- Map weather condition codes to display strings or icons

### Styling
- Widget minimum height: 100px with flexbox layout
- Create card-style widget with padding and border
- Display temperature prominently (3xl size, bold)
- Weather icon from OpenWeatherMap (or emoji fallback)
- Use theme variables for consistent styling
- Responsive layout (vertical stack on mobile)

## 7. MapWidget Component

### Implementation Details
- Integrate `react-leaflet` with `MapContainer`, `TileLayer`, `Marker`
- Set default centre position (e.g., Sydney coordinates)
- Configure default zoom level (e.g., 13)
- Use OpenStreetMap tiles (free, no API key required)
- Add a marker at the centre location
- Handle map loading states

### Configuration
- Map centre: `[-33.8688, 151.2093]` (Sydney) or configurable
- Zoom: `13`
- TileLayer URL: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`

### Styling
- Set widget minimum height to 250px with flexbox layout
- Map container fixed height: 150px (responsive to viewport)
- Ensure map is responsive with explicit height and width on Leaflet container
- Import Leaflet CSS: `import 'leaflet/dist/leaflet.css'`
- Fix default marker icon in React Leaflet using custom icon configuration

## 8. ClockWidget Component

### Implementation Details
- Display current time and date
- Use `useState` to store current time
- Use `useEffect` with `setInterval` to update every second
- Format time using `toLocaleTimeString`
- Format date using `toLocaleDateString`
- Clean up interval on component unmount

### State Management
- `currentTime: Date` - Current date/time object

### Styling
- Widget minimum height: 100px with flexbox layout
- Large, readable monospace font for time (3xl size)
- Smaller font for date (base size)
- Centre align content with minimum content height of 120px
- Use theme variables for colours and spacing

## 9. NewsWidget Component

### Implementation Details
- Map over mock news data array
- Display each news item with title, timestamp, and brief content
- Limit to 3-5 items
- Make scrollable if content overflows
- Format timestamps relative to current time (e.g., "2 hours ago")

### Styling
- Widget minimum height: 250px with flexbox layout
- List layout with dividers between items
- Truncate long content with ellipsis (2 line clamp)
- Use theme colours for text hierarchy
- Add hover effect on items
- Scrollable list with max-height of 400px

## 10. QuickLinksWidget Component

### Implementation Details
- Map over mock quick links array
- Display as grid or list of clickable links
- Add icons (emoji or icon library) to each link
- Open links in new tab (`target="_blank" rel="noopener noreferrer"`)

### Styling
- Widget minimum height: 250px with flexbox layout
- Grid layout (2 columns on desktop, 1 on mobile)
- Card-style buttons for each link with 100px minimum height
- Icon + text layout (emoji icons)
- Hover effects (translateY and box-shadow)
- Use theme variables for consistent styling

## 11. HomeScreen Container

### Implementation Details
- Import and compose all widgets
- Create responsive grid layout for widgets
- Arrange search box at top, full width
- Arrange widgets in grid below (2-3 columns on desktop, 1 on mobile)
- Apply consistent spacing using theme variables

### Layout Structure
```tsx
// src/pages/HomeScreen/HomeScreen.tsx
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
```

### Styling
- Use CSS Grid with `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))`
- Responsive breakpoints: 3 columns on desktop (1024px+), 2 on tablet (768px-1023px), 1 on mobile
- Gap between widgets: `var(--spacing-lg)` 
- Max-width for container: 1400px with auto margins
- `align-items: stretch` for consistent row heights
- SearchBox spans full width above widget grid

## 12. Error Handling

### ErrorBoundary Component (Optional)
- Create error boundary to wrap individual widgets
- Display fallback UI when widget crashes
- Log error to console

### Widget-Level Error Handling
- Each widget handles its own errors (especially WeatherWidget and MapWidget)
- Display user-friendly error messages
- Provide retry mechanism for failed API calls

## 13. Integration and Testing

### Update App.tsx
- Remove boilerplate Vite content
- Import and render `<HomeScreen />` from `src/pages/HomeScreen/HomeScreen`
- Simplify App.css to just set root element width and height
- Remove unused imports and logo files

### Testing Checklist
- ✅ Search filters results correctly with debounced input
- ✅ Weather API integration works (with fallback to mock data)
- ✅ Map renders correctly with Leaflet and OpenStreetMap
- ✅ Clock updates every second with proper formatting
- ✅ All widgets display on mobile, tablet, and desktop viewports
- ✅ Error states handled (WeatherWidget shows fallback)
- ✅ No console errors or warnings in browser
- ✅ TypeScript compilation with no errors
- ✅ Australian English spelling in all code comments
- ✅ Consistent widget heights and spacing

## 14. Styling Guidelines

### Theme Integration
- Use CSS variables from `src/styles/theme.css`
- Common variables to use:
  - `--color-*` for colours
  - `--spacing-*` for margins/padding
  - `--font-size-*` for typography
  - `--border-radius-*` for rounded corners

### Responsive Design
- Mobile-first approach
- Breakpoints: 
  - Mobile: < 768px (1 column)
  - Tablet: 768px - 1023px (2 columns)
  - Desktop: ≥ 1024px (3 columns)
- Stack widgets vertically on mobile
- Grid layout on tablet and desktop
- Widget minimum heights:
  - Weather: 100px
  - Clock: 100px  
  - Map: 250px (with 150px map container)
  - News: 250px
  - QuickLinks: 250px

### Consistency
- All widgets have similar card styling with consistent border, radius, shadow
- Consistent spacing between elements using theme variables
- Unified colour scheme using theme variables (supports dark mode)
- Consistent typography hierarchy across all widgets
- Flexbox layout for all widgets to manage internal spacing
