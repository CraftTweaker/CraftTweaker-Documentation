# Динамика Steam

## Импортировать пакет

Чтобы сократить вызовы методов, вы можете [импортировать](/AdvancedFunctions/Import/) пакет так:

```zenscript
import mods.thermalexpansion.SteamDynamo;
```

## Добавить топливо

```zenscript
//mods.thermalexpansion.SteamDynamo.addFuel(IItemStack, int energy);
mods.thermalexpansion.SteamDynamo.addFuel(<minecraft:stick>, 13);
```

## Снимите топливо

```zenscript
//mods.thermalexpansion.SteamDynamo.removeFuel(IItemStack);
mods.thermalexpansion.SteamDynamo.removeFuel(<minecraft:stick>);
```