# Rzucanie zlewni

## Dodanie

```zenscript
import mods.cuisine.BasinThrowing;

BasinThrowing.add(IIngredient InputFluid, ILiquidStack InputFluid, IItemStack);

BasinThrowing.add(<ore:cobblestone> * 2, <liquid:lava> * 1000, <item:minecraft:diamond>);
```

## Usuwanie

```zenscript
importuj mods.cuisine.BasinThrowing;

// Usuń danymi wejściowymi.
BasinThrowing.remove(wejściowe IItemStack, ILiquidStack inputFluid);

BasinThrowing.remove(<item:minecraft:dirt>, <liquid:water> * 1000);

// Usuń przez identyfikator.
BasinThrowing.remove(id String);

BasinThrowing.remove("recipe_name");

// Usuń wszystko!
BasinThrowing.removeAll();
```