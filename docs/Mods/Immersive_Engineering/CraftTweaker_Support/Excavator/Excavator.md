# Excavator

## Calling The Package:
You can call the Excavator package using `mods.immersiveengineering.Excavator`.

## Add Mineral

|Required  |Type                 |Data Type  |
|----------|---------------------|-----------|
|Required  |Name                 |String     |
|Required  |Mineral Weight       |Integer    |
|Required  |Fail Chance          |Double     |
|Required  |Ores                 |String[]   |
|Required  |Chances              |Double[]   |
|Optional  |Dimension Whitelist  |Integer[]  |
|Optional  |Blacklist            |Boolean    |

### Example:
```
//Example:
mods.immersiveengineering.Excavator.addMineral(String name, int mineralWeight, double failChance, String[] ores, double[] chances, @Optional int[] dimensionWhitelist, @Optional boolean blacklist);

mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["minecraft:iron_ore", "minecraft:diamond_ore"], [0.005, 0.01]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["minecraft:iron_ore", "minecraft:diamond_ore"], [0.005, 0.01], [1, 0, -1]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["minecraft:iron_ore", "minecraft:diamond_ore"], [0.005, 0.01], [1, 0, -1], true);
```



## Remove Mineral

|Required  |Type                 |Data Type  |
|----------|---------------------|-----------|
|Required  |Name                 |String     |

### Example:
```
//Example:
mods.immersiveengineering.Excavator.removeMineral(String name);

mods.immersiveengineering.Excavator.removeMineral("Iron Ore");
```