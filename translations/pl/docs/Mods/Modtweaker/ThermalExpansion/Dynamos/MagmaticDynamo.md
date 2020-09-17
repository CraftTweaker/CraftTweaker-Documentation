# Dynamo magnetyczne

## Importuj pakiet

Aby skrócić połączenia metodą, możesz [zaimportować](/AdvancedFunctions/Import/) pakiet taki jak tak:

```zenscript
importuj mods.thermalexpansion.MagmaticDynamo;
```

## Dodaj paliwo

```zenscript
//mods.thermalexpansion.MagmaticDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.MagmaticDynamo.addFuel(<liquid:water>, 13);
```

## Usuń paliwo

```zenscript
//mods.thermalexpansion.MagmaticDynamo.removeFuel(ILiquidStack);
mods.thermalexpansion.MagmaticDynamo.removeFuel(<liquid:water>);
```