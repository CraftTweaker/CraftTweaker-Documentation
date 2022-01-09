# Excavator

## Calling The Package
You can call the Excavator package using `mods.immersiveengineering.Excavator`.

## Add Mineral

| Required | 类型                  | 数据类型      |
| -------- | ------------------- | --------- |
| Required | 名称                  | string    |
| Required | Mineral Weight      | int       |
| Required | Fail Chance         | 双精度       |
| Required | Ores                | string[]  |
| Required | Chances             | double[]  |
| 可选       | Dimension Whitelist | int    [] |
| 可选       | Blacklist           | 布尔值       |

### 例子
```zenscript
//Example:
mods.immersiveengineering.Excavator.addMineral(String name, int mineralWeight, double failChance, String[] ores, double[] chances, @Optional int[] dimensionWhitelist, @Optional boolean blacklist);

mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1], true);
```



## Remove Mineral

| Required | 类型 | 数据类型        |
| -------- | -- | ----------- |
| Required | 名称 | 字符串[string] |

### 例子
```zenscript
//Example:
mods.immersiveengineering.Excavator.removeMineral(String name);

mods.immersiveengineering.Excavator.removeMineral("Iron Ore");
```