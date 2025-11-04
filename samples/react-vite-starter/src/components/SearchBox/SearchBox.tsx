import { useState, useEffect } from 'react';
import { mockSearchResults } from '../../data/mockSearchResults';
import { debounce } from '../../utils/debounce';
import type { SearchResult } from '../../types/search';
import './SearchBox.css';

export function SearchBox() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const debouncedSearch = debounce((query: string) => {
      if (query.trim() === '') {
        setSearchResults([]);
        setIsSearching(false);
        return;
      }

      const filtered = mockSearchResults.filter(
        (result) =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.description.toLowerCase().includes(query.toLowerCase()) ||
          result.url.toLowerCase().includes(query.toLowerCase())
      );

      setSearchResults(filtered);
      setIsSearching(false);
    }, 300);

    if (searchQuery) {
      setIsSearching(true);
      debouncedSearch(searchQuery);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  }, [searchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-box">
      <div className="search-input-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
          aria-label="Search"
        />
      </div>

      {searchQuery && (
        <div className="search-results">
          {isSearching ? (
            <div className="search-loading">Searching...</div>
          ) : searchResults.length > 0 ? (
            <div className="results-list">
              {searchResults.map((result) => (
                <a
                  key={result.id}
                  href={result.url}
                  className="result-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="result-url">{result.url}</div>
                  <h3 className="result-title">{result.title}</h3>
                  <p className="result-description">{result.description}</p>
                </a>
              ))}
            </div>
          ) : (
            <div className="no-results">No results found for "{searchQuery}"</div>
          )}
        </div>
      )}
    </div>
  );
}
