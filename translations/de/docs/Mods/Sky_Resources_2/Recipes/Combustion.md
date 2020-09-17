# Verbrennung

Das *Verbrennungspaket* wird zum Hinzufügen oder Entfernen von Rezepten nach/vom Verbrennungsprozess verwendet.

## Anruf

Sie können das *Verbrennung* Paket mit `mods.skyresources.combustion` aufrufen

## Rezeptzusatz

```zenscript
//mods.skyresources.combustion.addRecipe(IItemStack Ausgabe, IItemStack[] Eingabe, Int Temperatur);
mods.skyresources.combustion.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:sand> * 2], 420);
```

## Rezept entfernen

```zenscript
//mods.skyresources.combustion.removeRecipe(IItemStack output);
mods.skyresources.combustion.removeRecipe(<minecraft:diamond>);
```