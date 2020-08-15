# Nave

## Addizione

```zenscript
import mods.cuisine.Vessel;

// Tutti i parametri denominati 'extra' si riferiscono all'input aggiuntivo.
Vessel.add(IItemStack input, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid, IItemStack extra);
Nave. dd(IItemStack input, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid, IOreDictEntry extra);
Vessel.add(IOreDictEntry input, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid, IItemStack extra);
Vessel. dd(IOreDictEntry input, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid, IOreEntry extra);
Vessel.add(IItemStack input, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid);
Vessel. dd(IOreEntry input, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid);

Vessel.add(<item:minecraft:dirt>, <liquid:water> * 1000, <item:minecraft:diamond>, null);
```

## Rimozione

```zenscript
import mods.cuisine.Vessel;

// Remove by inputs.
Vessel.remove(IItemStack input, ILiquidStack inputFluid, IItemStack extra);
Vessel.remove(IItemStack input, ILiquidStack inputFluid, IOreDictEntry extra);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid, IItemStack extra);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid, IOreDictEntry extra);
Vessel.remove(IItemStack input, ILiquidStack inputFluid);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid);

// Remove by identifier.
Vessel.remove();

Vessel.remove("recipe_name");

// Rimuovi tutto!
Vessel.removeAll();
```