import { createContext } from "react";

const LocalizationContext  = createContext();

export function LocalizationProvider({children}){

    const localizedString = {
        en:{
            greeting:'Hello World!',
            welcome:'Welcome to my app.'
        },
        es:{
            greeting:'Hello mundo!',
            welcome:'Bienvenido a mi application.'
        }
    };

    return (
        <LocalizationContext.Provider>
            {children}
        </LocalizationContext.Provider>
    )
}