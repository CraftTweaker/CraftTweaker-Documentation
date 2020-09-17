# Drehtisch

## Einfaches Rezept

* Fügt Turntable Rezept hinzu - Eingaben *MÜSSEN* haben einen Block zugeordnet. Der Produktstatus ist der Block, der platziert wird, nachdem das Rezept fertig ist

```zenscript
mods.betterwithmods.Turntable.add(IIngredient Eingabe, IItemStack productState, IItemStack[] Ausgabe);

mods.betterwithmods.Turntable.add(IIngredient Eingabe, IItemStack[] Ausgabe);

//Beispiele
mods. etterwithmods.Turntable.add(<minecraft:grass>, <minecraft:dirt>, [<minecraft:seed>]);

mods.betterwithmods.Turntable.add(<minecraft:gravel>, [<minecraft:flint>]);
```

## Entfernen durch Eingabe

* Entfernen Sie ein Rezept basierend auf der Eingabezutat

```zenscript
mods.betterwithmods.Turntable.remove(IIngredient Eingabe);
```

## Nach Ausgabe entfernen

* Ein Rezept basierend auf der Ausgabe entfernen

```zenscript
mods.betterwithmods.Turntable.remove(IItemStack[] Ausgänge);
```

## Alle entfernen

* Alle Rezepte entfernen

```zenscript
mods.betterwithmods.Turntable.removeAll();
```

## Nach Produkt entfernen

* Entferne ein Rezept vom Produktstatus 

```zenscript
mods.betterwithmods.Turntable.removeRecipe(IItemStack productState);
```

## Erbauer

The Turntable has a recipe builder that allows more precise control over the recipes. Alle bisherigen Methoden sind einfach kurze Abschnitte zur Verwendung des Builders.

* Um einen neuen Turntable Builder zu erstellen. `mods.betterwithmods.Turntable.builder()`

* Turntable Methoden
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              zenscript
              buildRecipe(IIngredient[] Eingänge, IItemStack[] Ausgaben)
     
     * Setzt die Drehungen, die benötigt werden, um das Rezept zu beenden. This defaults to 8.  
          zenscript setRotations(int rotations)  
              zenscript
              setRotations(int rotations)
     
     * Set the block that is placed when the recipe is finished.  
          zenscript setProductState(IItemStack productState)  
              zenscript
              setProductState(IItemStack productState)
     
     * Finalize the recipe and add it to the game  
          zenscript build()  
              zenscript
              build()

### Beispiel-Builder-Nutzung

```zenscript
mods.betterwithmods.Turntable.builder()
.buildRecipe([<minecraft:oak_fence>], [<minecraft:stick>*6])
.build();
```