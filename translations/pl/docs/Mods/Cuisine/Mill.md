# Młyn

## Dodanie

```zenscript
importuj mods.cuisine.Mill;

Mill.add(IIngredient inputFluid, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid);

Mill. dd(<item:minecraft:dirt> * 2, null, <item:minecraft:diamond>, null);
Mill. dd(<ore:cobblestone> * 4, <liquid:water> * 1000, null, <liquid:lava> * 1000);
```

## Usuwanie

```zenscript
importuj mods.cuisine.Mill;

// Usuń przez wejście.
Mill.remove(IItemStack input, ILiquidStack inputFluid);
Mill.remove(IOreEntry input, ILiquidStack inputFluid);

Mill.remove(<item:minecraft:dirt> * 2, null);
Mill.remove(<ore:cobblestone> * 4, <liquid:water> * 1000);

// Remove by identifier.
Mill.remove(String id);

Mill.remove("recipe_name");

// Usuń wszystko!
Mill.removeAll();
```