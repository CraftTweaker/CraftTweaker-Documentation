# Culture Vat

## Package
` moretweaker.fossil.CultureVat`

## Addition

```zenscript
//moretweaker.fossil.CultureVat.addRecipe(IIngredient input, IItemStack output);
//You may add custom recipes but you won't be able to but any items different from
//the default ones in the input slot.
moretweaker.fossil.CultureVat.addRecipe(<minecraft:carrot>, <minecraft:diamond>);
```

## Removal

```zenscript
//moretweaker.fossil.CultureVat.removeRecipe(IIngredient output);
moretweaker.fossil.CultureVat.removeRecipe(<minecraft:potato>);

moretweaker.fossil.CultureVat.removeAll();
```