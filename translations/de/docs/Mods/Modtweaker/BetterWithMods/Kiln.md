# Ofen

## Einfaches Rezept

* Fügt ein Ofenrezept hinzu - Eingaben *MÜSSEN* haben einen Block zugeordnet.

```zenscript
mods.betterwithmods.Kiln.add(IIngredient Eingabe, IItemStack[] Ausgabe);
//Beispiele
mods.betterwithmods.Kiln.add(<minecraft:fence>,[<minecraft:stick>,<minecraft:stick>]);
```

## Entfernen durch Eingabe

* Entfernen Sie ein Rezept basierend auf der Eingabezutat

```zenscript
mods.betterwithmods.Kiln.remove(IIngredient Eingabe);
```

## Nach Ausgabe entfernen

* Ein Rezept basierend auf der Ausgabe entfernen

```zenscript
mods.betterwithmods.Kiln.remove(IItemStack[] outputs);
```

## Alle entfernen

* Alle Rezepte entfernen

```zenscript
mods.betterwithmods.Kiln.removeAll();
```

## Erbauer

Der Ofen hat einen Rezeptbauer, der eine genauere Kontrolle über die Rezepte ermöglicht. Alle bisherigen Methoden sind einfach kurze Abschnitte zur Verwendung des Builders.

* Einen neuen Kiln Builder erstellen. `mods.betterwithmods.Kiln.builder()`

* Ofenmethoden
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              zenscript
              buildRecipe(IIngredient[] Eingänge, IItemStack[] Ausgaben)
     
     * Legen Sie die Wärmeanforderungen des Rezeptes fest. Die Hitze wird verwendet, um zu überprüfen, ob das Rezept in einem geschürten oder ungehefteten Kessel hergestellt werden kann. Ungestürmte Hitze = 1, Stoked Hitze = 2. You can add custom heat sources, and even custom heat levels using the [Heat Registry](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
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
mods.betterwithmods.Kiln.builder()
.buildRecipe([<ore:iron>], [<minecraft:iron_ingot>*2])
.setHeat(2)
.build();
```

## Strukturblock

Der Ofen ist ein Multiblock basierend auf dem Block, aus dem er hergestellt wurde; Dies ermöglicht die Registrierung eines Blocks, mit dem die Struktur erstellt werden kann.

Eingabe MUSS ein *Block* sein

```zenscript
   mods.betterwithmods.Kiln.registerBlock(IItemStack Eingang);

   mods.betterwithmods.Kiln.registerBlock(<minecraft:stonebrick>);
```