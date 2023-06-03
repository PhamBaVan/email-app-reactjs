import { Dispatch, createContext } from "react";
import { Email } from "../types/Email";

interface GlobalContext {
    emails: Email[]
    setEmails: Dispatch<React.SetStateAction<Email[]>>
}

export const GlobalContext = createContext<GlobalContext>({
    emails: [],
    setEmails: () => {return}
})