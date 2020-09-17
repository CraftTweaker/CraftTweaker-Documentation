# Electrolizador

# Paquete
```zenscript
`mods.alchemistry.Electrolyzer`Electrolyzer`
```

## Métodos
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) entrada** - La entrada de líquido de la receta.
- **[ItemStack](/Vanilla/Items/IItemStack/) entrada** - La entrada electrolyte de la receta.
- **int-electrolyteConsumptionChance** - Posibilidad de consumir electrolye
- **[ItemStack](/Vanilla/Items/IItemStack/) salida** - Salida de la receta

## Adicional
```zenscript
mods.alchemistry.AtomizerElectrolyzer.addRecipe(entrada de ILiquidStack, entrada de ItemStack, int electrolyteConsumptionChance, salida de ItemStack, salida de ItemStack ItemStack2, @Salida de ItemStack Nullable, @Salida de ItemStack Nullable, @Salida de int Nullable, @ItemStack salput4, @Salida de ItemStack Nullable);
mods.alchemistry.mods.alchemistry.Electrolyzer.addRecipe(ILiquidStack input, IItemStack input, int electrolyteConsumptionChance, IItemStack output, IItemStack output2, @Nullable IItemStack output3, @Nullable int output3Chance, @Nullable IItemStack output4, @Nullable int output4Chance);
mods.alchemistry.Electrolyzer.addRecipe(<liquid:water>*400,<minecraft:stone>,10,<minecraft:ender_pearl>*2,<minecraft:sand>,null,0,null,0);
```

## Eliminar
```zenscript
mods.alchemistry.AtomizerElectrolyzer.removeRecipe(entrada ILiquidStack, entrada ItemStack);
mods.alchemistry.mods.alchemistry.Electrolyzer.removeRecipe(ILiquidStack input, IItemStack input);
mods.alchemistry.Electrolyzer.removeRecipe(<liquid:water>*125,<alchemistry:compound:13>);

mods.alchemistry.Electrolyzer.removeAllRecipes();Electrolyzer.removeAllRecipes();
```
