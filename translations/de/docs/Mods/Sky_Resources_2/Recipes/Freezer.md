# Tiefkühler

Das *Gefrierschrank* Paket wird verwendet, um Rezepte für/vom Gefrierschrank hinzuzufügen oder zu entfernen.

## Anruf

Sie können das *Freezer* Paket mit `mods.skyresources.freezer` aufrufen

## Rezeptzusatz

```zenscript
//mods.skyresources.freezer.addRecipe(IItemStack Output, IItemStack Input, int Ticks);
mods.skyresources.freezer.addRecipe(<minecraft:ice>, <minecraft:dirt>, 900);
```

## Rezept entfernen

```zenscript
//mods.skyresources.freezer.removeRecipe(IItemStack output);
mods.skyresources.freezer.removeRecipe(<minecraft:ice>);
```