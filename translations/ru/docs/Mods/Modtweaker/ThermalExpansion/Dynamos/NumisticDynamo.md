# Numistic Dynamo

## Импортировать пакет

Чтобы сократить вызовы методов, вы можете [импортировать](/AdvancedFunctions/Import/) пакет так:

```zenscript
импорт mods.thermalexpansion.NumisticDynamo;
```

## Добавить топливо

```zenscript
//mods.thermalexpansion.NumisticDynamo.addFuel(IItemStack, int energy);
mods.thermalexpansion.NumisticDynamo.addFuel(<minecraft:stick>, 13);
```

## Добавить топливо для Самоцветов

```zenscript
//mods.thermalexpansion.NumisticDynamo.addGemFuel(IItemStack, int energy);
mods.thermalexpansion.NumisticDynamo.addGemFuel(<minecraft:stick>, 13);
```

## Снимите топливо

```zenscript
//mods.thermalexpansion.NumisticDynamo.removeFuel(IItemStack);
mods.thermalexpansion.NumisticDynamo.removeFuel(<minecraft:stick>);
```

## Снимите топливо для Самоцвета

```zenscript
//mods.thermalexpansion.NumisticDynamo.removeGemFuel(IItemStack);
mods.thermalexpansion.NumisticDynamo.removeGemFuel(<minecraft:stick>);
```