# Kanister

## Pakiet

`import mods.ic2.Canner;`

## Metody

- **[IItemStack](/Vanilla/Items/IItemStack/) wyjście** produkt
- **[Pojemnik](/Vanilla/Variable_Types/IIngredient/) Składnik** Składnik, który ma być wypełniony
- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wypełniacz** Składnik, który jest napełniany do pojemnika

## Dodaj przepis na butelkę

```zenscript
mods.ic2.Canner.addBottleRecipe(wyjście IItemStack, pojemnik IIngredient wypełniacz);

mods.ic2.Canner.addBottleRecipe(<minecraft:water_bucket>, <minecraft:bucket>, <minecraft:ice>);
```

## Dodaj wzbogacony przepis

```zenscript
mods.ic2.Canner.addEnrichRecipe(ILiquidStack output, ILiquidStack, IIngredient additive);

mods.ic2.Canner.addEnrichRecipe(<liquid:lava> * 1000, <liquid:water> * 1000, <minecraft:redstone>);
```