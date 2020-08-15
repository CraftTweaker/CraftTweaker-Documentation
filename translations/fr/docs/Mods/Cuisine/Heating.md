# Chauffage du bassin

## Ajouter

```zenscript
import mods.cuisine.BasinHeating;

BasinHeating.add(ILiquidStack input, IItemStack output); // Utiliser 1 comme valeur de chaleur
BasinHeating. dd(ILiquidStack entrée, IItemStack sortie, int heatValue);

BasinHeating.add(<liquid:lava> * 1000, <item:minecraft:diamond>);
BasinHeating.add(<liquid:water> * 1000, <item:minecraft:diamond>, 100 );
```

## Retirer

```zenscript
import mods.cuisine.BasinHeating;

// Supprimer par entrée.
BasinHeating.remove(ILiquidStack input);

BasinHeating.remove(<liquid:lava> * 1000);

// Supprimer par identifiant.
BasinHeating.remove(String id);

BasinHeating.remove("recipe_name");

// Retire tout !
Retirer();
```