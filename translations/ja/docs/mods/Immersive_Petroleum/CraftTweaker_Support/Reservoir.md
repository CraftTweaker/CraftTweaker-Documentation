# 貯水池:

## 削除

| 名称   | タイプ  |
| ---- | ---- |
| レシピ名 | 文字列型 |

例
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.remove(String recipeName);

mods.immersivepetroleum.ReservoirRegistry.remove("aquifer");
```

## すべて削除

| 名称 | タイプ |
| -- | --- |
|    |     |

例
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.removeAll();

mods.immersivepetroleum.ReservoirRegistry.removeAll();
```

# 貯水池ビルダー

## コンストラクター

| 名称    | タイプ                                         |
| ----- | ------------------------------------------- |
| Fluid | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |
| 最小サイズ | int                                         |
| 最大サイズ | int                                         |
| 補充率   | int                                         |
| 重量    | int                                         |

### 重量

重量は、特定の流体貯水池を含むチャンクの重量チャンスです。 重量は、合計でXとしてカウントされます。

So if you have 5 Reservoir values at: 5, 5, 6, 8, 10

それぞれのエントリには、以下の重み付きの可能性があります。
```
5 in 34
5 in 34
6 in 34
8 in 34
10 in 34
```

例
```zenscript
// new mods.immersivepetroleum.ReservoirBuilder(IFluidStack fluid, int minSize, int maxSize, int traceAmount, int weight);

new mods.immimmsivetroleum.ReservoirBuilder(<fluid:minecraft:lava>, 1000, 5000, 0, 20);
```

## addDimensions

| 名称       | タイプ            |
| -------- | -------------- |
| ブラック リスト | Boolean        |
| 寸法名      | String[] array |

例
```zenscript
// builderInstance.addDimensions(boolean isBlacklist, String[] dimensionNames);

builderInstance.addDimensions(false, ["minecraft:overworld"]);
```

## addBiomes

| 名称       | タイプ            |
| -------- | -------------- |
| ブラック リスト | Boolean        |
| バイオーム名   | String[] array |

例
```zenscript
// builderInstance.addBiomes(boolean isBlacklist, String[] biomeNames);

builderInstance.addBiomes(false, ["minecraft:plains"]);
```

## ビルド

| 名称 | タイプ  |
| -- | ---- |
| 名称 | 文字列型 |

### 序文
ベースリザーバーは翻訳されているように小文字です。カスタムリザーバーは適切に大文字にする必要があります(例:「ディープオーシャンオイル貯水池」)。

例
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
