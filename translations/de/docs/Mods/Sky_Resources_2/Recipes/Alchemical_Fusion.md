# Alchemistische Fusion

Das *Fusion* Paket wird zum Hinzufügen oder Entfernen von Rezepten zum Alchemistischen Fusion-Prozess verwendet.

## Anruf

Sie können das *Fusion* Paket mit `mods.skyresources.fusion` aufrufen

## Rezeptzusatz

```zenscript
//mods.skyresources.fusion.addRecipe(IItemStack Output, IItemStack[] Input, float catalystUsedPerCraft);
mods.skyresources.fusion.addRecipe(<minecraft:diamond> * 6, [<minecraft:dirt>, <minecraft:emerald> * 2], 0.00420);
```

## Rezept entfernen

```zenscript
//mods.skyresources.fusion.removeRecipe(IItemStack output);
mods.skyresources.fusion.removeRecipe(<minecraft:dirt>);
```