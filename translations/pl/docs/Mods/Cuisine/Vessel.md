# Statek

## Dodanie

```zenscript
import mods.cuisine.Vessel;

// Wszystkie parametry o nazwie 'extra' odnoszą się do dodatkowego wejścia.
Vessel.add(IItemStack inputFluid, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid, IItemStack extra);
statek. dd(IItemStack inputFluid, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid, IOreDictEntry extra);
Statek.add(IOreDictentry inputFluid, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid, IItemStack extra);
statki. dd(IOreDictEnt, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid, IOreentry extra);
statek.add(IItemStack inputFluid, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluidStack);
Vessel. dd(IOreentry inputFluid, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid);

statek.add(<item:minecraft:dirt>, <liquid:water> * 1000, <item:minecraft:diamond>, null);
```

## Usuwanie

```zenscript
importuj mods.cuisine.Vessel;

// Usuń danymi wejściowymi.
Vessel.remove(IItemStack input, ILiquidStack inputFluid, IItemStack extra);
Vessel.remove(IItemStack input, ILiquidStack inputFluid, IOreDictEntry extra);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid, IItemStack extra);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid, IOreDictEntry extra);
Vessel.remove(IItemStack input, ILiquidStack inputFluid);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid);

// Remove by identifier.
Vessel.remove();

Vessel.remove("recipe_name");

// Usuń wszystko!
Zbiornik.removeAll();
```