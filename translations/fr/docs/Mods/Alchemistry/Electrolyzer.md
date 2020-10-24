# Electrolyzer

# Package
```zenscript
`mods.alchemistry.Electrolyzer`
```

## Methods
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** - The liquid input of the recipe.
- **[IItemStack](/Vanilla/Items/IItemStack/) input** - The electrolyte input of the recipe.
- **int electrolyteConsumptionChance** - Chance of Electrolye being consumed
- **[IItemStack](/Vanilla/Items/IItemStack/) output** - Output for the recipe

## Addition
```zenscript
mods.alchemistry.Electrolyzer.addRecipe(ILiquidStack input, IItemStack input, int electrolyteConsumptionChance, IItemStack output, IItemStack output2, @Nullable IItemStack output3, @Nullable int output3Chance, @Nullable IItemStack output4, @Nullable int output4Chance);
mods.alchemistry.Electrolyzer.addRecipe(<liquid:water>*400,<minecraft:stone>,10,<minecraft:ender_pearl>*2,<minecraft:sand>,null,0,null,0);
```

## Removal
```zenscript
mods.alchemistry.Electrolyzer.removeRecipe(ILiquidStack input, IItemStack input);
mods.alchemistry.Electrolyzer.removeRecipe(<liquid:water>*125,<alchemistry:compound:13>);

mods.alchemistry.Electrolyzer.removeAllRecipes();
```
