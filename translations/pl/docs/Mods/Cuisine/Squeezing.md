# Spadek basenu

## Dodanie

```zenscript
import mods.cuisine.BasinSqueezing;

BasinSqueezing.add(IIngredient input, ILiquidStack output, @Opcjonalny IItemStack extraOutput);

BasinSqueezing. dd(<item:minecraft:dirt>, <liquid:water> * 1000);
BasinSqueez.add(<ore:cobblestone> * 2, <liquid:lava> * 1000, <item:minecraft:diamond>);
```

## Usuwanie

```zenscript
importuj mods.cuisine.BasinSqueezing;

// Usuń danymi wejściowymi.
BasinSqueezing.remove(IItemStack inputFluid);

BasinSqueezing.remove(<item:minecraft:dirt>, <liquid:water> * 1000);

// Usuń przez identyfikator.
BasinSqueezing.remove(String id);

BasinSqueezing.remove("recipe_name");

// Usuń wszystko!
BasinSqueez.removeAll();
```