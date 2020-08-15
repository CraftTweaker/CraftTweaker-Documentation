# Dynamo kompresji

## Importuj pakiet

Aby skrócić połączenia metodą, możesz [zaimportować](/AdvancedFunctions/Import/) pakiet taki jak tak:

```zenscript
importuj mods.thermalexpansion.CompressionDynamo;
```

## Dodaj paliwo

```zenscript
//mods.thermalexpansion.CompressionDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.CompressionDynamo.addFuel(<liquid:water>, 13);
```

## Usuń paliwo

```zenscript
//mods.thermalexpansion.Compression.removeFuel(ILiquidStack);
mods.thermalexpansion.Compression.removeFuel(<liquid:water>);
```