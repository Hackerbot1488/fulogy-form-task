import { createContext } from "react";
import { User } from "../components/Profile";

export interface ContextProps {
	updateData: (user: User) => void;
}
export const UserContext = createContext<ContextProps>({
	updateData: (user: User) => {},
});
