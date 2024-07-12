import { useCallback, useId, useState } from "react";
import React, { createContext, useMemo, useContext } from "react";

type ToggleProviderProps = {
  children?: React.ReactNode;
  checked?: boolean;
  onToggle?: () => void;
  toggleRef?: React.ForwardedRef<HTMLInputElement>;
  disabled?: boolean;
};

/**
 * Default Context object
 */
type ToggleContextType = {
  labelId: string | undefined;
  checked: boolean;
  onToggle?: () => void;
  toggleRef?: React.ForwardedRef<HTMLInputElement>;
  disabled?: boolean;
};

/**
 * ToggleGroup Context
 * also exported?
 */
const ToggleContext = createContext<ToggleContextType>({
  labelId: undefined,
  checked: false,
});

/**
 * Toggle Provider
 */
export const ToggleProvider: React.FC<ToggleProviderProps> = ({
  children,
  checked,
  onToggle,
  disabled,
  toggleRef,
}) => {
  const labelId = useId();
  const [internalChecked, setInternalChecked] = useState(checked ?? false);

  const memoizedInternalToggle = useCallback(() => {
    setInternalChecked((prev) => !prev);
  }, []);

  // memoized ofcourse
  const providerState = useMemo(() => {
    return {
      labelId,
      checked: checked !== undefined ? checked : internalChecked,
      onToggle: onToggle !== undefined ? onToggle : memoizedInternalToggle,
      disabled,
      toggleRef,
    };
  }, [
    labelId,
    checked,
    internalChecked,
    memoizedInternalToggle,
    onToggle,
    disabled,
    toggleRef,
  ]);

  return (
    <ToggleContext.Provider value={providerState}>
      {children}
    </ToggleContext.Provider>
  );
};

/** Hook to consume Toggle context */
export const useToggleContext = () => {
  const context = useContext(ToggleContext);

  if (!context) {
    // throw error here at some point
    throw new Error(`useToggleContext must be used within a ToggleProvider`);
  }

  return context;
};
