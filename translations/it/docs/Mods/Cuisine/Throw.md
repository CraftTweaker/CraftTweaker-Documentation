# Lancio Bacino

## Addizione

```zenscript
import mods.cuisine.BasinThrowing;

BasinThrowing.add(IIngredient input, ILiquidStack inputFluid, IItemStack output);

BasinThrowing.add(<ore:cobblestone> * 2, <liquid:lava> * 1000, <item:minecraft:diamond>);
```

## Rimozione

```zenscript
import mods.cuisine.BasinThrowing;

// Remove by inputs.
BasinThrowing.remove(IItemStack input, ILiquidStack inputFluid);

BasinThrowing.remove(<item:minecraft:dirt>, <liquid:water> * 1000);

// Remove by identifier.
BasinThrowing.remove(String id);

BasinThrowing.remove("recipe_name");

// Rimuovi tutto!
BasinThrowing.removeAll();
```