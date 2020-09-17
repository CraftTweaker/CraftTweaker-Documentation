# Kessel

## Einfaches Rezept

* Fügt ein ungestautes Kessel Rezept hinzu 

```zenscript
mods.betterwithmods.Cauldron.addUnstoked(IIngredient[] Eingänge, IItemStack[] Ausgabe);
//Beispiele
mods.betterwithmods.Cauldron.addUnstoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Cauldron.addUnstoked([<minecraft:dirt>],[<minecraft:grass>]);
```

* Fügt ein Stokes Kessel Rezept hinzu 

```zenscript
mods.betterwithmods.Cauldron.addStoked(IIngredient[] Eingänge, IItemStack[] Ausgabe);
//Beispiele
mods.betterwithmods.Cauldron.addStoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Cauldron.addStoked([<minecraft:dirt>],[<minecraft:grass>]);
```

## Entfernen

* Entferne ein Kessel Rezept basierend auf der Ausgabe ```mods.betterwithmods.Cauldron.remove(IItemStack[] Ausgabe);```

* Entferne alle Kessel Rezepte ```mods.betterwithmods.Cauldron.removeAll();```

## Erbauer

Der Kessel hat einen Rezeptbauer, der eine genauere Kontrolle über die Rezepte ermöglicht. Alle bisherigen Methoden sind einfach kurze Abschnitte zur Verwendung des Builders.

* Einen neuen Cauldron Builder erstellen. `mods.betterwithmods.Cauldron.builder()`

* Kessel Methoden
    
    * Sets up the inputs and outputs of the recipe  
        buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
            buildRecipe(IZutritt[] Eingänge, IItemStack[] Ausgaben)
    
    * Legt die Priorität des Rezepts fest, je niedriger die Priorität ist, desto schneller wird es hergestellt. Default=0.  
        setPriority(int priority)  
            setpriority(int Priorität)
    
    * Legen Sie die Wärmeanforderungen des Rezeptes fest. Die Hitze wird verwendet, um zu überprüfen, ob das Rezept in einem geschürten oder ungehefteten Kessel hergestellt werden kann. Ungestürmte Hitze = 1, Stoked Hitze = 2. You can add custom heat sources, and even custom heat levels using the [Heat Registry](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
        setHeat(int heat)  
            setHeat(int Wärme)
    
    * Set the recipe to ignore the heat value and craft anyways  
        setIgnoreHeat(boolean ignoreHeat)  
            setIgnoreHeat (boolean ignoreHeat)
    
    * Finalize the recipe and add it to the game  
        build()  
            build()

### Beispiel-Builder-Nutzung

```zenscript
mods.betterwithmods.Cauldron.builder()
.buildRecipe([<ore:stone>], [<minecraft:dirt>])
.setHeat(2)
.setPriority(-1)
.build();
```