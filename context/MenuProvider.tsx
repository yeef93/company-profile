"use client";
import { ReactNode, useState } from "react";
import MenuContext from "./MenuContext";

interface MenuProviderProps {
  children: JSX.Element | ReactNode;
}

function MenuProvider({children}:MenuProviderProps){
  const [menuShowing, setMenuShowing] = useState<boolean>(false)

  const handleToggleMenu = () => {
    setMenuShowing(prev => !prev);
  }

  return (
    <MenuContext.Provider value={{ menuShowing: menuShowing, setShowing: handleToggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export default MenuProvider;