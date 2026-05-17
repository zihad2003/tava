import { createContext, useContext } from 'react';
import { SITE, MENU_CATEGORIES, MENU_ITEMS, HAPPENINGS } from '../constants/data';

const DataContext = createContext(null);

export function DataProvider({ children }) {
  return (
    <DataContext.Provider value={{
      site: SITE,
      menuCategories: MENU_CATEGORIES,
      menuItems: MENU_ITEMS,
      happenings: HAPPENINGS,
      loading: false,
      isLive: false,
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be used inside <DataProvider>');
  return ctx;
}
