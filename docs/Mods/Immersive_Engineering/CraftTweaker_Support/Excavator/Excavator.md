# 斗轮式挖掘机

## 导入相关包
使用`mods.immersiveengineering.Excavator`以导入斗轮式挖掘机相关包

## 添加矿床

|是否必要  |类型                             |数据类型    |
|----------|--------------------------------|-----------|
|必要      |Name（名称）                     |字符串     |
|必要      |Mineral Weight（矿物权重）        |整数      |
|必要      |Fail Chance（失败几率）           |双精度型   |
|必要      |Ores（矿物）                     |字符串[]   |
|必要      |Chances（概率）                  |双精度型[]   |
|可选      |Dimension Whitelist（维度白名单）|整数[]  |
|可选      |Blacklist（设为维度黑名单）       |布尔值    |

### 例子
```JAVA
//例:
mods.immersiveengineering.Excavator.addMineral(String name, int mineralWeight, double failChance, String[] ores, double[] chances, @Optional int[] dimensionWhitelist, @Optional boolean blacklist);

mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["minecraft:iron_ore", "minecraft:diamond_ore"], [0.005, 0.01]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["minecraft:iron_ore", "minecraft:diamond_ore"], [0.005, 0.01], [1, 0, -1]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["minecraft:iron_ore", "minecraft:diamond_ore"], [0.005, 0.01], [1, 0, -1], true);
```



## 移除矿床

|是否必要   |类型                 |数据类型  |
|----------|---------------------|-----------|
|必要      |Name（名称）          |字符串     |

### 例子
```JAVA
//例:
mods.immersiveengineering.Excavator.removeMineral(String name);

mods.immersiveengineering.Excavator.removeMineral("Iron Ore");
```
