# [PLACEHOLDER] ReactantDynamo

## Importuj pakiet

Aby skrócić połączenia metodą, możesz [zaimportować](/AdvancedFunctions/Import/) pakiet taki jak tak:

```zenscript
importuj mods.thermalexpansion.ReactantDynamo;
```

## Dodaj reakcję

```zenscript
//mods.thermalexpansion.ReactantDynamo.addReaction(element IItemStack, ciecz ILiquidStack, energia int);
mods.thermalexpansion.ReactantDynamo.addReaction(<minecraft:bedrock>, <liquid:water>, 13);
```

## Dodaj Reakcję Żywiołową

```zenscript
//mods.thermalexpansion.ReactantDynamo.addElementalReaction(element IItemStack, ciecz ILiquidStack, energia int);
mods.thermalexpansion.ReactantDynamo.addElementalReaction(<minecraft:bedrock>, <liquid:water>, 13);
```

## Usuń reakcję

```zenscript
//mods.thermalexpansion.ReactantDynamo.removeReaction(element IItemStack, ciecz ILiquidStack);
mods.thermalexpansion.ReactantDynamo.removeReaction(<minecraft:bedrock>, <liquid:water>);
```

## Usuń Reakcję Żywiołową

```zenscript
//mods.thermalexpansion.ReactantDynamo.removeElementalReaction(element IItemStack, ciecz ILiquidStack);
mods.thermalexpansion.ReactantDynamo.removeElementalReaction(<minecraft:bedrock>, <liquid:water>);
```