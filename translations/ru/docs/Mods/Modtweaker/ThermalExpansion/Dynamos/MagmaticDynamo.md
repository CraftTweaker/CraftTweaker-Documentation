# Динамический магматический

## Импортировать пакет

Чтобы сократить вызовы методов, вы можете [импортировать](/AdvancedFunctions/Import/) пакет так:

```zenscript
import mods.thermalexpansion.MagmaticDynamo;
```

## Добавить топливо

```zenscript
//mods.thermalexpansion.MagmaticDynamo.addFuel(ILiquidStack, int energy);
mods.thermalexpansion.MagmaticDynamo.addFuel(<liquid:water>, 13);
```

## Снимите топливо

```zenscript
//mods.thermalexpansion.MagmaticDynamo.removeFuel(ILiquidStack);
mods.thermalexpansion.MagmaticDynamo.removeFuel(<liquid:water>);
```