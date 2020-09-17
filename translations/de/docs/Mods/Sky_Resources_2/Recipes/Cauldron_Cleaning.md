# Kessel Reinigung

Das *Kessel Reinigung* wird zum Hinzufügen oder Entfernen von Rezepten nach/aus dem Kessel verwendet.

## Anruf

Sie können das *Kesselreinigung* Paket mit `mods.skyresources.cauldronclean aufrufen`

## Rezeptzusatz

```zenscript
//mods.skyresources.cauldronclean.addRecipe(IItemStack output, IItemStack input);
mods.skyresources.cauldronclean.addRecipe(<minecraft:diamond>, <minecraft:dirt>);

//mods.skyresources.cauldronclean.addRecipe(IItemStack output, IItemStack input, float chance);
mods.skyresources.cauldronclean.addRecipe(<minecraft:emerald>, <minecraft:dirt>, 0.50);
```

## Rezept entfernen

```zenscript
//mods.skyresources.cauldronclean.removeRecipe(IItemStack Ausgabe);
mods.skyresources.cauldronclean.removeRecipe(<minecraft:diamond>);
```