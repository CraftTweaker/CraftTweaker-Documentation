# Botania Pure Daisy

Die Pure Daisy ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept mit BlockState Eingabe hinzufügen

Das folgende Skript fügt ein Rezept zur Pure Daisy hinzu, das einen Goldenen Block in einen Diamantenblock umwandelt und 20 Ticks braucht, um ihn zu konvertieren.

```zenscript
// <recipetype:botania:pure_daisy>.addRecipe(String name, BlockState output, BlockState input, int time)

<recipetype:botania:pure_daisy>.addRecipe("pure_daisy_test", <blockstate:minecraft:diamond_block>, <blockstate:minecraft:gold_block>, 20);
```

#### Rezept mit Block[] Eingabe hinzufügen

Das folgende Skript fügt ein Rezept zur Pure Daisy hinzu, das einen Steinblock oder einen Bruchstein zu einem Eisenblock umwandelt und 20 Ticks zum Konvertieren benötigt.

```zenscript
// <recipetype:botania:pure_daisy>.addRecipe(String name, BlockState output, Block[] inputs, int time)

<recipetype:botania:pure_daisy>.addRecipe("pure_daisy_block_array_test", <blockstate:minecraft:iron_block>, [<block:minecraft:stone>, <block:minecraft:cobblestone>], 20);
```

#### Rezept mit BlockTag Eingabe hinzufügen

Das folgende Skript fügt ein Rezept zur Pure Daisy hinzu, das jeden Block im `minecraft:wool` BlockTag in einen Lapis Lazuli Block umwandelt und 20 Ticks benötigt.

```zenscript
// <recipetype:botania:pure_daisy>.addRecipe(String name, BlockState output, Block[] inputs, int time)

<recipetype:botania:pure_daisy>.addRecipe("pure_daisy_block_tag_test", <blockstate:minecraft:lapis_block>, <tag:blocks:minecraft:wool>, 20);
```


#### Remove Recipes

Das folgende Skript wird alle Pure Daisy-Rezepte entfernen, die Blöcke in Living Rock konvertieren

```zenscript
// <recipetype:botania:pure_daisy>.removeRecipe(BlockState state);

<recipetype:botania:pure_daisy>.removeRecipe(<blockstate:botania:livingrock>);
```



