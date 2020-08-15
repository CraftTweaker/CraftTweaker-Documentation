# Überschreibungen

Das Overrides Paket wird zum Hinzufügen/Entfernen von Rezepten von / zu den Schmelzüberschreibungen verwendet.

## Anruf

Du kannst das Overrides Paket mit `mods.tcomplement.Overrides` aufrufen

## Überschreibt Eintragszusatz

```zenscript
//mods.tcomplement.Overrides.addRecipe(ILiquidStack output, IItemStack input, @Optional int temp);
mods.tcomplement.Overrides.addRecipe(<liquid:gold> * 100, <minecraft:gold_ingot>);
mods.tcomplement.Overrides.addRecipe(<liquid:gold> * 100, <minecraft:gold_ingot>, 1000);
```

## Überschreibt die Entfernung des Eintrags

```zenscript
//mods.tcomplement.Overrides.removeRecipe(ILiquidStack output, @Optional IItemStack input);
mods.tcomplement.Overrides.removeRecipe(<liquid:gold>);
mods.tcomplement.overrides.removeRecipe(<liquid:gold>, <minecraft:gold_ore>);
```