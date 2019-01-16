# 机器

格雷科技社区版在 `RecipeMap` 里存储所有的合成表。 为了得到它们，你需要向你的代码导入 `mods.gregtech.recipe.RecipeMap`。

合成表被分类在对应的机器里，调用 `RecipeMap.getByName(机器名称)` 来获取特定的合成表和构建器。

## 可用机器列表

- 压缩机： `compressor`
- 提取机： `extractor`
- 打粉机： `macerator`
- 洗矿厂： `orewasher`
- 热力离心机： `thermal_centrifuge`
- 电炉： `furnace`
- 微波炉： `microwave`
- 组装机： `assembler`
- 冲压机床： `forming_press`
- 流体装罐机： `fluid_canner`
- 等离子电弧炉： `plasma_arc_furnace`
- 电弧炉： `arc_furnace`
- 筛选机： `sifter`
- 精密激光蚀刻机： `laser_engraver`
- 搅拌机： `mixer`
- 高压釜： `autoclave`
- 电磁离析机： `electromagnetic_separator`
- 两极磁化机： `polarizer`
- 化学浸洗器： `chemical_bath`
- 酿造器： `brewer`
- 流体加热器： `fluid_heater`
- 蒸馏室： `distillery`
- 发酵槽： `fermenter`
- 流体固化器： `fluid_solidifier`
- 流体加热器： `fluid_extractor`
- 离心机： `centrifuge`
- 电解槽： `electrolyzer`
- 高炉： `blast_furnace`
- 聚爆压缩机： `implosion_compressor`
- 真空冷冻机： `vacuum_freezer`
- 化学反应器： `chemical reactor`
- 蒸馏塔： `distillation tower`
- 石油裂化机： `cracker`
- 热解炉： `pyro`
- 线材轧机： `wiremill`
- 卷板机： `metal_bender`
- 合金炉： `alloy_smelter`
- 装罐机： `canner`
- 车床： `lathe`
- 板材切割机： `cutting_saw`
- 压模器： `extruder`
- 锻造锤： `forge_hammer`
- 打包机： `packer`
- 解包机： `unpacker`
- 柴油发电机： `diesel_generator`
- 燃气轮机： `gas_turbine`
- 蒸汽轮机： `steam_turbine`
- 等离子发电机： `plasma_generator`

**尚未实现：**

- UU物质生成机： `uuamplifier`
- 热力发电机： `thermal_generator`
- 半流质发电机： `semi_fluid_generator`
- 聚变反应堆： `fusion_reactor`

**防火砖高炉** *使用了和普通的合成表不同的语法。* 例子：

```java
import mods.gregtech.recipe.PBFRecipeBuilder;

//防火砖高炉
PBFRecipeBuilder.start()
    .input(&lt;ore:ingotCompressedWroughtIron&gt; * 1)
    .output(&lt;ore:ingotSteel&gt;.firstItem * 1)
    .duration(250)
    .fuelAmount(2)
    .buildAndRegister();

//从防火砖高炉移除合成表
import mods.gregtech.recipe.RecipeMaps;

for recipe in RecipeMaps.getPrimitiveBlastFurnaceRecipes() {
    recipe.remove();
```

## 构建器信息

在获得 `RecipeMap` 的一个实例后，你可以使用它的构建器定义合成表

调用构建器方法：

```java
recipeMap.recipeBuilder()
```

这有点像 Java 的 `Stream&lt;T&gt;` ，有齐全的功能来控制你的合成表的行为。

一个电力高炉的例子：

```java
//电力高炉
val blast_furnace = mods.gregtech.recipe.RecipeMap.getByName("blast_furnace");
blast_furnace.recipeBuilder()
    .inputs(&lt;ore:ingotCompressedWroughtIron&gt; * 1)
    .fluidInputs([&lt;liquid:oxygen&gt; * 500])
    .outputs(&lt;ore:ingotSteel&gt;.firstItem * 1)
    .property("temperature", 1000) //this is a minimal temperature at which the item will be smelted
    .duration(40)
    .EUt(120)
    .buildAndRegister();
```

一些参数可以用 `.property()` 方法来指定:

| 名称          | 说明                  |
| ----------- | ------------------- |
| explosives  | 聚爆压缩机，炸药的数量         |
| circuit     | 可配置集成电路的机器。 集成电路的配置 |
| temperature | 高炉。 最低需要的温度。        |

这些参数**尚未实现：**

| 名称            | 说明                        |
| ------------- | ------------------------- |
| amplifier     | UU物质增殖液生产机。 输出UU物质增殖液的数量。 |
| eu_to_start | 聚变反应堆，开始聚变的 EU 数量         |

你可以像使用 “temperature” 一样使用它们

```java
.property("circuit", X)//，X 是集成电路的配置
.property("explosives", Y)//，Y 是使合成表工作的炸药数量
```

更多有用的方法：

```java
.inputs()
.fluidInputs()
.outputs()
.fluidOutputs()
.chancedOutput(&lt;itemstack&gt;, 0-10000) (10000 is 100%)
.duration() // 单位是tick
.notConsumable(X) // X 是CraftTweaker的ID。 像 .inputs 一样工作，但是物品不会被消耗
.hidden() // 这个合成表是否在 JEI 里隐藏
.chancedOutput(&lt;itemstack&gt;, 0-10000) (10000 is 100%) // 不是每一台机器都有效。 一些机器使用那一个。 最不能的一台是打粉机
.EUt() // 每tick的EU消耗
```

## 移除

移除一个合成表是由这个合成表的实例自身完成的，所以你需要先找到这个合成表。

例子：

```java
val compressor as RecipeMap = RecipeMap.getByName("compressor");

// findRecipe(long 电压, IItemHandlerModifiable 输入, IMultipleTankHandler/List&lt;FluidStack&gt; 流体输入)
compressor.findRecipe(2, [&lt;minecraft:redstone&gt;], null).remove();
```