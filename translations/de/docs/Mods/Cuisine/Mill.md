# Mühle

## Addition

```zenscript
import mods.cuisine.Mill;

Mill.add(IIngredient Input, ILiquidStack inputFluid, IItemStack Output, ILiquidStack OutputFluid);

Mill. dd(<item:minecraft:dirt> * 2, null, <item:minecraft:diamond>, null);
Mill. dd(<ore:cobblestone> * 4, <liquid:water> * 1000, null, <liquid:lava> * 1000);
```

## Entfernen

```zenscript
import mods.cuisine.Mill;

// Nach Eingabe entfernen.
Mill.remove(IItemStack input, ILiquidStack inputFluid);
Mill.remove(IOreEntry input, ILiquidStack inputFluid);

Mill.remove(<item:minecraft:dirt> * 2, null);
Mill.remove(<ore:cobblestone> * 4, <liquid:water> * 1000);

// Remove by identifier.
Mill.remove(String id);

Mill.remove("recipe_name");

// Alles entfernen!
Mill.removeAll();
```