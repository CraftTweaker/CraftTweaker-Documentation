# Canner

## Pacchetto

`import mods.ic2.Canner;`

## Metodi

- **[IItemStack](/Vanilla/Items/IItemStack/) output** Il prodotto
- **[Contenitore IIngrediente](/Vanilla/Variable_Types/IIngredient/)** L'ingrediente da "riempire"
- **[filler IIngrediente](/Vanilla/Variable_Types/IIngredient/)** L'ingrediente con cui viene riempito nel contenitore

## Aggiungi Ricetta Bottiglia

```zenscript
mods.ic2.Canner.addBottleRecipe(IItemStack output, IIngredient container, IIngredient filler);

mods.ic2.Canner.addBottleRecipe(<minecraft:water_bucket>, <minecraft:bucket>, <minecraft:ice>);
```

## Aggiungi Ricetta Arricchita

```zenscript
mods.ic2.Canner.addEnrichRecipe(ILiquidStack output, ILiquidStack input, IIngredient additive);

mods.ic2.Canner.addEnrichRecipe(<liquid:lava> * 1000, <liquid:water> * 1000, <minecraft:redstone>);
```