# Numistic Dynamo

## Importuj pakiet

Aby skrócić połączenia metodą, możesz [zaimportować](/AdvancedFunctions/Import/) pakiet taki jak tak:

```zenscript
importuj mods.thermalexpansion.NumisticDynamo;
```

## Dodaj paliwo

```zenscript
//mods.thermalexpansion.NumisticDynamo.addFuel(IItemStack stack, int energy);
mods.thermalexpansion.NumisticDynamo.addFuel(<minecraft:stick>, 13);
```

## Dodaj Paliwo do Klejnoty

```zenscript
//mods.thermalexpansion.NumisticDynamo.addGemFuel(IItemStack stack, int energy);
mods.thermalexpansion.NumisticDynamo.addGemFuel(<minecraft:stick>, 13);
```

## Usuń paliwo

```zenscript
//mods.thermalexpansion.NumisticDynamo.removeFuel(IItemStack stack);
mods.thermalexpansion.NumisticDynamo.removeFuel(<minecraft:stick>);
```

## Usuń Klejnot Paliwo

```zenscript
//mods.thermalexpansion.NumisticDynamo.removeGemFuel(IItemStack stack);
mods.thermalexpansion.NumisticDynamo.removeGemFuel(<minecraft:stick>);
```