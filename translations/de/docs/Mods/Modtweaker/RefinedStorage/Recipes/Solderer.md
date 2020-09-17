# Solderer

Das Solderer Paket wird zum Hinzufügen oder Entfernen von Rezepten zum Refined Storage Solderer verwendet.

## Anruf

Sie können das Solderer Paket mit `mods.refinedstorage.Solderer`

## Rezeptzusatz

The Rows array **must** have a length of three! Verwende `null` wenn du leere Stapel brauchst.

```zenscript
//mods.refinedstorage.Solderer.addRecipe(IItemStack Ausgabe, Int-Zeit, IItemStack[] Zeilen);
mods.refinedstorage.Solderer.addRecipe(<minecraft:gold_ingot>, 100, [<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>]);
```

## Rezept-Entfernung

```zenscript
//mods.refinedstorage.Solderer.removeRecipe(IItemStack Ausgabe);
mods.refinedstorage.Solderer.removeRecipe(<minecraft:iron_ingot>);
```