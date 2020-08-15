# Tolva filtrada

La tolva filtrada es un bloque que puede permitir o rechazar ciertos objetos basándose en el objeto actualmente en su ranura de filtro. Además, puede realizar recetas en los objetos que intentan entrar en la tolva.

# Filtros

* Adicional
    
    * Añadir un nuevo filtro por un nombre y asignar los elementos que se utilizarán en el Filtro de Espacio.
    ```zenscript
        mods.betterwithmods.FilteredHopper.addFilter(String name, IIngredient item)
    
        mods.betterwithmods.FilteredHopper.addFilter("modtweaker:myFilter", <minecraft:planks>);   
    ```
    
    * Agrega un elemento permitido a un filtro por su nombre.
    ```zenscript
        mods.betterwithmods.FilteredHopper.addFilteredItem(String name, IIngredient item)
    
        mods.betterwithmods.FilteredHopper.addFilteredItem("modtweaker:myFilter",<minecraft:dirt>);
        mods.betterwithmods.FilteredHopper.addFilteredItem("modtweaker:myFilter",<ore:ingotIron>);
    ```
    
    * Recetas Filtradas - El Hopper puede procesar el objeto tratando de introducir en salidas específicas de objetos, puede cualquiera
        
        * Ponga en el inventario del hopper (siempre que el filtro actual lo permita).
        * Expulsar los objetos en el mundo por encima del salto 
        ```zenscript
        mods.betterwithmods.FilteredHopper. ddFilterRecipe(String name, IIngredient input, IIngredient[] insideOutput , IIngredient[] outsideOutput);
        
        //Convierte un bloque de césped en un lado de pedernal el inventario y 9 diamantes fuera del inventario
        mods. etterwithmods.FilteredHopper.addFilterRecipe("modtweaker:myFilter",<minecraft:grass>,[<minecraft:flint>],[<minecraft:diamond>*9]);
        
        //Sólo expulsará 9 diamantes en el mundo
        mods. etterwithmods.FilteredHopper. ddFilterRecipe("modtweaker:myFilter2",<minecraft:gravel>, [], [<minecraft:diamond>*9]);
        
        ///Sólo pondrás 9 diamantes en el inventario, **solo si permites diamantes en el filtro específico**
        mods. etterwithmods.FilteredHopper.addFilterRecipe("modtweaker:myFilter3",<minecraft:sand>, [<minecraft:diamond>*9], []);
        ```
        
        Además, puedes añadir recetas especiales a la tolva filtrada que crearán Urns de Almas a partir de Urns.
        
        ```zenscript
           mods.betterwithmods.FilteredHopper.addSoulUrnRecipe(entrada IIngredient, IItemStack[] salidas, IItemStack[] secundario)
        
           mods.betterwithmods.FilteredHopper.addSoulUrnRecipe(<minecraft:stone>,[],[<minecraft:diamond>*9]);
        ```

* Eliminar
    
    * Eliminar los elementos permitidos del filtro especificado
    ```zenscript
        mods.betterwithmods.FilteredHopper.clearFilter(String name);
    
        mods.betterwithmods.FilteredHopper.clearFilter("betterwithmods:wicker");
    ```
    
    * Eliminar una receta filtrada por entrada o salida
    ```zenscript
        mods.betterwithmods.FilteredHopper.removeRecipe(IIngredient[] en el interior, IIngredient[] outsideOutput);
    
        mods.betterwithmods.FilteredHopper.removeRecipe([<minecraft:sand>,<minecraft:sand:1>],[<minecraft:flint>]);
    
        mods.betterwithmods.FilteredHopper.removecipeByInput(Ingredient input);
    
        mods.betterwithmods.Filterwithmods.FilteredHopper.removeRecipeByInput(<minecraft:sand>);
    ```