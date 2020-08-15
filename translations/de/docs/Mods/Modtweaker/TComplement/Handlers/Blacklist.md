# Blacklist

Das Blacklist-Paket wird zum Hinzufügen/Entfernen von Rezepten von oder zur Blacklist verwendet.

## Anruf

Sie können das Blacklist-Paket mit `mods.tcomplement.Blacklist` aufrufen

## Hinzufügen von Blacklisten

```zenscript
//mods.tcomplement.Blacklist.addRecipe(ILiquidStack output, IItemStack input);
mods.tcomplement.Blacklist.addRecipe(<liquid:seared_stone>, <minecraft:stone>);
```

## Löschung der Einträge auf Blacklist

```zenscript
//mods.tcomplement.Blacklist.removeRecipe(IItemStack Eingabe);
mods.tcomplement.Blacklist.removeRecipe(<minecraft:cobblestone>);
```