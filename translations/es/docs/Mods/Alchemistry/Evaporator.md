# Evaporator

# Paquete
```zenscript
mods.alchemistry.EvaporatorEvaporator
```

## Métodos
**[ItemStack](/Vanilla/Items/IItemStack/) salida** - La salida de la receta.

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) entrada** - La entrada de la receta.


## Adicional
```zenscript
mods.alchemistry.AtomizerEvaporator.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.mods.alchemistry.Evaporator.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Evaporator.addRecipe(<minecraft:stone>,<liquid:lava>*250);
```

## Eliminar
```zenscript
mods.alchemistry.Atomizermods.alchemistry.Evaporator.removeRecipe(ILiquidStack input); //Will work regardless of quantity
mods.alchemistry.Evaporator.removeRecipe(<liquid:milk>);

mods.alchemistry.Evaporator.removeAllRecipes();Evaporator.removeRecipe(<liquid:milk>);

mods.alchemistry.Evaporator.removeAllRecipes();
```
