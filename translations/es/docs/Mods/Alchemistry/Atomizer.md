# Atomizador

# Paquete
```zenscript
mods.alchemistry.AtomizerAtomizador
```

## Métodos
**[ItemStack](/Vanilla/Items/IItemStack/) salida** - La salida de la receta.

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) entrada** - La entrada de la receta.


## Adicional
```zenscript
mods.alchemistry.AtomizerAtomizer.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.mods.alchemistry.Atomizer.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Atomizer.addRecipe(<minecraft:redstone>,<liquid:beryllium>*500);
```

## Eliminar
```zenscript
mods.alchemistry.Atomizermods.alchemistry.Atomizer.removeRecipe(ILiquidStack input); //Will work regardless of quantity

mods.alchemistry.Atomizer.removeRecipe(<liquid:iron>);
mods.alchemistry.Atomizer.removeAllRecipes();Atomizer.removeRecipe(<liquid:iron>);
mods.alchemistry.Atomizer.removeAllRecipes();
```
