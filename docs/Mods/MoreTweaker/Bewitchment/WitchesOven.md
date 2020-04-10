# Witches Oven

## Package
`moretweaker.bewitchment.WitchesOven`

## Addition

```zenscript
//moretweaker.bewitchment.WitchesOven.addRecipe(IIngredient input, IItemStack output, IItemStack byproduct, @Optional float chance, @Optional boolean requiresJar);
moretweaker.bewitchment.WitchesOven.addRecipe(<minecraft:dirt>, <minecraft:gravel>, <minecraft:diamond>, 0.1 /* 10% */, false);
```

## Removal

```zenscript
//moretweaker.bewitchment.WitchesOven.removeRecipe(IIngredient output);
moretweaker.bewitchment.WitchesOven.removeRecipe(<minecraft:log:*>);

moretweaker.bewitchment.WitchesOven.removeAll();
```