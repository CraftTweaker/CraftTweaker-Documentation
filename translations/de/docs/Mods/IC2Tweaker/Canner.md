# Anrufer

## Paket

`importieren mods.ic2.Canner;`

## Methoden

- **[IItemStack](/Vanilla/Items/IItemStack/) Ausgabe** Das Produkt
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) Container** Die Zutat, die gefüllt werden soll
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Füllstoff** Die Zutat, mit der in den Behälter gefüllt wird

## Flaschenrezept hinzufügen

```zenscript
mods.ic2.Canner.addBottleRecipe(IItemStack Ausgabe, IIngredient Container, IIngredient Füller);

mods.ic2.Canner.addBottleRecipe(<minecraft:water_bucket>, <minecraft:bucket>, <minecraft:ice>);
```

## Rezept bereichern

```zenscript
mods.ic2.Canner.addEnrichRecipe(ILiquidStack Output, ILiquidStack Input, IIngredient additive);

mods.ic2.Canner.addEnrichRecipe(<liquid:lava> * 1000, <liquid:water> * 1000, <minecraft:redstone>);
```