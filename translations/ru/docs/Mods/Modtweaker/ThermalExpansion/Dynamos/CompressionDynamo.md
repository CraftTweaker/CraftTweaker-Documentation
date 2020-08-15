# Динамика сжатия

## Импортировать пакет

Чтобы сократить вызовы методов, вы можете [импортировать](/AdvancedFunctions/Import/) пакет так:

```zenscript
import mods.thermalexpansion.CompressionDynamo;
```

## Добавить топливо

```zenscript
//mods.thermalexpansion.CompressionDynamo.addFuel(ILiquidStack, int energy);
mods.thermalexpansion.CompressionDynamo.addFuel(<liquid:water>, 13);
```

## Снимите топливо

```zenscript
//mods.thermalexpansion.Compression.removeFuel(ILiquidStack);
mods.thermalexpansion.Compression.removeFuel(<liquid:water>);
```