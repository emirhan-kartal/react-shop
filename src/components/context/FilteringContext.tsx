import { createContext } from "react";
import React from "react";

type FilteringContextType = {
    filter: {};
    setFilter: React.Dispatch<React.SetStateAction<{}>>;
};
const FilteringContext = createContext<FilteringContextType>({
    filter: {},
    setFilter: () => {},
});

export function FilteringProvider({ children }: { children: React.ReactNode}) {
    const [filter, setFilter] = React.useState({});
    return (
        <FilteringContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilteringContext.Provider>
    );
}
export { FilteringContext };
