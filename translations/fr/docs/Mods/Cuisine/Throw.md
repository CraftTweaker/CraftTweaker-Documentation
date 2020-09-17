# Lancer de Bassin

## Ajouter

```zenscript
import mods.cuisine.BasinThrowing;

BasinThrowing.add(IIngredient input, ILiquidStack inputFluid, IItemStack output);

BasinThrowing.add(<ore:cobblestone> * 2, <liquid:lava> * 1000, <item:minecraft:diamond>);
```

## Retirer

```zenscript
import mods.cuisine.BasinThrowing;

// Supprime par les entrées.
BasinThrowing.remove(IItemStack input, ILiquidStack inputFluid);

BasinThrowing.remove(<item:minecraft:dirt>, <liquid:water> * 1000);

// Supprimer par identifiant.
BasinThrowing.remove(String id);

BasinThrowing.remove("recipe_name");

// Supprime tout !
format@@0 BasinThrowing.removeAll();
```