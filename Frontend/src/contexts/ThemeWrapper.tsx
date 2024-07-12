import React, {
  useState,
  createContext,
  useContext,
  useMemo,
  useCallback,
} from "react";

export type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

// Creating a context
export const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  toggleTheme: () => {},
});

export interface ThemeWrapperProps extends SFC {}

const ThemeWrapper = ({ children, className = "" }: ThemeWrapperProps) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  const value = useMemo(() => {
    return { isDark, toggleTheme };
  }, [isDark, toggleTheme]);
  return (
    <div className={`${isDark ? "dark" : "light"}`}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </div>
  );
};

export default ThemeWrapper;

/** Hook to consume Toggle context */
export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    // throw error here at some point
    throw new Error(
      `useSidebarHiddableContext must be used within a SidebarHiddableProvider`
    );
  }

  return context;
};
