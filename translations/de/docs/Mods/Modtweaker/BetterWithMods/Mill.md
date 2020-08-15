# Mühle

## Einfaches Rezept

* Fügt ein Mühlenrezept hinzu 

```zenscript
mods.betterwithmods.Mill.addRecipe(IIngredient[] Eingänge, IItemStack[] Ausgabe);
//Beispiele
mods.betterwithmods.Mill.addRecipe([<minecraft:dirt>],[<minecraft:stone>]);
```

## Entfernen

* Entfernen Sie ein Mühlenrezept basierend auf der Ausgabe

```zenscript
mods.betterwithmods.Mill.remove(IItemStack[] Ausgänge);
```

* Entferne alle Mühlenrezepte

```zenscript
mods.betterwithmods.Mill.removeAll();
```

## Erbauer

Die Mühle hat einen Rezeptbauer, der eine genauere Kontrolle über die Rezepte ermöglicht. Alle bisherigen Methoden sind einfach kurze Abschnitte zur Verwendung des Builders.

* Um einen neuen Mühlenbauer zu erstellen. `mods.betterwithmods.Mill.builder()`

* Mühlenbaumethoden
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              zenscript
              buildRecipe(IIngredient[] Eingänge, IItemStack[] Ausgaben)
     
     * Legt die Priorität des Rezepts fest, je niedriger die Priorität ist, desto schneller wird es hergestellt. Default=0.  
          zenscript setPriority(int priority)  
              zenscript
              setPriority(int priority)
     
     * Set the sound of a Mill Recipe.  
          zenscript setSound(String soundLocation)  
              zenscript
              setSound(String SoundLocation)
     
     * Finalize the recipe and add it to the game  
          zenscript build()  
              zenscript
              build()

### Beispiel-Builder-Nutzung

```zenscript
mods.betterwithmods.Mill.builder()
.buildRecipe([<minecraft:stone>], [<minecraft:stone>])
.setGrindType("minecraft:entity.ghast.scream")
.build();
```