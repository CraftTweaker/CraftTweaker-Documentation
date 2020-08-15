# Crucible

## Einfaches Rezept

* Fügt ein ungestürmtes Crucible Rezept hinzu 

```zenscript
mods.betterwithmods.Crucible.addUnstoked(IIngredient[] Eingänge, IItemStack[] Ausgabe);
//Beispiele
mods.betterwithmods.Crucible.addUnstoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Crucible.addUnstoked([<minecraft:dirt>],[<minecraft:grass>]);
```

* Fügt ein gestopftes Crucible Rezept hinzu 

```zenscript
mods.betterwithmods.Crucible.addStoked(IIngredient[] Eingänge, IItemStack[] Ausgabe);
//Beispiele
mods.betterwithmods.Crucible.addStoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Crucible.addStoked([<minecraft:dirt>],[<minecraft:grass>]);
```

## Entfernen

* Entferne ein Crucible Rezept basierend auf der Ausgabe

```zenscript
mods.betterwithmods.Crucible.remove(IItemStack[] Ausgänge);
```

* Entferne alle Crucible Rezepte

```zenscript
mods.betterwithmods.Crucible.removeAll();
```

## Erbauer

Der Crucible hat einen Rezeptbauer, der eine genauere Kontrolle über die Rezepte ermöglicht. Alle bisherigen Methoden sind einfach kurze Abschnitte zur Verwendung des Builders.

* Einen neuen Crucible Builder erstellen. `mods.betterwithmods.Crucible.builder()`

* Schmelzbare Methoden
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              zenscript
              buildRecipe(IIngredient[] Eingänge, IItemStack[] Ausgaben)
     
     * Legt die Priorität des Rezepts fest, je niedriger die Priorität ist, desto schneller wird es hergestellt. Default=0.  
          zenscript setPriority(int priority)  
              zenscript
              setPriority(int priority)
     
     * Legen Sie die Wärmeanforderungen des Rezeptes fest. Die Hitze wird verwendet, um zu überprüfen, ob das Rezept in einem gestapelten oder ungestapelten Crucible hergestellt werden kann. Ungestürmte Hitze = 1, Stoked Hitze = 2. You can add custom heat sources, and even custom heat levels using the [Heat Registry](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
          zenscript setHeat(int heat)  
              zenscript
              setHeat(int heat)
     
     * Set the recipe to ignore the heat value and craft anyways  
          zenscript setIgnoreHeat(boolean ignoreHeat)  
              zenscript
              setIgnoreHeat(boolean ignoreHeat)
     
     * Finalize the recipe and add it to the game  
          zenscript build()  
              zenscript
              build()

### Beispiel-Builder-Nutzung

```zenscript
mods.betterwithmods.Crucible.builder()
.buildRecipe([<ore:stone>], [<minecraft:dirt>])
.setHeat(2)
.setPriority(-1)
.build();
```