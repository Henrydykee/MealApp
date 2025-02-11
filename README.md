```mermaid
graph TD
    A[FavouriteContextProvider] --> B[FavouriteContext]
    B --> C[id: string[]]
    B --> D[addFavourite]
    B --> E[removeFavourite]
    
    A --> F[useState<string[]>]
    F --> G[favouriteMealId]
    F --> H[setFavoriteMealId]
    
    D --> H
    E --> H
    
    A --> I[children]
    
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#bbf,stroke:#333,stroke-width:2px