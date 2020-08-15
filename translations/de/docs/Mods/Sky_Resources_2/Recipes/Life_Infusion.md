# Infusion des Lebens

Das *Infusion* Paket wird zum Hinzufügen oder Entfernen von Rezepten nach/vom Life Infusion Prozess verwendet.

## Anruf

Sie können das *Infusion* Paket aufrufen, indem Sie `mods.skyresources.infusion` verwenden

## Rezeptzusatz

```zenscript
//mods.skyresources.infusion.addRecipe(IItemStack-Ausgabe, IItemStack inputStack, IItemStack inputBlock, int health);
mods.skyresources.infusion.addRecipe(<minecraft:diamond> * 8, <minecraft:nether_star>, <minecraft:dirt>, 14);
```

## Rezept entfernen

```zenscript
//mods.skyresources.infusion.removeRecipe(IItemStack output);
mods.skyresources.infusion.removeRecipe(<minecraft:cactus>);
```