# Grindstone

Du kannst CrT verwenden, um Rezepte aus dem AS Schleifstein hinzuzufügen oder zu entfernen.

## Anruf

Sie können das InfusionRecipe Paket mit `mods.astralsorcery.Grindstone` aufrufen.

## Entfernen

Dadurch wird das erste Schleifrezept entfernt, das das zur Verfügung gestellte [IItemStack](/Vanilla/Items/IItemStack/) `Ausgabe`erzeugt.  
Wenn es mehrere Rezepte gibt, die die angegebene Ausgabe zurückgeben, müssen Sie diese Methode mehrmals aufrufen!

```zenscript
//mods.astralsorcery.Grindstone.removeRecipe(IItemStack output);
mods.astralsorcery.Grindstone.removeRecipe(<minecraft:redstone>);
```

## Addition

```zenscript
//mods.astralsorcery.Grindstone.addRecipe(IItemStack input, IItemStack output);
mods.astralsorcery.Grindstone.addRecipe(<minecraft:stone>, <minecraft:gravel>);

//mods.astralsorcery.Grindstone.addRecipe(IItemStack input, IItemStack output, float doubleChance);
mods.astralsorcery.Grindstone.addRecipe(<minecraft:cobblestone>, <minecraft:gravel>, 0.5f);
```