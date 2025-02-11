import { createContext, useState } from "react";
import { ReactNode } from "react";


// Define the context type
type FavouriteContextType = {
    id: string[];
    addFavourite: (id: string) => void;
    removeFavourite: (id: string) => void;
  };
  
  // Create context with proper typing
  export const FavouriteContext = createContext<FavouriteContextType>({
    id: [],
    addFavourite: () => {}, // Temporary empty function
    removeFavourite: () => {}, // Temporary empty function
  });
  
  function FavouriteContextProvider({ children }: { children: ReactNode }) {
    const [favouriteMealId, setFavoriteMealId] = useState<string[]>([]);
  
    function addFavourite(id: string) {
      setFavoriteMealId((prev) => [...prev, id]);
    }
  
    function removeFavourite(id: string) {
      setFavoriteMealId((prev) => prev.filter((mealId) => mealId !== id));
    }

    const value: FavouriteContextType = {
      id: favouriteMealId,
      addFavourite,
      removeFavourite
    };
  
    return (
      <FavouriteContext.Provider value={value}>
        {children}
      </FavouriteContext.Provider>
    );
  }
  
  export default FavouriteContextProvider;