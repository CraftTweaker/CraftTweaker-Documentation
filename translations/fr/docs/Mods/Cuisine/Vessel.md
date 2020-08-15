# Navire

## Ajouter

```zenscript
import mods.cuisine.Vessel;

// Tous les paramètres nommés 'extra' font référence à l'entrée supplémentaire.
Vessel.add(IItemStack inputFluid, ILiquidStack inputFluid, IItemStack, ILiquidStack outputFluid, IItemStack extra);
Vessel. dd(IItemStack inputFluid, ILiquidStack inputFluid, IItemStack, ILiquidStack outputFluid, IOreDictEntry extra);
Vessel.add(IOreDictEntry input, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid, ILiquidStack extra);
Vessel. dd(IOreDictEntry input, ILiquidStack inputFluid, IItemStack sortie, ILiquidStack outputFluid, IOreEntry extra);
Vessel.add(IItemStack inputFluid, ILiquidStack inputFluid, IItemStack, ILiquidStack outputFluid);
Vessel. dd(IOreEntry input, ILiquidStack inputFluid, IItemStack, ILiquidStack outputFluid);

Vessel.add(<item:minecraft:dirt>, <liquid:water> * 1000, <item:minecraft:diamond>, null);
```

## Retirer

```zenscript
import mods.cuisine.Vessel;

// Supprime par les entrées.
Vessel.remove(IItemStack input, ILiquidStack inputFluid, IItemStack extra);
Vessel.remove(IItemStack input, ILiquidStack inputFluid, IOreDictEntry extra);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid, IItemStack extra);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid, IOreDictEntry extra);
Vessel.remove(IItemStack input, ILiquidStack inputFluid);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid);

// Remove by identifier.
Vessel.remove();

Vessel.remove("recipe_name");

// Supprime tout !
Tout supprimer();
```