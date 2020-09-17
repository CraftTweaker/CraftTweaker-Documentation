# Schneidmesser

Das Paket *Messer* wird zum Hinzufügen oder Entfernen von Rezepten zum Schneidmesser verwendet.

## Anruf

Sie können das *Messer* Paket mit `mods.skyresources.knife` aufrufen

## Rezeptzusatz

```zenscript
//mods.skyresources.knife.addRecipe(IItemStack output, IItemStack input);
mods.skyresources.knife.addRecipe(<minecraft:diamond>, <minecraft:stone>);
```

## Rezept entfernen

```zenscript
//mods.skyresources.knife.removeRecipe(IItemStack output);
mods.skyresources.knife.removeRecipe(<minecraft:melon>);
```