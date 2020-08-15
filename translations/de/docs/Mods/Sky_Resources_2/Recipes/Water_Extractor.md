# Wasserextraktor

Das *Wasserextraktor* Paket wird zum Hinzufügen oder Entfernen von Rezepten für/zum Wasserextraktor-Prozess verwendet.

## Anruf

Sie können das *Wasserextraktor* Paket aufrufen, indem Sie `mods.skyresources.waterextractor` verwenden

## Rezeptzusatz

```zenscript
//mods.skyresources.waterextractor.extract.addRecipe(int waterOut, IItemStack output, IIngredient input);
mods.skyresources.waterextractor.extract.addRecipe(500, <minecraft:dirt>, <minecraft:leaves>);

//mods. kyresources.waterextractor.insert.addRecipe(IItemStack Output, IIngredient Input, int waterIn);
mods.skyresources.waterextractor.insert.addRecipe(<minecraft:dirt>, <minecraft:cobblestone>, 100);
```

## Rezept entfernen

```zenscript
//mods.skyresources.waterextractor.extract.removeRecipe(int waterOut, IItemStack output, IIngredient input);
mods.skyresources.waterextractor.extract.removeRecipe(50, null, <minecraft:snow>);

//mods.skyresources.waterextractor.insert.removeRecipe(IItemStack output);
mods.skyresources.waterextractor.insert.removeRecipe(<minecraft:clay>);
```