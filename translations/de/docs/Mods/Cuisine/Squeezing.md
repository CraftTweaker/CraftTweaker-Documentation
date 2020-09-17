# Becken Squeezing

## Addition

```zenscript
import mods.cuisine.BasinSqueezing;

BasinSqueezing.add(IIngredient Eingabe, ILiquidStack Ausgabe, @Optional IItemStack extraOutput);

BasinSqueezing. dd(<item:minecraft:dirt>, <liquid:water> * 1000);
BasinSqueezing.add(<ore:cobblestone> * 2, <liquid:lava> * 1000, <item:minecraft:diamond>);
```

## Entfernen

```zenscript
import mods.cuisine.BasinSqueezing;

// Durch Eingaben entfernen.
BasinSqueezing.remove(IItemStack Eingabe, ILiquidStack InputFluid);

BasinSqueezing.remove(<item:minecraft:dirt>, <liquid:water> * 1000);

// Entfernen durch Identifikator.
BasinSqueezing.remove(String id);

BasinSqueezing.remove("recipe_name");

// Alles entfernen!
BasinSqueezing.removeAll();
```