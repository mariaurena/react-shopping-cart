import { createContext, useState } from "react"

// ---- 1: Crear el contexto ----

// este es el que tenemos que consumir 
export const FiltersContext = createContext()  // solo se crea una vez : singleton

// ---- 2: Crear el Provider para proveer el contexto ----

// este es el que nos provee de acceso al contexto
export function FiltersProvider( { children }){
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>

        {children}
        </FiltersContext.Provider>
    )
}