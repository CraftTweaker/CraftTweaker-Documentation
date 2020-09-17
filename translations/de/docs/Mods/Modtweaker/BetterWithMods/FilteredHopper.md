# Gefilterter Trichter

Der gefilterte Trichter ist ein Block, der bestimmte Gegenstände basierend auf dem aktuell in seinem Filterfeld befindlichen Gegenstand erlauben oder verbieten kann. Zusätzlich kann es Rezepte für die Gegenstände ausführen, die versuchen, den Trichter zu betreten.

# Filter

* Addition
    
    * Fügen Sie einen neuen Filter mit einem Namen hinzu und weisen Sie die Elemente zu, die im Filterfeld verwendet werden.
    ```zenscript
        mods.betterwithmods.FilteredHopper.addFilter(String name, IIngredient item)
    
        mods.betterwithmods.FilteredHopper.addFilter("modtweaker:myFilter", <minecraft:planks>);   
    ```
    
    * Ein erlaubtes Element nach seinem Namen zu einem Filter hinzufügen.
    ```zenscript
        mods.betterwithmods.FilteredHopper.addFilteredItem(String name, IIngredient item)
    
        mods.betterwithmods.FilteredHopper.addFilteredItem("modtweaker:myFilter",<minecraft:dirt>);
        mods.betterwithmods.FilteredHopper.addFilteredItem("modtweaker:myFilter",<ore:ingotIron>);
    ```
    
    * Gefilterte Rezepte - Der Trichter kann den Gegenstand verarbeiten, der versucht, in bestimmte Artikelausgänge einzugeben, er kann entweder
        
        * Legen Sie in das Inventar des Trichters (solange der aktuelle Filter es erlaubt).
        * Gegenstände über dem Trichter in die Welt werfen 
        ```zenscript
        mods.betterwithmods.FilteredHopper. ddFilterRecipe(String name, IIngredient Input, IIngredient[] insideOutput , IIngredient[] OutsideOutput);
        
        //Wandelt einen Grasblock in eine Feuerstelle des Inventars und 9 Diamanten außerhalb des Inventars
        Mods um. etterwithmods.FilteredHopper.addFilterRecipe("modtweaker:myFilter",<minecraft:grass>,[<minecraft:flint>],[<minecraft:diamond>*9]);
        
        //Wird nur 9 Diamanten in die Welt auswerfen
        Mods. etterwithmods.FilteredHopper. ddFilterRecipe("modtweaker:myFilter2",<minecraft:gravel>, [], [<minecraft:diamond>*9]);
        
        //Wird nur 9 Diamanten in das Inventar einfügen, **nur wenn Diamanten in den spezifischen Filter aufgenommen werden**
        Mods. etterwithmods.FilteredHopper.addFilterRecipe("modtweaker:myFilter3",<minecraft:sand>, [<minecraft:diamond>*9], []);
        ```
        
        Zusätzlich kannst du dem gefilterten Trichter spezielle Rezepte hinzufügen, die Seelenurnen aus Urnen erzeugen.
        
        ```zenscript
           mods.betterwithmods.FilteredHopper.addSoulUrnRecipe(IIngredient Eingabe, IItemStack[] Ausgabe, IItemStack[] Sekundär)
        
           mods.betterwithmods.FilteredHopper.addSoulUrnRecipe(<minecraft:stone>,[],[<minecraft:diamond>*9]);
        ```

* Entfernen
    
    * Erlaubte Elemente aus dem angegebenen Filter entfernen
    ```zenscript
        mods.betterwithmods.FilteredHopper.clearFilter(String Name);
    
        mods.betterwithmods.FilteredHopper.clearFilter("betterwithmods:wicker");
    ```
    
    * Gefiltertes Rezept durch Eingabe oder Ausgabe entfernen
    ```zenscript
        mods.betterwithmods.FilteredHopper.removeRecipe(IIngredient[] insideOutput, IIngredient[] OutsideOutput);
    
        mods.betterwithmods.FilteredHopper.removeRecipe([<minecraft:sand>,<minecraft:sand:1>],[<minecraft:flint>]);
    
        mods.betterwithmods.FilteredHopper.removeRecipeByInput(IIngredient input);
    
        mods.betterwithmods.FilteredHopper.removeRecipeByInput(<minecraft:sand>);
    ```