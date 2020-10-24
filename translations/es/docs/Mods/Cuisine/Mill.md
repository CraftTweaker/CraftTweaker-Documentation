# Mill

## Addition

```zenscript
import mods.cuisine.Mill;

Mill.add(IIngredient input, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid);

Mill.add(<item:minecraft:dirt> * 2, null, <item:minecraft:diamond>, null);
Mill.add(<ore:cobblestone> * 4, <liquid:water> * 1000, null, <liquid:lava> * 1000);
```

## Removal

```zenscript
import mods.cuisine.Mill;

// Remove by input.
Mill.remove(IItemStack input, ILiquidStack inputFluid);
Mill.remove(IOreEntry input, ILiquidStack inputFluid);

Mill.remove(<item:minecraft:dirt> * 2, null);
Mill.remove(<ore:cobblestone> * 4, <liquid:water> * 1000);

// Remove by identifier.
Mill.remove(String id);

Mill.remove("recipe_name");

// Remove everything!
Mill.removeAll();
```