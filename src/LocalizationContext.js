import { createContext, useContext, useState } from "react";

const LocalizationContext  = createContext();

export const useLocalization = () => {
    return useContext(LocalizationContext)
}

export function LocalizationProvider({children}){

    const [local,setLocal] = useState('en');

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
        <LocalizationContext.Provider value={{setLocale,locale}}>
            {children}
        </LocalizationContext.Provider>
    )
}