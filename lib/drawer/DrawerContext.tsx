import {
  createContext,
  useContext,
  ReactNode,
  useState,
  SetStateAction,
  Dispatch,
} from "react";

export const DrawerContext = createContext<{
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}>({ openDrawer: false, setOpenDrawer: (value) => value });

export const useDrawer = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <DrawerContext.Provider value={{ openDrawer, setOpenDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
