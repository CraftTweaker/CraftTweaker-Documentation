# 库

## remove #移除

| 名称   | 类型          |
| ---- | ----------- |
| 配方名称 | 字符串[string] |

比如：
```ZenScript
// mods.immersiveproleum.ReservoirRegistry.remove(String recipeName);

mods.immersivepetroleum.ReservoirRegistry.remove("含水层");
```

## 全部移除

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

| 名称   | 类型                                          |
| ---- | ------------------------------------------- |
| 流体   | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |
| 最小尺寸 | 整数                                          |
| 最大尺寸 | 整数                                          |
| 增补率  | 整数                                          |
| 权重   | 整数                                          |

### 权重

重量是一个含有该特定液体库的区块的加权机会。 重量按Total的X值计算。

所以，如果你有 5 个储备值： 5, 5, 6, 8, 10

然后每个相应条目都有加权几率：
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

| 名称   | 类型      |
| ---- | ------- |
| 黑名单  | Boolean |
| 尺寸名称 | 字符串[]数组 |

比如：
```zenscript
// builderInstance.addDimensions(Boolian isBlacklist, String[…]dimensionNames);

builderInstance.addDimensions(false, ["minecraft:overworld"]);
```

## addBiomes

| 名称     | 类型      |
| ------ | ------- |
| 黑名单    | Boolean |
| 生物群落名称 | 字符串[]数组 |

比如：
```zenscript
// builderInstance.addBiomes(Boolian isBlacklist, String[…]生物名称);

builderInstance.addBiomes(false, [["minecraft:plains"]);
```

## 构建中

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
