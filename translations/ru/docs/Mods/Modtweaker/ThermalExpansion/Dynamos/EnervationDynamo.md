# Динамика восстановления

## Импортировать пакет

Чтобы сократить вызовы методов, вы можете [импортировать](/AdvancedFunctions/Import/) пакет так:

```zenscript
import mods.thermalexpansion.EnervationDynamo;
```

## Добавить топливо

```zenscript
//mods.thermalexpansion.EnervationDynamo.addFuel(IItemStack, int energy);
mods.thermalexpansion.EnervationDynamo.addFuel(<minecraft:stick>, 13);
```

## Снимите топливо

```zenscript
//mods.thermalexpansion.EnervationDynamo.removeFuel(IItemStack);
mods.thermalexpansion.EnervationDynamo.removeFuel(<minecraft:stick>);
```