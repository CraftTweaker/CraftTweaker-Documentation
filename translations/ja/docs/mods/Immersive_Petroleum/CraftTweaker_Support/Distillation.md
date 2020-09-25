# <unk>

## 削除

| 名称   | タイプ  |
| ---- | ---- |
| レシピ名 | 文字列型 |

例
```ZenScript
// mods.immersivepetroleum.DistillationTower.remove(String recipeName);

mods.immersivepetroleum.DistillationTower.remove("oilcracking");
```

## すべて削除

| 名称 | タイプ |
| -- | --- |
|    |     |

例
```ZenScript
mods.immersivepetroleum.DistillationTower.removeAll();
```

# ビルダー

## コンストラクター

| 名称 | タイプ |
| -- | --- |
|    |     |

例
```zenscript
// new mods.immersivepetroleum.DistillationBuilder();

new mods.immersivepetroleum.DistillationBuilder();
```

## setOutputFluid

| 名称    | タイプ                                         |
| ----- | ------------------------------------------- |
| 出力流体値 | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

例
```zenscript
// builderInstance.setOutputFluids(IFluidStack[] fluidOutputs);

builderInstance.setOutputFluids([<fluid:minecraft:water> * 1]);
```

## addByproduct(IItemStack item, int chance)

| 名称   | タイプ                                     |
| ---- | --------------------------------------- |
| 項目   | [ItemStack](/Vanilla/Items/IItemStack/) |
| チャンス | 整数 (0 - 100)                            |

例
```zenscript
// builderInstance.addByproduct(IItemStack item, int chance);

builderInstance.addByproduct(<item:minecraft:cobblestone>, 50);
```

## addByproduct(IItemStack item, double chance)

| 名称   | タイプ                                     |
| ---- | --------------------------------------- |
| 項目   | [ItemStack](/Vanilla/Items/IItemStack/) |
| チャンス | Double (0.0 - 1.0)                      |

例
```zenscript
// builderInstance.addByproduct(IItemStack item, double chance);

builderInstance.addByproduct(<item:minecraft:stone>, 0.25);
```

## setEnergyAndTime

| 名称     | タイプ      |
| ------ | -------- |
| Flux/t | 整数 (>=1) |
| Ticks  | 整数 (>=1) |

例
```zenscript
// builderInstance.setEnergyAndTime(int fluxPerTick, int ticks);

builderInstance.setEnergyAndTime(1024, 1);
```

## setEnergy

| 名称          | タイプ      |
| ----------- | -------- |
| FluxPerTick | 整数 (>=1) |

例
```zenscript
// builderInstance.setEnergy(int fluxPerTick);

builderInstance.setEnergy(1024);
```

## setTime

| 名称    | タイプ      |
| ----- | -------- |
| Ticks | 整数 (>=1) |

例
```zenscript
// builderInstance.setTime(int ticks);

builderInstance.setTime(1);
```

## ビルド

| 名称   | タイプ  |
| ---- | ---- |
| レシピ名 | 文字列型 |

例
```zenscript
// builderInstance.build(String recipeName);

builderInstance.build("example_name");
```

---

コピー/貼り付け例:
```zenscript
new DistillationBuilder()
    .setOutputFluids([<fluid:minecraft:water> * 1]) // Array of output fluids
    .setInputFluid(<tag:minecraft:lava>, 500) // Input Fluid Tag and the ammount of fluid in mB
    .addByproduct(<item:minecraft:cobblestone>, 50) // Chance using integer (0 - 100)
    .addByproduct(<item:minecraft:stone>, 0.25) // Chance using double (0.0 - 1.0)
    .addByproduct(<item:minecraft:obsidian>, 0.007) // Integer is for convenience, using double gives more control
    .setEnergyAndTime(1024, 1) // Can be done individualy with setEnergy(int) and setTime(int)
    .build("lava_to_solids");

new DistillationBuilder()
    .setOutputFluids([<fluid:minecraft:water> * 500])
    .setInputFluid(<tag:forge:concrete>, 500)
    .addByproduct(<item:minecraft:gravel>, 0.5)
    .addByproduct(<item:minecraft:sand>, 0.25)
    .addByproduct(<item:minecraft:sand>, 0.25)
    .addByproduct(<item:minecraft:clay_ball>, 0.125)
    .setEnergy(2048) // 2048 is the Default for Energy.
    .setTime(1) // 1 は Time のデフォルトです。
    .build("concrete_reversal");
```
