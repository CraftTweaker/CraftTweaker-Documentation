# Судно

## Сложение

```zenscript
импорт mods.cuisine.Vessel;

// Все параметры под названием 'extra' относятся к дополнительному входу.
Vessel.add(IItemStack input, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid, IItemStack extra);
Vessel. dd(IItemStack input, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid, IOreDictEntry extra);
Vessel.add(IOreDictEntry input, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid, IItemStack extra);
Vessel. dd(IOreDictEntry input, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid, IOreEntry extra);
Vessel.add(IItemStack input, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid);
Vessel. dd(IOreEntry input, ILiquidStack inputFluid, IItemStack, ILiquidStack outputFluid);

Vessel.add(<item:minecraft:dirt>, <liquid:water> * 1000, <item:minecraft:diamond>, null);
```

## Удаление

```zenscript
import mods.cuisine.Vessel;

// Удаляем входы.
Vessel.remove(IItemStack input, ILiquidStack inputFluid, IItemStack extra);
Vessel.remove(IItemStack input, ILiquidStack inputFluid, IOreDictEntry extra);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid, IItemStack extra);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid, IOreDictEntry extra);
Vessel.remove(IItemStack input, ILiquidStack inputFluid);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid);

// Remove by identifier.
Vessel.remove();

Vessel.remove("recipe_name");

// Удаляем все!
essel.removeAll();
```