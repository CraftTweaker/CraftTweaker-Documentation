# Gel de Bassin

## Ajouter

```zenscript
import mods.cuisine.BasinSqueezing;

BasinSqueezing.add(IIngredient input, ILiquidStack sortie, @Optional IItemStack extraOutput);

BasinSqueezing. dd(<item:minecraft:dirt>, <liquid:water> * 1000 );
BasinSqueezing.add(<ore:cobblestone> * 2, <liquid:lava> * 1000, <item:minecraft:diamond>);
```

## Retirer

```zenscript
import mods.cuisine.BasinSqueezing;

// Supprime par les entrées.
BasinSqueezing.remove(IItemStack input, ILiquidStack inputFluid);

BasinSqueezing.remove(<item:minecraft:dirt>, <liquid:water> * 1000);

// Supprimer par identifiant.
BasinSqueezing.remove(String id);

BasinSqueezing.remove("recipe_name");

// Supprime tout !
BasinSqueezing.removeAll();
```