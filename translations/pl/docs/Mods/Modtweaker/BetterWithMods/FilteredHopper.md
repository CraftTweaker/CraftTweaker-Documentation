# Filtrowany Leśnik

Filtrowany Leśnik jest blokiem, który pozwala lub nie zezwala na niektóre elementy oparte na elemencie znajdującym się obecnie w slocie filtra. Dodatkowo, może wprowadzić receptury na przedmioty, które próbują wejść do Bolt.

# Filtry

* Dodanie
    
    * Dodaj nowy filtr przez nazwę i przypisz elementy, które będą używane w obszarze filtra.
    ```zenscript
        mods.betterwithmods.FilteredHopper.addFilter(nazwa ciągu, IIngredient item)
    
        mods.betterwithmods.FilteredHopper.addFilter("modtweaker:myFilter", <minecraft:planks>);   
    ```
    
    * Dodaj dozwolony element do filtru przez jego nazwę.
    ```zenscript
        mods.betterwithmods.FilteredHopper.addFilteredItem(nazwa ciągu, IIngredient item)
    
        mods.betterwithmods.FilteredItem("modtweaker:myFilter",<minecraft:dirt>);
        mods.betterwithmods.FilteredItem("modtweaker:myFilter",<ore:ingotIron>);
    ```
    
    * Filtrowane przepisy - Hopper może przetwarzać element próbujący wprowadzić do danych wyjściowych określonego elementu, może
        
        * Umieść w ekwipunku Hoppera (tak długo, jak pozwala na to obecny filtr).
        * Zrzuć przedmioty do świata nad lejkiem 
        ```zenscript
        mods.betterwithmods.FilteredHopper. ddFilterRecipe(nazwa ciągu, dane wejściowe IIngredient, IIngredient[] insideOutput , IIngredient[] outsideput);
        
        //Will zamieni blok trawy na krzemień po stronie ekwipunku i 9 diamentów poza modami
        . etterwithmods.FilteredHopper.addFilterRecipe("modtweaker:myFilter",<minecraft:grass>,[<minecraft:flint>],[<minecraft:diamond>*9]);
        
        //Wa wyrzuci tylko 9 diamentów do świata
        . Filtr dHopper. ddFilterRecipe("modtweaker:myFilter2",<minecraft:gravel>, [], [<minecraft:diamond>*9]);
        
        //Wa umieści tylko 9 diamentów w ekwipunku, **tylko wtedy, gdy włączysz diamenty do określonego filtra**
        modów. etterwithmods.FilteredHopper.addFilterRecipe("modtweaker:myFilter3",<minecraft:sand>, [<minecraft:diamond>*9], []);
        ```
        
        Dodatkowo, możesz dodać specjalne przepisy do filtrowanego lejka, który stworzy Urny od Urnów.
        
        ```zenscript
           mods.betterwithmods.FilteredHopper.addSoulUrnRecipe(IIngredient inputt, IItemStack[] outputs, IItemStack[] secondary)
        
           mods.betterwithmods.FilteredHopper.addSoulUrnRecipe(<minecraft:stone>,[],[<minecraft:diamond>*9]);
        ```

* Usuwanie
    
    * Usuń dozwolone elementy z określonego filtra
    ```zenscript
        mods.betterwithmods.FilteredHopper.clearFilter(nazwa ciągu);
    
        mods.betterwithmods.FilteredHopper.clearFilter("betterwithmods:wicker");
    ```
    
    * Usuń filtrowany przepis przez wejście lub wyjście
    ```zenscript
        mods.betterwithmods.FilteredHopper.removeRecipe(IIngredient[] insideOutput, IIngredient[] outsideOutput);
    
        mods.betterwithmods.FilteredHopper.removeRecipe([<minecraft:sand>,<minecraft:sand:1>],[<minecraft:flint>]);
    
        mods.betterwithmods.FilteredHopper.removeRecipeByInput(Input);
    
        mods.betterwithmods.FilteredHopper.removeRecipeByInput(<minecraft:sand>);
    ```