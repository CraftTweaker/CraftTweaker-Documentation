# Excavator

## Calling The Package

You can call the Excavator package using `mods.immersiveengineering.Excavator`.

## Add Mineral

| Required | Type                | Data Type |
| -------- | ------------------- | --------- |
| Required | Name                | string    |
| Required | Mineral Weight      | int       |
| Required | Fail Chance         | double    |
| Required | Ores                | string[]  |
| Required | Chances             | double[]  |
| Optional | Dimension Whitelist | int []    |
| Optional | Blacklist           | boolean   |

### Example

```zenscript
//Example:
mods.immersiveengineering.Excavator.addMineral(String name, int mineralWeight, double failChance, String[] ores, double[] chances, @Optional int[] dimensionWhitelist, @Optional boolean blacklist);

mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1], true);
```

## Remove Mineral

| Required | Type | Data Type |
| -------- | ---- | --------- |
| Required | Name | String    |

### Example

```zenscript
//Example:
mods.immersiveengineering.Excavator.removeMineral(String name);

mods.immersiveengineering.Excavator.removeMineral("Iron Ore");
```