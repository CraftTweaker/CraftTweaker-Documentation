# Molino

## Adicional

```zenscript
import mods.cuisine.Mill;

Mill.add(IIngredient input , ILiquidStack inputFluid, ItemStack output, ILiquidStack outputFluid);

Mill. dd(<item:minecraft:dirt> * 2, null, <item:minecraft:diamond>, nulo);
Molino. dd(<ore:cobblestone> * 4, <liquid:water> * 1000, null, <liquid:lava> * 1000);
```

## Eliminar

```zenscript
import mods.cuisine.Mill;

// Quitar por entrada.
Mill.remove(IItemStack input, ILiquidStack inputFluid);
Mill.remove(IOreEntry input, ILiquidStack inputFluid);

Mill.remove(<item:minecraft:dirt> * 2, null);
Mill.remove(<ore:cobblestone> * 4, <liquid:water> * 1000);

// Remove by identifier.
Mill.remove(String id);

Mill.remove("recipe_name");

// ¡Elimina todo!
Mill.remover todo();
```