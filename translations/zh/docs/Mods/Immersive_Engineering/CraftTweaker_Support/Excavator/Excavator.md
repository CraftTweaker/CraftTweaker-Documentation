# 挖掘者

## 调用包

您可以使用 `mods.immersiveengineering.Excavator` 来调用挖掘器包。

## 添加矿石

| 必填 | 类型    | 数据类型     |
| -- | ----- | -------- |
| 必要 | 名称    | 字符串      |
| 必要 | 矿物权重  | int      |
| 必填 | 失败的机会 | 双精度      |
| 必要 | Ores  | 字符串[……]  |
| 必要 | 概率    | 加倍[……]   |
| 可选 | 尺寸白名单 | 整数组 [……] |
| 可选 | 黑名单   | boolean  |

### 例子

```zenscript
//Example:
mods.immersiveengineering.Excavator.addMineral(String name, int mineralWeight, double failChance, String[] ores, double[] chances, @Optional int[] dimensionWhitelist, @Optional boolean blacklist);

mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1], true);
```

## 移除矿石

| 必填 | 类型 | 数据类型        |
| -- | -- | ----------- |
| 必填 | 名称 | 字符串[string] |

### 例子

```zenscript
//例如：
mods.immersiveengineering.Excavator.removeMineral(String name);

mods.immersiveengineering.Excavator.removeMineral(“铁矿石”);
```