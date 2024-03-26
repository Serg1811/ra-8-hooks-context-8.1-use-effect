import { createContext } from 'react';

export type TypeContext = {
    idMain: number 
    setIdMain: React.Dispatch<React.SetStateAction<number>> 
}

const initialContext: TypeContext = {
    idMain: -1,
    setIdMain: () => {}
}

export const AuthContext = createContext<TypeContext>(initialContext)