import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from '@/components/ui/use-toast';

interface AppContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  openaiApiKey: string | null;
  setOpenaiApiKey: (key: string) => void;
}

const defaultAppContext: AppContextType = {
  sidebarOpen: false,
  toggleSidebar: () => {},
  openaiApiKey: null,
  setOpenaiApiKey: () => {},
};

const AppContext = createContext<AppContextType>(defaultAppContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openaiApiKey, setOpenaiApiKeyState] = useState<string | null>(null);

  // Load API key from localStorage on initial render
  useEffect(() => {
    const savedApiKey = localStorage.getItem('openai_api_key');
    if (savedApiKey) {
      setOpenaiApiKeyState(savedApiKey);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const setOpenaiApiKey = (key: string) => {
    setOpenaiApiKeyState(key);
    localStorage.setItem('openai_api_key', key);
  };

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        toggleSidebar,
        openaiApiKey,
        setOpenaiApiKey,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
