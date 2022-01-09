# Reservoir

## remove #移除

| 名称   | 类型          |
| ---- | ----------- |
| 配方名称 | 字符串[string] |

比如：
```ZenScript
// mods.immersiveproleum.ReservoirRegistry.remove(String recipeName);

mods.immersivepetroleum.ReservoirRegistry.remove("含水层");
```

## removeAll

| 名称 | 类型 |
| -- | -- |
|    |    |

比如：
```ZenScript
// mods.immersiveproleum.ReservoirRegistry.removeAll();

mods.immersivepetroleum.ReservoirRegistry.removeAll();
```

# 储油层构建器

## 构造器

| 名称             | 类型         |
| -------------- | ---------- |
| Fluid          | Fluidstack |
| Minimum Size   | int        |
| Maximum Size   | int        |
| Replenish Rate | int        |
| Weight         | int        |

### Weight

Weight is the Weighted Chance of a chunk containing that specific fluid reservoir. The weight is counted as in X in Total.

So if you have 5 Reservoir values at: 5, 5, 6, 8, 10

Then each respective entry will have a weighted chance of:
```
5  in 34
5  in 34
6  in 34
8  in 34
10 in 34
```

比如：
```zenscript
// 新mods.immersiveproleum.ReservoirBuilder(IfluidStack fluid, int minSize, int maxSize, int traceament, int traceamount);

new mods.immersivepetroleum.ReservoirBuilder(<fluid:minecraft:lava>, 1000, 5000, 20);
```

## 添加尺寸

| 名称        | 类型      |
| --------- | ------- |
| Blacklist | Boolean |
| 尺寸名称      | 字符串[]数组 |

比如：
```zenscript
// builderInstance.addDimensions(Boolian isBlacklist, String[…]dimensionNames);

builderInstance.addDimensions(false, ["minecraft:overworld"]);
```

## addBiomes

| 名称        | 类型      |
| --------- | ------- |
| Blacklist | Boolean |
| 生物群落名称    | 字符串[]数组 |

比如：
```zenscript
// builderInstance.addBiomes(Boolian isBlacklist, String[…]生物名称);

builderInstance.addBiomes(false, [["minecraft:plains"]);
```

## build

| 名称 | 类型          |
| -- | ----------- |
| 名称 | 字符串[string] |

### 序言
基础储藏因翻译而是小写的 - 自定义储藏应被适当地资本化(例如“深海石油储藏”)。

比如：
```zenscript
// builderInstance.build(String name);

builderInstance.build("示例名称");
```

---

复制/粘贴示例：
```ZenScript
新 ReservoirBuilder(<fluid:minecraft:lava>, 25000, 100000, 0, 20)
    .addDimensions(false, ["overworld"])
    .addBiomes(false, ["minecraft:desert Lava");
    .build("Desert Lava");
```
