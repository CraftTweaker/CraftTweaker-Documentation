# Felsenschleifer

Das *Rockgrinder* Paket wird zum Hinzufügen oder Entfernen von Rezepten nach/vom Felsgrinder verwendet.

## Anruf

Sie können das *Rockgrinder* Paket mit `mods.skyresources.rockgrinder aufrufen`

## Rezeptzusatz

```zenscript
//mods.skyresources.rockgrinder.addRecipe(IItemStack output, IItemStack input);
mods.skyresources.rockgrinder.addRecipe(<minecraft:diamond>, <minecraft:stone>);

//mods.skyresources.rockgrinder.addRecipe(IItemStack output, IItemStack input, float chance);
mods.skyresources.rockgrinder.addRecipe(<minecraft:emerald>, <minecraft:stone>, 0.50);
```

## Rezept entfernen

```zenscript
//mods.skyresources.rockgrinder.removeRecipe(IItemStack output);
mods.skyresources.rockgrinder.removeRecipe(<minecraft:gravel>);
```