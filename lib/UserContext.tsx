import { createContext } from "react";

const UserContext = createContext<{
  screen: { width: number | undefined; height: number | undefined };
}>({
  screen: { width: undefined, height: undefined },
});

export default UserContext;
