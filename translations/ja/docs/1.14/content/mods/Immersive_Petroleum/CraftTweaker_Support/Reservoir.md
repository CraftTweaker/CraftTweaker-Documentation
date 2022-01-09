# Reservoir

## remove

| 名称   | Type |
| ---- | ---- |
| レシピ名 | 文字列型 |

Example:
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.remove(String recipeName);

mods.immersivepetroleum.ReservoirRegistry.remove("aquifer");
```

## removeAll

| 名称 | Type |
| -- | ---- |
|    |      |

Example:
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.removeAll();

mods.immersivepetroleum.ReservoirRegistry.removeAll();
```

# 貯水池ビルダー

## コンストラクター

| 名称             | Type       |
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

Example:
```zenscript
// new mods.immersivepetroleum.ReservoirBuilder(IFluidStack fluid, int minSize, int maxSize, int traceAmount, int weight);

new mods.immimmsivetroleum.ReservoirBuilder(<fluid:minecraft:lava>, 1000, 5000, 0, 20);
```

## addDimensions

| 名称        | Type           |
| --------- | -------------- |
| Blacklist | Boolean        |
| 寸法名       | String[] array |

Example:
```zenscript
// builderInstance.addDimensions(boolean isBlacklist, String[] dimensionNames);

builderInstance.addDimensions(false, ["minecraft:overworld"]);
```

## addBiomes

| 名称        | Type           |
| --------- | -------------- |
| Blacklist | Boolean        |
| バイオーム名    | String[] array |

Example:
```zenscript
// builderInstance.addBiomes(boolean isBlacklist, String[] biomeNames);

builderInstance.addBiomes(false, ["minecraft:plains"]);
```

## build

| 名称 | Type |
| -- | ---- |
| 名称 | 文字列型 |

### 序文
ベースリザーバーは翻訳されているように小文字です。カスタムリザーバーは適切に大文字にする必要があります(例:「ディープオーシャンオイル貯水池」)。

Example:
```zenscript
// builderInstance.build(String name);

builderInstance.build("Example Name");
```

---

コピー/貼り付け例:
```ZenScript
new ReservoirBuilder(<fluid:minecraft:lava>, 25000, 100000, 0, 20)
    .addDimensions(false, ["overworld"])
    .addBiomes(false, ["minecraft:desert"])
    .build("Desert Lava");
```
