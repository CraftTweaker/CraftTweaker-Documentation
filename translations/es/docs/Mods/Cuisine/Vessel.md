# Buque

## Adicional

```zenscript
import mods.cuisine.Vessel;

// Todo el parámetro llamado 'extra' se refiere a la entrada extra.
Vessel.add(Entrada de ItemStack, InputFluid, ItemStack de ItemStack, ILiquidStack outputFluid, IItemStack extra);
Buque. dd(entrada de ItemStack de ILiquidStack inputFluid, salida de ItemStack, salida ILiquidStack outputFluid, IOreDictEntry extra);
Vessel.add(entrada de IOreDictEntry ILiquidStack inputFluid, salida de ItemStack ItemStack, salida de ILiquidStack outputFluid, ItemStack extra);
Vessel. dd(Entrada de IOreDictEntry entrada, ILiquidStack inputFluid, ItemStack salida, ILiquidStack outputFluid, IOreEntry extra);
Vessel.add(Entrada de ItemStack, ILiquidStack inputFluid, ItemStack salida, ILiquidStack outputFluid);
Vessel. dd(Entrada IOreEntry entrada, ILiquidStack inputFluid, ItemStack salida, ILiquidStack outputFluid);

Vessel.add(<item:minecraft:dirt>, <liquid:water> * 1000, <item:minecraft:diamond>, null);
```

## Eliminar

```zenscript
import mods.cuisine.Vessel;

// Quitar por las entradas.
Vessel.remove(IItemStack input, ILiquidStack inputFluid, IItemStack extra);
Vessel.remove(IItemStack input, ILiquidStack inputFluid, IOreDictEntry extra);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid, IItemStack extra);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid, IOreDictEntry extra);
Vessel.remove(IItemStack input, ILiquidStack inputFluid);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid);

// Remove by identifier.
Vessel.remove();

Vessel.remove("recipe_name");

// ¡Elimina todo!
Vessel.removeAll();
```