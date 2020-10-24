# Basin Squeezing

## Addition

```zenscript
import mods.cuisine.BasinSqueezing;

BasinSqueezing.add(IIngredient input, ILiquidStack output, @Optional IItemStack extraOutput);

BasinSqueezing.add(<item:minecraft:dirt>, <liquid:water> * 1000);
BasinSqueezing.add(<ore:cobblestone> * 2, <liquid:lava> * 1000, <item:minecraft:diamond>);
```

## Removal

```zenscript
import mods.cuisine.BasinSqueezing;

// Remove by inputs.
BasinSqueezing.remove(IItemStack input, ILiquidStack inputFluid);

BasinSqueezing.remove(<item:minecraft:dirt>, <liquid:water> * 1000);

// Remove by identifier.
BasinSqueezing.remove(String id);

BasinSqueezing.remove("recipe_name");

// Remove everything!
BasinSqueezing.removeAll();
```