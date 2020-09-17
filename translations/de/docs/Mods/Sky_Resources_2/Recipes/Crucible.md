# Crucible

Das *Krufel-* Paket wird verwendet, um Rezepte nach/vom Crucible hinzuzufügen oder zu entfernen.

## Anruf

Sie können das *-Brustables-* Paket mit `mods.skyresources.crucible` aufrufen

## Rezeptzusatz

```zenscript
//mods.skyresources.crucible.addRecipe(ILiquidStack-Ausgabe, IItemStack-Eingang);
mods.skyresources.crucible.addRecipe(<liquid:lava> * 500, <minecraft:cobblestone>);
```

## Rezept entfernen

```zenscript
//mods.skyresources.crucible.removeRecipe(ILiquidStack output);
mods.skyresources.crucible.removeRecipe(<liquid:lava>);
```