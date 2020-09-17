# ReactantDynamo

## Импортировать пакет

Чтобы сократить вызовы методов, вы можете [импортировать](/AdvancedFunctions/Import/) пакет так:

```zenscript
импорт mods.thermalexpansion.ReactantDynamo;
```

## Добавить реакцию

```zenscript
//mods.thermalexpansion.ReactantDynamo.addReaction(элемент IItemStack, жидкость ILiquidStack);
mods.thermalexpansion.ReactantDynamo.addReaction(<minecraft:bedrock>, <liquid:water>, 13);
```

## Добавить Элементальную реакцию

```zenscript
//mods.thermalexpansion.ReactantDynamo.addElementalReaction(IItemStack item, ILiquidStack жидкость, int energy);
mods.thermalexpansion.ReactantDynamo.addElementalReaction(<minecraft:bedrock>, <liquid:water>, 13);
```

## Удалить реакцию

```zenscript
//mods.thermalexpansion.ReactantDynamo.removeReaction(IItemStack, ILiquidStack);
mods.thermalexpansion.ReactantDynamo.removeReaction(<minecraft:bedrock>, <liquid:water>);
```

## Удалить элементальную реакцию

```zenscript
//mods.thermalexpansion.ReactantDynamo.removeElementalReaction(IItemStack, ILiquidStack);
mods.thermalexpansion.ReactantDynamo.removeElementalReaction(<minecraft:bedrock>, <liquid:water>);
```