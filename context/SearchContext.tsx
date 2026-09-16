'use client';

import React, { createContext, useContext, useState } from 'react';

interface SearchContextType {
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  openSearch: () => void;
  closeSearch: () => void;
  query: string;
  setQuery: (q: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <SearchContext.Provider
      value={{
        isSearchOpen,
        setIsSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => {
          setIsSearchOpen(false);
          setQuery('');
        },
        query,
        setQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
