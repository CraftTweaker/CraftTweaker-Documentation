# Wärmerahmen Kühlung

Wärmerahmen Kühlung kann verwendet werden, um einen Gegenstand in ein anderes zu verwandeln, indem Gegenstände in einer Truhe oder einem anderen Inventar mit einem befestigten Heizrahmen platziert werden und Kühlung bis unter 0°C (üblicherweise mit einem Vortex Röhren).

## Anruf

Sie können das Wärmerahmen-Kühlpaket mit `mods.pneumaticcraft.heatframecooling` anrufen

## Entfernen

Diese Funktion entfernt das erste gefundene Rezept mit der angegebenen [IIngredient](/Vanilla/Variable_Types/IIngredient/) `Ausgabe`:

```zenscript
mods.pneumaticcraft.heatframecooling.removeRecipe(IIngrediente Ausgabe);
// Beispiel
mods.pneumaticcraft.heatframecooling.removeRecipe(<minecraft:obsidian>);
```

Diese Funktion entfernt *alle* Rezepte zur Kühlung des Wärmerahmens:

```zenscript
mods.pneumaticcraft.heatframecooling.removeAllRecipes();
```

## Hinzufügen

Diese Funktionen werden verwendet, um neue Rezepte für das Wärmeleitsystem hinzuzufügen:

```zenscript
mods.pneumaticcraft.heatframecooling.addRecipe(IItemStack input, IItemStack output);
mods.pneumaticcraft.heatframecooling.addRecipe(IOreDictEntry input, IItemStack output);

// Example
mods.pneumaticcraft.heatframecooling.addRecipe(<minecraft:slime_ball>, <minecraft:snow_ball>);
```