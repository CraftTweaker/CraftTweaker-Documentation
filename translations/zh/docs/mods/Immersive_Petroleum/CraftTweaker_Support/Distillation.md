# 蒸馏器

## remove #移除

| 名称   | 类型          |
| ---- | ----------- |
| 配方名称 | 字符串[string] |

比如：
```ZenScript
// mods.immersivepolleum.StillationTower.remove(String recipeName);

mods.immersivepetroleum.StillationTower.remove("石油粉碎");
```

## 全部移除

| 名称 | 类型 |
| -- | -- |
|    |    |

比如：
```ZenScript
mods.immersiveproleum.StillationTower.removeAll();
```

# 构建器

## 构造器

| 名称 | 类型 |
| -- | -- |
|    |    |

比如：
```zenscript
// 新mods.immersivepolleum.StillationBuilder();

new mods.immersivepetroleum.StillationBuilder();
```

## setOutputFluid

| 名称   | 类型                                          |
| ---- | ------------------------------------------- |
| 输出流体 | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

比如：
```zenscript
// builderInstance.setOutputFluids(IFluidStack[] fluidOutputs);

builderInstance.setOutputFluids([<fluid:minecraft:water> * 1]);
```

## 添加 Byproduct(StemStack 项, int 概率)

| 名称  | 类型                                 |
| --- | ---------------------------------- |
| 项目  | [物品应用](/Vanilla/Items/IItemStack/) |
| 可能的 | 整数 (0-100)                         |

比如：
```zenscript
// builderInstance.addByproduct(ItemStack 物品, int chance);

builderInstance.addByproduct(<item:minecraft:cobblestone>, 50);
```

## 添加 Byproduct(StemStack 项目，双次概率)

| 名称  | 类型                                 |
| --- | ---------------------------------- |
| 项目  | [物品应用](/Vanilla/Items/IItemStack/) |
| 可能的 | 双倍(0.0 - 1.0)                      |

比如：
```zenscript
// builderInstance.addByproduct(ItemStack 项目，双次机会)；

builderInstance.addByproduct(<item:minecraft:stone>, 0.25)；
```

## setEnergyAndTime

| 名称     | 类型      |
| ------ | ------- |
| Flux/t | 整数(>=1) |
| 服务单    | 整数(>=1) |

比如：
```zenscript
// builderInstance.setEnergyAndTime(int fluxPerTick, int ticks);

builderInstance.setEnergyAndTime(1024;
```

## set能源

| 名称        | 类型      |
| --------- | ------- |
| 流体PerTick | 整数(>=1) |

比如：
```zenscript
// builderInstance.setEnergy(int fluxPerTick);

builderInstance.setEnergy(1024);
```

## setTime

| 名称  | 类型      |
| --- | ------- |
| 服务单 | 整数(>=1) |

比如：
```zenscript
// builderInstance.setTime(int ticks)；

builderInstance.setTime(1)；
```

## 构建中

| 名称   | 类型          |
| ---- | ----------- |
| 配方名称 | 字符串[string] |

比如：
```zenscript
// builderInstance.build(String recipeName);

builderInstance.build("example_name");
```

---

复制/粘贴示例：
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
    .setTime(1) / 1 是时间的默认值。
    .build(“commite_reversal”)；
```
