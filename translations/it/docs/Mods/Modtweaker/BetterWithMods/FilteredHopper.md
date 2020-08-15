# Tramoggia Filtrata

La Tramoggia Filtrata è un blocco che può consentire o disattivare determinati oggetti in base all'oggetto attualmente nel suo Slot Filtro. Inoltre può eseguire ricette sugli elementi che stanno tentando di entrare nella tramoggia .

# Filtri

* Addizione
    
    * Aggiungere un nuovo filtro per un nome e assegnare gli elementi che saranno utilizzati nel filtro Slot.
    ```zenscript
        mods.betterwithmods.FilteredHopper.addFilter(nome string, elemento IIngrediente)
    
        mods.betterwithmods.FilteredHopper.addFilter("modtweaker:myFilter", <minecraft:planks>);   
    ```
    
    * Aggiungi un elemento consentito a un filtro per il suo nome.
    ```zenscript
        mods.betterwithmods.FilteredHopper.addFilteredItem(nome string, elemento IIngrediente)
    
        mods.betterwithmods.FilteredHopper.addFilteredItem("modtweaker:myFilter",<minecraft:dirt>);
        mods.betterwithmods.FilteredHopper.addFilteredItem("modtweaker:myFilter",<ore:ingotIron>);
    ```
    
    * Ricette filtrate - La tramoggia può elaborare l'elemento che tenta di immettere in output di articoli specifici, può entrambi
        
        * Metti nell'inventario della tramoggia (finché il filtro corrente lo consente).
        * Espelli gli oggetti nel mondo sopra la tramoggia 
        ```zenscript
        mods.betterwithmods.FilteredHopper. ddFilterRecipe(Nome string, Input IIngrediente, IIngredient[] insideOutput , IIngredient[] outsideOutput);
        
        //Converrà un blocco di erba in un lato selce l'inventario e 9 diamanti al di fuori delle mods dell'inventario
        . etterwithmods.FilteredHopper.addFilterRecipe("modtweaker:myFilter",<minecraft:grass>,[<minecraft:flint>],[<minecraft:diamond>*9]);
        
        //Espellerà solo 9 diamanti nel mondo
        mods. etterwithmods.FilteredHopper. ddFilterRecipe("modtweaker:myFilter2",<minecraft:gravel>, [], [<minecraft:diamond>*9]);
        
        //Inserirà solo 9 diamanti nell'inventario, **solo se consentirai diamanti nel filtro specifico**
        mods. etterwithmods.FilteredHopper.addFilterRecipe("modtweaker:myFilter3",<minecraft:sand>, [<minecraft:diamond>*9], []);
        ```
        
        Inoltre, è possibile aggiungere ricette speciali alla tramoggia filtrata che creerà Urne anime da urne.
        
        ```zenscript
           mods.betterwithmods.FilteredHopper.addSoulUrnRecipe(IIngredient input, IItemStack[] outputs, IItemStack[] secondario)
        
           mods.betterwithmods.FilteredHopper.addSoulUrnRecipe(<minecraft:stone>,[],[<minecraft:diamond>*9]);
        ```

* Rimozione
    
    * Rimuovi gli elementi consentiti dal filtro specificato
    ```zenscript
        mods.betterwithmods.FilteredHopper.clearFilter(String name);
    
        mods.betterwithmods.FilteredHopper.clearFilter("betterwithmods:wicker");
    ```
    
    * Rimuovi una Ricetta Filtrata per input o output
    ```zenscript
        mods.betterwithmods.FilteredHopper.removeRecipe(IIngredient[] insideOutput, IIngredient[] outsideOutput);
    
        mods.betterwithmods.FilteredHopper.removeRecipe([<minecraft:sand>,<minecraft:sand:1>],[<minecraft:flint>]);
    
        mods.betterwithmods.FilteredHopper.removeRecipeByInput(IIngredient input);
    
        mods.betterwithmods.FilteredHopper.removeRecipeByInput(<minecraft:sand>);
    ```