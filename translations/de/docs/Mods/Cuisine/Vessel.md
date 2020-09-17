# Schiff

## Addition

```zenscript
import mods.cuisine.Vessel;

// Alle Parameter mit dem Namen 'extra' beziehen sich auf die zusätzliche Eingabe.
Vessel.add(IItemStack Eingabe, ILiquidStack inputFluid, IItemStack Ausgabe, ILiquidStack outputFluid, IItemStack extra);
Vessel. dd(IItemStack Input, ILiquidStack inputFluid, IItemStack Output, ILiquidStack outputFluid, IOreDictEntry extra);
Vessel.add(IOreDictEntry Input, ILiquidStack inputFluid, IItemStack Output, ILiquidStack outputFluid, IItemStack extra);
Vessel. dd(IOreDictEntry Input, ILiquidStack inputFluid, IItemStack Output, ILiquidStack outputFluid, IOreEntry extra);
Vessel.add(IItemStack Input, ILiquidStack inputFluid, IItemStack Output, ILiquidStack OutputFluid);
Vessel. dd(IOreEntry Input, ILiquidStack inputFluid, IItemStack Output, ILiquidStack OutputFluid);

Vessel.add(<item:minecraft:dirt>, <liquid:water> * 1000, <item:minecraft:diamond>, null);
```

## Entfernen

```zenscript
import mods.cuisine.Vessel;

// Von Eingaben entfernen.
Vessel.remove(IItemStack input, ILiquidStack inputFluid, IItemStack extra);
Vessel.remove(IItemStack input, ILiquidStack inputFluid, IOreDictEntry extra);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid, IItemStack extra);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid, IOreDictEntry extra);
Vessel.remove(IItemStack input, ILiquidStack inputFluid);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid);

// Remove by identifier.
Vessel.remove();

Vessel.remove("recipe_name");

// Alles entfernen!
Vessel.removeAll();
```