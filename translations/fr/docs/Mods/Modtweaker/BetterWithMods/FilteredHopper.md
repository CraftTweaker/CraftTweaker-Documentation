# Tentonnoir filtré

Le bloc entonnoir filtré est un bloc qui peut autoriser ou interdire certains objets en fonction de l'objet actuellement dans son emplacement de filtrage. De plus, il peut réaliser des recettes sur les objets qui tentent d'entrer dans la Tentonnière.

# Filtres

* Ajouter
    
    * Ajouter un nouveau filtre par un nom et assigner les éléments qui seront utilisés dans l'emplacement de filtre.
    ```zenscript
        mods.betterwithmods.FilteredHopper.addFilter(String name, IIngredient item)
    
        mods.betterwithmods.FilteredHopper.addFilter("modtweaker:myFilter", <minecraft:planks>);   
    ```
    
    * Ajouter un élément autorisé à un filtre par son nom.
    ```zenscript
        mods.betterwithmods.FilteredHopper.addFilteredItem(String name, IIngredient item)
    
        mods.betterwithmods.FilteredHopper.addFilteredItem("modtweaker:myFilter",<minecraft:dirt>);
        mods.betterwithmods.FilteredHopper.addFilterItem("modtweaker:myFilter",<ore:ingotIron>);
    ```
    
    * Recettes filtrées - La trémie peut traiter l'objet en tentant d'entrer dans des sorties spécifiques d'objets, elle peut soit
        
        * Mettre dans l'inventaire de la trémie (à condition que le filtre actuel le permette).
        * Éjectez les objets dans le monde au-dessus de la trémie 
        ```zenscript
        FilteredHopper ddFilterRecipe(String name, IIngredient input, IIngredient[] insideOutput , Igredient[] outsideOutput);
        
        //convertira un bloc d'herbe en un côté de silex l'inventaire et 9 diamants en dehors des mods
        d'inventaire. etterwithmods.FilteredHopper.addFilterRecipe("modtweaker:myFilter",<minecraft:grass>,[<minecraft:flint>],[<minecraft:diamond>*9]);
        
        //N'éjectera que 9 diamants dans le monde
        mods. FilteredHopper ddFilterRecipe("modtweaker:myFilter2",<minecraft:gravel>, [], [<minecraft:diamond>*9]);
        
        //Ne mettra 9 diamants dans l'inventaire, **que si vous autorisez les diamants dans le filtre spécifique**
        mods. etterwithmods.FilteredHopper.addFilterRecipe("modtweaker:myFilter3",<minecraft:sand>, [<minecraft:diamond>*9], []);
        ```
        
        De plus, vous pouvez ajouter des recettes spéciales aux entonnoirs filtrés qui créeront des Urnes d’âmes à partir d’urnes.
        
        ```zenscript
           mods.betterwithmods.FilteredHopper.addSoulUrnRecipe(IIngredient input, IItemStack[] outputs, IItemStack[] secondary)
        
           mods.betterwithmods.FilteredHopper.addSoulUrnRecipe(<minecraft:stone>,[],[<minecraft:diamond>*9]);
        ```

* Retirer
    
    * Retirer les éléments autorisés du filtre spécifié
    ```zenscript
        mods.betterwithmods.FilteredHopper.clearFilter(String name);
    
        mods.betterwithmods.FilteredHopper.clearFilter("betterwithmods:wicker");
    ```
    
    * Supprimer une recette filtrée par entrée ou sortie
    ```zenscript
        mods.betterwithmods.FilteredHopper.removeRecipe(IIngredient[] insideOutput, IIngredient[] outsideOutput);
    
        mods.betterwithmods.FilteredHopper.removeRecipe([<minecraft:sand>,<minecraft:sand:1>],[<minecraft:flint>]);
    
        mods.betterwithmods.FilteredHopper.removeRecipeByInput(IIngredient input);
    
        mods.betterwithmods.FilteredHopper.removeRecipeByInput(<minecraft:sand>);
    ```