import { useContext } from "react"
import { FiltersContext } from "../context/filters"

export function useFilters () {
    
    // ---- 3: Consumir el contexto ----
    const {filters, setFilters} = useContext(FiltersContext)

    const filterProducts = (products) => {
    return products.filter(products => {
        return (
        products.price >= filters.minPrice &&
        (
            filters.category == 'all' ||
            products.category == filters.category
        )
        )
    })
    }

    return { filters, filterProducts, setFilters }
}