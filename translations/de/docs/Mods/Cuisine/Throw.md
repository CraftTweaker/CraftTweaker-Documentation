# Becken Werfen

## Addition

```zenscript
import mods.cuisine.BasinThrowing;

BasinThrowing.add(IIngredient Eingabe, ILiquidStack inputFluid, IItemStack output);

BasinThrowing.add(<ore:cobblestone> * 2, <liquid:lava> * 1000, <item:minecraft:diamond>);
```

## Entfernen

```zenscript
import mods.cuisine.BasinThrowing;

// Von Eingaben entfernen.
BasinThrowing.remove(IItemStack Eingabe, ILiquidStack InputFluid);

BasinThrowing.remove(<item:minecraft:dirt>, <liquid:water> * 1000);

// Entfernen durch Identifikator.
BasinThrowing.remove(String id);

BasinThrowing.remove("recipe_name");

// Alles entfernen!
BasinThrowing.removeAll();
```