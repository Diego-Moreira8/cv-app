import { createContext, ReactNode, useState, useContext } from "react";

type ActiveGroupContextType = {
  activeGroupId: string | null;
  setActiveGroupId: (id: string | null) => void;
};

const ActiveGroupContext = createContext<ActiveGroupContextType | undefined>(
  undefined
);

function ActiveGroupProvider({ children }: { children: ReactNode }) {
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null);

  return (
    <ActiveGroupContext.Provider value={{ activeGroupId, setActiveGroupId }}>
      {children}
    </ActiveGroupContext.Provider>
  );
}

// Hook para acessar o estado do grupo ativo
function useActiveGroup() {
  const context = useContext(ActiveGroupContext);

  if (!context) {
    throw new Error(
      "useActiveGroup must be used within an ActiveGroupProvider"
    );
  }

  return context.activeGroupId;
}

function useSetActiveGroup() {
  const context = useContext(ActiveGroupContext);

  if (!context) {
    throw new Error(
      "useSetActiveGroup must be used within an ActiveGroupProvider"
    );
  }

  return context.setActiveGroupId;
}

export { ActiveGroupProvider, useActiveGroup, useSetActiveGroup };
