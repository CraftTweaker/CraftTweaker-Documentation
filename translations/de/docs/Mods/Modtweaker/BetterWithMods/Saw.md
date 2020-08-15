# Säge

## Einfaches Rezept

* Fügt Sägerezept hinzu - Eingaben *MÜSSEN* haben einen Block zugeordnet.

```zenscript
mods.betterwithmods.Saw.add(IIngredient Eingabe, IItemStack[] Ausgabe);
//Beispiele
mods.betterwithmods.Saw.add(<minecraft:fence>,[<minecraft:stick>,<minecraft:stick>]);
```

## Entfernen durch Eingabe

* Entfernen Sie ein Rezept basierend auf der Eingabezutat

```zenscript
mods.betterwithmods.Saw.remove(IIngredient Eingabe);
```

## Nach Ausgabe entfernen

* Ein Rezept basierend auf der Ausgabe entfernen

```zenscript
mods.betterwithmods.Saw.remove(IItemStack[] Ausgänge);
```

## Alle entfernen

* Alle Rezepte entfernen

```zenscript
mods.betterwithmods.Saw.removeAll();
```

## Erbauer

Die Säge hat einen Rezeptbauer. Aufgrund der Natur der Säge hat es derzeit keine speziellen Baumethoden zu dokumentieren, werde ich es none-the-less dokumentieren.

* Um einen neuen Sägenbauer zu erstellen. `mods.betterwithmods.Saw.builder()`

* Sägemethoden
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              zenscript
              buildRecipe(IIngredient[] Eingänge, IItemStack[] Ausgaben)
     
     * Finalize the recipe and add it to the game  
          zenscript build()  
              zenscript
              build()

### Beispiel-Builder-Nutzung

    mods.betterwithmods.Saw.builder()
    .buildRecipe([<minecraft:oak_fence>], [<minecraft:stick>*6])
    .build();