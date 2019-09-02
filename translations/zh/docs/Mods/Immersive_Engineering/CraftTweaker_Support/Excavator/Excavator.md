# Excavator

## Calling The Package

You can call the Excavator package using `mods.immersiveengineering.Excavator`.

## Add Mineral

| Required | 类型                  | Data Type |
| -------- | ------------------- | --------- |
| 必要       | Name                | string    |
| 必要       | Mineral Weight      | int       |
| Required | Fail Chance         | double    |
| 必要       | Ores                | string[]  |
| 必要       | Chances             | double[]  |
| 可选       | Dimension Whitelist | int []    |
| 可选       | Blacklist           | boolean   |

### 例子

```JAVA
//Example:
mods.immersiveengineering.Excavator.addMineral(String name, int mineralWeight, double failChance, String[] ores, double[] chances, @Optional int[] dimensionWhitelist, @Optional boolean blacklist);

mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["minecraft:iron_ore", "minecraft:diamond_ore"], [0.005, 0.01]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["minecraft:iron_ore", "minecraft:diamond_ore"], [0.005, 0.01], [1, 0, -1]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["minecraft:iron_ore", "minecraft:diamond_ore"], [0.005, 0.01], [1, 0, -1], true);
```

## Remove Mineral

| Required | 类型   | Data Type |
| -------- | ---- | --------- |
| Required | Name | String    |

### Example

```JAVA
//Example:
mods.immersiveengineering.Excavator.removeMineral(String name);

mods.immersiveengineering.Excavator.removeMineral("Iron Ore");
```